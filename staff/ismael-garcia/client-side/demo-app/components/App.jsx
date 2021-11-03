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
            }
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

        this.setState({ view: 'landing' })
    }

    
    goToSignUp = () => this.setState({ view: 'signup' })
    
    goToSignIn = () => this.setState({ view: 'signin' })

    goToSpinner = () => this.setState({ view: 'spinner'})

    goToPostSignUp = () => this.setState({ view: 'post-signup' })

    goToHome = () => this.setState({ view: 'home' })

    openModal = (message) => this.setState({ modal: { status: true, message }}) 

    onSignUp = (name, username, password) => {
        this.goToSpinner()

        try {
            signUpUser(name, username, password, error => {
                if (error) {
                    alert(error.message)

                    this.goToSignUp()

                    return
                }

                this.goToPostSignUp()
            })
        } catch (error) {
            alert(error.message)

            this.goToSignUp()
        }
    }

    onSignIn = (username, password) => {
        this.goToSpinner()

        try {
            signInUser(username, password, (error, token) => {
                if (error) {
                    // alert(error.message)
                    this.openModal(error.message)

                    this.goToSignIn()

                    return
                }

                sessionStorage.token = token

                try {
                    retrieveUser(sessionStorage.token, (error, user) => {
                        if (error) {
                            alert(error.message)

                            this.goToSignIn()

                            return
                        }

                        var name = user.name

                        this.setState({ name })

                        this.goToHome()
                    })
                } catch (error) {
                    alert(error.message)

                    this.goToSignIn()
                }
            })
        } catch (error) {
            alert(error.message)

            this.goToSignIn()
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

            {this.state.view === 'signup' && <SignUp onSignUp={this.onSignUp} onSignIn={this.goToSignIn} />}

            {this.state.view === 'post-signup' && <PostSignUp onSignIn={this.goToSignIn} />}

            {this.state.view === 'signin' && <SignIn  onSignIn={this.onSignIn} onSignUp={this.goToSignUp} />}

            {this.state.view === 'home' && <Home name={this.state.name} onSignOut={this.resetTokenAndGoToLanding} />}

            {this.state.view === 'spinner' && <Spinner />}

            {this.state.modal.status === true && <Modal message={this.state.modal.message} />}
        </>
    }

    // render() {
    //     return <>
    //         {/* <Modal message='Hola chato, estoy funcionando' /> */}
    //     </>
    // }
}