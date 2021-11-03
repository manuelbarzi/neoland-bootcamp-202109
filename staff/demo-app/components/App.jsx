class App extends React.Component {
    constructor() {
        super()
        logger.info("App -> constructor")
        this.state = {
            view: sessionStorage.token ? "" : "landing",
            name: null,
            spinner: sessionStorage.token ? true : false,
            modal: false, 
            title: "",
            text: ""
        };
    }

    componentDidMount() {
        logger.info("App -> componentDidMount")
        if (sessionStorage.token) {
            try {
                retrieveUser(sessionStorage.token, (error, user) => {
                    if (error) {

                        this.resetTokenAndGoToLogin()

                        return

                    } else {

                        var name = user.name

                        this.setState({
                            name,
                            view: "home",
                            spinner: false
                        })
                    }
                })
            } catch (error) {
                var errorM = error.message

                this.props.showModal("Error", errorM)

                this.resetTokenAndGoToLogin()

                return
            }
        }
    }

    resetTokenAndGoToLogin = () => {
        delete sessionStorage.token

        this.setState({
            view: "landing",
            spinner: false
        })
    }

    showModal = (title, text) => this.setState({ modal: true, title, text })

    closeModal = () => this.setState({ modal: false })

    showSpinner = () => this.setState({ spinner: true })

    hideSpinner = () => this.setState({ spinner: false })

    onSignIn = () => this.setState({ view: "login" })

    onSignUp = () => this.setState({ view: "register" })

    postSignIn = () => this.setState({ view: "home", name: this.state.name })

    onProfile = () => this.setState({ view: "profile" })

    signOut = () => this.setState({ view: !(sessionStorage.token ? sessionStorage.token = "" : sessionStorage.token = "") ? "landing" : "home" })

    onUnregister = () => this.setState({ view: "unregister" })

    onChangePassword = () => this.setState({ view: "change--password" })

    onChangeData = () => this.setState({ view: "modify" })

    onModal = () => this.setState({ view: "modal" })

    render() {
        logger.info("App -> render")

        return <React.Fragment>

            {this.state.view === "landing" &&
                <Landing
                    onSignIn={this.onSignIn}
                    onSignUp={this.onSignUp}
                ></Landing>}

            {this.state.view === "register" && <SignUp
                title={this.state.title} text={this.state.text}
                onSignIn={this.onSignIn}
                onSignUp={this.onSignUp}
                showSpinner={this.showSpinner}
                hideSpinner={this.hideSpinner}
                showModal={this.showModal}
            ></SignUp>}

            {this.state.view === "login" &&
                <SignIn view={this.state.view}
                    title={this.state.title} text={this.state.text}
                    onSignIn={this.onSignIn}
                    onSignUp={this.onSignUp}
                    postSignIn={this.postSignIn}
                    resetTokenAndGoToLogin={this.resetTokenAndGoToLogin}
                    showSpinner={this.showSpinner}
                    hideSpinner={this.hideSpinner}
                    showModal={this.showModal}
                ></SignIn>}

            {this.state.view === "home" &&
                <Home name={this.state.name}
                    title={this.state.title} text={this.state.text}
                    postSignIn={this.postSignIn}
                    onProfile={this.onProfile}
                    signOut={this.signOut}
                    showSpinner={this.showSpinner}
                    hideSpinner={this.hideSpinner}
                    showModal={this.showModal}
                ></Home>}

            {this.state.view === "profile" && <Profile
                postSignIn={this.postSignIn}
                onUnregister={this.onUnregister}
                onChangePassword={this.onChangePassword}
                onChangeData={this.onChangeData}
            ></Profile>}

            {this.state.view === "unregister" && <Unregister
                title={this.state.title} text={this.state.text}
                onProfile={this.onProfile}
                showSpinner={this.showSpinner}
                hideSpinner={this.hideSpinner}
                onUnregister={this.onUnregister}
                showModal={this.showModal}
            ></Unregister>}

            {this.state.view === "change--password" && <ChangePassword
                title={this.state.title} text={this.state.text}
                onProfile={this.onProfile}
                showSpinner={this.showSpinner}
                hideSpinner={this.hideSpinner}
                onChangePassword={this.onChangePassword}
                showModal={this.showModal}
            ></ChangePassword>}

            {this.state.view === "modify" && <ChangeData
                title={this.state.title} text={this.state.text}
                onProfile={this.onProfile}
                showSpinner={this.showSpinner}
                hideSpinner={this.hideSpinner}
                onChangeData={this.onChangeData}
                showModal={this.showModal}
            ></ChangeData>}

            {this.state.spinner && <Spinner></Spinner>}

            {this.state.modal && <Modal title={this.state.title} text={this.state.text}
                closeModal={this.closeModal}
                showModal={this.showModal}
            ></Modal>}

        </React.Fragment>
    }
}

