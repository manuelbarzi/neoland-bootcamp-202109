class App extends React.Component {
    constructor() {
        super()
        logger.info("App -> constructor")
        this.state = {
            view: (sessionStorage.token ? "spinner" : "landing"),
            name: null
        };
    }

    componentDidMount() {
        logger.info("App -> componentDidMount")
        if (sessionStorage.token) {
            try {
                retrieveUser(sessionStorage.token, (error, user) => {
                    if (error) {
                        alert(error.message)
                        this.resetTokenAndGoToLogin()

                        return
                    } else {
                        var name = user.name
                        this.setState({ name, view: "home" })
                    }
                })
            } catch (error) {
                alert(error.message)
                this.resetTokenAndGoToLogin()

                return
            }
        }
    }

    resetTokenAndGoToLogin = () => {
        delete sessionStorage.token

        this.setState({ view: "landing" })
    }

    goToSpinner = () => this.setState({ view: "spinner" })

    onSignIn = () => this.setState({ view: "login" })

    onSignUp = () => this.setState({ view: "register" })

    postSignIn = () => this.setState({ view: "home", name: this.state.name })

    onProfile = () => this.setState({ view: "profile" })

    signOut = () => this.setState({ view: !(sessionStorage.token ? sessionStorage.token = "" : sessionStorage.token = "") ? "landing" : "home" })

    onUnregister = () => this.setState({ view: "unregister" })

    onChangePassword = () => this.setState({ view: "change--password" })

    onChangeData = () => this.setState({ view: "modify" })

    onModal = () => this.setState({ view: "modal" })

    close = () => this.setState({ view: "login" })



    render() {
        logger.info("App -> render")

        return <React.Fragment>

            {this.state.view === "landing" &&
                <Landing
                    onSignIn={this.onSignIn}
                    onSignUp={this.onSignUp}
                ></Landing>}

            {this.state.view === "register" && <SignUp
                onSignIn={this.onSignIn}
                onSignUp={this.onSignUp}
                goToSpinner={this.goToSpinner}
            ></SignUp>}

            {this.state.view === "login" &&
                <SignIn view={this.state.view}
                    onSignIn={this.onSignIn}
                    onSignUp={this.onSignUp}
                    postSignIn={this.postSignIn}
                    goToSpinner={this.goToSpinner}
                    resetTokenAndGoToLogin={this.resetTokenAndGoToLogin}
                    onModal={this.onModal}
                ></SignIn>}

            {this.state.view === "home" &&
                <Home name={this.state.name}
                    postSignIn={this.postSignIn}
                    onProfile={this.onProfile}
                    signOut={this.signOut}
                    goToSpinner={this.goToSpinner}
                    onModal={this.onModal}
                ></Home>}

            {this.state.view === "profile" && <Profile
                postSignIn={this.postSignIn}
                onUnregister={this.onUnregister}
                onChangePassword={this.onChangePassword}
                onChangeData={this.onChangeData}
            ></Profile>}

            {this.state.view === "unregister" && <Unregister
                onProfile={this.onProfile}
                goToSpinner={this.goToSpinner}
            ></Unregister>}

            {this.state.view === "change--password" && <ChangePassword
                onProfile={this.onProfile}
                goToSpinner={this.goToSpinner}
            ></ChangePassword>}

            {this.state.view === "modify" && <ChangeData
                onProfile={this.onProfile}
                goToSpinner={this.goToSpinner}
            ></ChangeData>}

            {this.state.view === "spinner" && <Spinner></Spinner>}

            {this.state.view === "modal" && <Modal
                close={this.close}
            ></Modal>}

        </React.Fragment>
    }
}

