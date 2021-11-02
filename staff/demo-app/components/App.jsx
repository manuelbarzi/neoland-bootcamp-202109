class App extends React.Component {
    constructor() {
        super()
        this.state = { view: (!sessionStorage.token ? "landing" : "home") };
    }

    render() {
        return <React.Fragment>

            {this.state.view === "landing" &&
                <Landing
                    onSignIn={() => this.setState({ view: "login" })}
                    onSignUp={() => this.setState({ view: "register" })}
                ></Landing>}

            {this.state.view === "register" && <SignUp onSignIn={() => this.setState({ view: "login" })}></SignUp>}

            {this.state.view === "login" &&
                <SignIn
                    onSignUp={() => this.setState({ view: "register" })}
                    postSignIn={() => this.setState({ view: "home" })}
                ></SignIn>}

            {this.state.view === "home" &&
                <Home
                    onProfile={() => this.setState({ view: "profile" })}
                    signOut={() => this.setState({ view: !(sessionStorage.token ? sessionStorage.token = "" : sessionStorage.token = "") ? "landing" : "home" })}
                ></Home>}

            {this.state.view === "profile" && <Profile
                postSignIn={() => this.setState({ view: "home" })}
                onUnregister={() => this.setState({ view: "unregister" })}
                onChangePassword={() => this.setState({ view: "change--password" })}
                onChangeData={() => this.setState({ view: "modify" })}
            ></Profile>}

            {this.state.view === "unregister" && <Unregister
                onProfile={() => this.setState({ view: "profile" })}
            ></Unregister>}

            {this.state.view === "change--password" && <ChangePassword
                onProfile={() => this.setState({ view: "profile" })}
            ></ChangePassword>}

            {this.state.view === "modify" && <ChangeData
                onProfile={() => this.setState({ view: "profile" })}
            ></ChangeData>}

        </React.Fragment>
    }
}

