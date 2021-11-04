class App extends React.Component {
    constructor() {
        super()
        this.state = {
            view: sessionStorage.token ? '' : 'landing',
            name: null,
            spinner: sessionStorage.token ? true : false,
            modal: ''
        }
    }

    componentDidMount() {
        if (sessionStorage.token) {
            try {
                retrieveUser(sessionStorage.token, (error, user) => {
                    if (error) {
                        alert(error.message),
                        this.deleteTokenAndLanding()

                    } else {
                        var name = user.name
                        this.setState({
                            name: name,
                            view: 'home',
                            spinner: false
                        })
                    }
                })
            } catch (error) {
                alert(error.message),
                this.deleteTokenAndLanding()
            }
        }
    }

    deleteTokenAndSignOut = () => {
        this.setState({ view: 'signin' })
        delete sessionStorage.token
    }

    deleteTokenAndLanding = () => {
        delete sessionStorage.token
        this.setState({ 
            view: 'landing',
            spinner: false
    })
    }

    goToSignUp = () => this.setState({ view: 'signup' })
    goToSignIn = () => this.setState({ view: 'signin' })
    goToLanding = () => this.setState({ view: 'landing' })

    showSpinner = () => this.setState({ spinner: true})
    hideSpinner = () => this.setState({ spinner: false})

    signUp = (name, lastName, username, password, checkbox) => {
        this.showSpinner()
        try {
            signUpUser(name, lastName, username, password, checkbox, (error) => {
                if (error) {
                    alert(error.message)
                    this.hideSpinner()

                } else { this.setState({ view: 'thank-you', spinner: false }) }

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
                    alert(error.message)
                    this.hideSpinner()
                } else {
                    sessionStorage.token = token

                    try {
                        retrieveUser(sessionStorage.token, (error, user) => {
                            if (error) {
                                alert(error.message)
                                this.hideSpinner()
                            } else {
                                var name = user.name
                                this.setState({
                                    name: name,
                                    view: 'home',
                                    spinner: false
                                })
                            }
                        })
                    } catch (error) {
                        alert(error.message)
                        this.hideSpinner()
                    }
                }
            })
        } catch (error) {
            alert(error.message)
            this.hideSpinner()
        }
    }

    render() {
        return <React.Fragment>
            {this.state.view === 'landing' && 
                <Landing
                    OnSignIn={this.goToSignIn}
                    OnSignUp={this.goToSignUp}
                ></Landing>}

            {this.state.view === 'signup' &&
                <SignUp
                    OnSignIn={this.goToSignIn}
                    OnSignUp={this.signUp}
                ></SignUp>}

            {this.state.view === 'thank-you' &&
                <ThankYou
                    OnSignIn={this.goToSignIn}
                ></ThankYou>}

            {this.state.view === 'signin' &&
                <SignIn
                    OnSignUp={this.goToSignUp}
                    OnSignIn={this.signIn}
                ></SignIn>}

            {this.state.view === 'home' && 
                <Home
                    name={this.state.name}
                    OnSignOut={this.deleteTokenAndSignOut}
                    OnDelete={this.deleteTokenAndLanding}
                    OnStartFlow={this.showSpinner}
                    OnEndFlow={this.hideSpinner}
                ></Home>}

            {this.state.spinner && <Spinner></Spinner>}

            {this.state.modal === '' && <Modal></Modal>}

        </React.Fragment>
    }
}

export default App