class App extends React.Component {
    constructor() {
        logger.info('App -> constructor')

        super()

        this.state = { 
            view: sessionStorage.token ? 'spinner' : 'landing',
            name: null,
            modal: {
                status: false,
                message: ''
            },
            spinner: sessionStorage.token ? true : false
        }
    }

    componentDidMount() {
        logger.info('App -> componentDidMount')

        if (sessionStorage.token) {
            try {
                retrieveUser(sessionStorage.token, (error, user) => {
                    if (error) {
                        alert(error.message)

                        this.resetTokenAndGoToLanding()

                        return
                    }

                    var name = user.name

                    this.setState({ name })

                    this.goToHome()
                })
            } catch (error) {
                alert(error.message)

                this.resetTokenAndGoToLanding()

                return // Por qué este return?
            }
        }
    }

    resetTokenAndGoToLanding = () => {
        delete sessionStorage.token

        this.setState({ 
            view: 'landing',
            spinner: false 
        })
    }

    
    goToSignUp = () => this.setState({ view: 'signup' })
    
    goToSignIn = () => this.setState({ view: 'signin' })

    showSpinner = () => this.setState({ spinner: true })

    hideSpinner = () => this.setState({ spinner: false })

    goToPostSignUp = () => this.setState({ view: 'post-signup' })

    goToHome = () => this.setState({ view: 'home' })

    openModal = (message) => this.setState({ modal: { status: true, message }}) 

    signUp = (name, username, password) => {
        this.showSpinner()

        try {
            signUpUser(name, username, password, error => {
                if (error) {
                    alert(error.message)

                    this.hideSpinner()

                    return
                }

                this.goToPostSignUp()

                this.hideSpinner()
            })
        } catch (error) {
            alert(error.message)

            this.hideSpinner()
        }
    }

    signIn = (username, password) => {
        this.showSpinner()

        try {
            signInUser(username, password, (error, token) => {
                if (error) {
                    // alert(error.message)
                    this.openModal(error.message)

                    this.hideSpinner()

                    return
                }

                sessionStorage.token = token

                try {
                    retrieveUser(sessionStorage.token, (error, user) => {
                        if (error) {
                            alert(error.message)

                            this.hideSpinner()

                            return
                        }

                        var name = user.name

                        this.setState({ name })

                        this.goToHome()

                        this.hideSpinner()
                    })
                } catch (error) {
                    alert(error.message)

                    this.hideSpinner()
                }
            })
        } catch (error) {
            alert(error.message)

            this.hideSpinner()
        }
    }

    render() {
        logger.info('App -> render')
        
        return <>
            <Logo image="./assets/logo.png" text='Demo App' />

            {/* <Time /> */}

            {this.state.view === 'landing' && 
            <Landing
                onSignIn={this.goToSignIn}
                onSignUp={this.goToSignUp}
            />}

            {this.state.view === 'signup' && <SignUp onSignUp={this.signUp} onSignIn={this.goToSignIn} />}

            {this.state.view === 'post-signup' && <PostSignUp onSignIn={this.goToSignIn} />}

            {this.state.view === 'signin' && <SignIn  onSignIn={this.signIn} onSignUp={this.goToSignUp} />}

            {this.state.view === 'home' && <Home 
            name={this.state.name} 
            onSignOut={this.resetTokenAndGoToLanding}
            onFlowStart={this.showSpinner}
            onFlowEnd={this.hideSpinner} />}

            {this.state.spinner && <Spinner />}

            {this.state.modal.status === true && <Modal message={this.state.modal.message} />}
        </>
    }
}