class App extends React.Component {
    constructor (){
    super ()
    this.state = {
        view: sessionStorage.token ? 'spinner' : 'landing',
        name : null                
    }
    }

    componentDidMount(){
        if (sessionStorage.token){
            try {
                retrieveUser(sessionStorage.token,(error, user) => {
                    if (error) {
                        alert(error.message)
                        this.setState({view:'landing'})
                        return
                    }

                         var name = user.name
                         this.setState({
                             name: name,
                             view: 'home'
                            })

                })
            } catch (error) {
                alert(error.message)
                this.setState({view:'landing'})
            }
        }
    }

    render() {
        return <React.Fragment>
            {this.state.view === 'landing' && <Landing 
            OnSignIn={() => this.setState({view: 'signin'})}
            OnSignUp={() => this.setState({view: 'signup'})}
            ></Landing>}
            
            {this.state.view === 'signup' && 
                <SignUp
                OnSignIn={() => this.setState({view: 'signin'})}
                OnSignUp={(name, lastName, username, password, checkbox) =>{
                    try {
                        signUpUser(name, lastName, username, password, checkbox, (error) => {
                            if (error) {
                                alert(error.message)
                                return
                            }
                            this.setState({view: 'thank-you'})
                
                        })
                    } catch (error) {
                        alert(error.message)
                    }
                }}
                ></SignUp>}
            
            {this.state.view === 'thank-you' && 
                <ThankYou
                OnSignIn={() => this.setState({view: 'signin'})}
                ></ThankYou>}

            {this.state.view === 'signin' && 
                <SignIn
                OnSignUp={() => this.setState({view: 'signup'})}
                OnSignIn={(username, password) => {
                    try {
                        signInUser(username, password, (error, token) => {
                            if (error) {
                                alert(error.message)
                                
                                return
                            }
                
                            sessionStorage.token = token
                            
                            try {
                                    retrieveUser(sessionStorage.token,(error, user) => {
                                        if (error) {
                                            alert(error.message)
                    
                                            return
                                        }
                    
                                             var name = user.name
                                             this.setState({
                                                 name: name,
                                                 view: 'home'
                                                })

                                    })
                                } catch (error) {
                                    alert(error.message)
                                }
                        })
                    } catch (error) {
                        alert(error.message)
                    }
                }}
                ></SignIn>}

            {this.state.view === 'home' && <Home 
            name={this.state.name} 
            OnSignOut={this.deleteTokenAndSignOut}
            OnDelete={this.deleteTokenAndLanding}
            ></Home>}
                
                
                
        </React.Fragment>
    }

    deleteTokenAndSignOut = () => {
        this.setState({view: 'signin'})
        delete sessionStorage.token
    }

    deleteTokenAndLanding = () => {
        this.setState({view: 'landind'})
        delete sessionStorage.token
    }
}