class App extends React.Component {
    constructor() {
        super()

        this.state = { view: !sessionStorage.token ? 'landing' : 'home' }
        // this.state = { view: 'home' }
    }

    render() {
        return <>
            <Logo image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/1200px-Flat_tick_icon.svg.png" text="Demo App" />
            <Time />

            {this.state.view === 'landing' && <Landing
                onSignIn={() => this.setState({ view: 'signin' })}
                onSignUp={() => this.setState({ view: 'signup' })}
            />}

            {this.state.view === 'signup' && <SignUp onSignUp={(name, username, password) => {
                try {
                    signupUser(name, username, password, error => {
                        if (error) {
                            alert(error.message)

                            return
                        }

                        this.setState({ view: 'post-signup' })
                    })
                } catch (error) {
                    alert(error.message)
                }
            }} />}

            {this.state.view === 'post-signup' && <PostSignUp onSignIn={() => this.setState({ view: 'signin' })} />}

            {this.state.view === 'signin' && <h1>TODO show signin</h1>}

            {this.state.view === 'home' && <Home />}
        </>
    }
}