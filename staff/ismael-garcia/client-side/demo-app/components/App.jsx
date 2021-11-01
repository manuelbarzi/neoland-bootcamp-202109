class App extends React.Component {
    constructor() {
        super()

        this.state = { view: !sessionStorage.token ? 'landing' : 'home' }
    }

    render() {
        return <>
            {this.state.view === 'landing' && 
            <Landing
                onSignIn={() => this.setState({ view: 'signin' })}
                onSignUp={() => this.setState({ view: 'signup' })}
            />}

            {this.state.view === 'signup' && <SignUp onSignUp={(name, username, password) => {
                try {
                    signUpUser(name, username, password, error => {
                        if (error) {
                            alert(error.message)

                            return
                        }

                        this.setState({ view: 'post-signup'})
                    })
                } catch (error) {
                    alert(error.message)
                }
            }} />}

            {this.state.view === 'post-signup' && <PostSignUp onSignIn={() => this.setState({ view: 'signin' })} />}

            {this.state.view === 'signin' && <SignIn /> }

            {this.state.view === 'home' && <Home />}
        </>
    }
}