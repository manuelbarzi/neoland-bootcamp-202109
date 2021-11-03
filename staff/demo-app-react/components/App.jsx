class App extends React.Component {
    constructor() {
        super()
        this.state = {
            view: "landing",
        }
    }

    // componentDidMount() {

    // }

    goToSignIn = () => this.setState({ view: "signin" })
    goToSignUp = () => this.setState({ view: "signup" })

    signUp = (name, username, password) => {
        try {
            signupUser(name, username, password, (error) => {
                if (error) {
                    alert(error.message)

                    return
                }

                this.setState({ view: "post-signup" })
            })
        } catch (error) {
            alert(error.message)

            this.goToSignUp()
        }
    }

    render() {
        return (
            <>
                {this.state.view === "landing" && (
                    <Landing
                        onSignIn={this.goToSignIn}
                        onSignUp={this.goToSignUp}
                    />
                )}

                {this.state.view === "signin" && (
                    <SignIn onSignUp={this.goToSignUp} />
                )}

                {this.state.view === "signup" && (
                    <SignUp 
                        onSignIn={this.goToSignIn} 
                        onSignUp={this.signUp}
                        />
                )}

                {this.state.view === "post-signup" && (
                    <PostSignUp />
                )}
            </>
        )
    }
}