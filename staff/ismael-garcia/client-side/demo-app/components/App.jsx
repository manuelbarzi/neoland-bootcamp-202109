class App extends React.Component {
    constructor() {
        logger.info('App -> constructor')

        super()

        this.state = { 
            view: sessionStorage.token ? 'spinner' : 'landing',
            name: null
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
                    alert(error.message)

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
            <Logo image='https://w7.pngwing.com/pngs/491/792/png-transparent-ladybug-ladybird-insect-beetle-nature-dotted-spring-bug-lady-bug-lady-bird-thumbnail.png' text='Demo App' />

            {/* <Time /> */}

            {this.state.view === 'landing' && 
            <Landing
                onSignIn={this.goToSignIn}
                onSignUp={this.goToSignUp}
            />}

            {this.state.view === 'signup' && <SignUp  onSignUp={this.onSignUp} onSignIn={this.goToSignIn} />}

            {this.state.view === 'post-signup' && <PostSignUp onSignIn={this.goToSignIn} />}

            {this.state.view === 'signin' && <SignIn  onSignIn={this.onSignIn} onSignUp={this.goToSignUp} />}

            {this.state.view === 'home' && <Home name={this.state.name} onSignOut={this.resetTokenAndGoToLanding} />}

            {this.state.view === 'spinner' && <Spinner />}
        </>
    }
}