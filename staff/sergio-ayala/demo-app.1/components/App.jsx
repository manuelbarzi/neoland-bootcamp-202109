// class App extends React.Component {
//     constructor() {
//         super()

//         this.state = { view: !sessionStorage.token ? 'landing' : 'home' }
//         // this.state = { view: 'home' }
//     }

//     render() {
//         return <>
//             {this.state.view === 'landing' && <Landing
//                 onSignIn={() => this.setState({ view: 'signin' })}
//                 onSignUp={() => this.setState({ view: 'signup' })}
//             />}

//             {this.state.view === 'signup' && <SignUp onSignUp={(name, username, password) => {
//                 try {
//                     signupUser(name, username, password, error => {
//                         if (error) {
//                             alert(error.message)

//                             return
//                         }

//                         this.setState({ view: 'post-signup' })
//                     })
//                 } catch (error) {
//                     alert(error.message)
//                 }
//             }} />}

//             {this.state.view === 'post-signup' && <PostSignUp onSignIn={() => this.setState({ view: 'signin' })} />}

//             {this.state.view === 'signin' && <h1>TODO show signin</h1>}

//             {this.state.view === 'home' && <Home />}
//         </>
//     }
// }


class App extends React.Component {
    constructor (){
        super ()
        this.state = {view: 'Landing'}
    }
    render() {
        return <React.Fragment>
            {this.state.view === 'Landing' && <Landing 
            onSignin={() => this.setState({view: 'Signin'})}
            onSignup={() => this.setState({view: 'Signup'})}
            ></Landing>}

            {this.state.view === 'Signup' && 
                <Signup
                onSignin={()=> this.setState({view: 'Signin'})}
                // onSignup={}
                ></Signup>}

            {this.state.view === 'Signin' && <Signin></Signin>}

            
            
        </React.Fragment>
    }
}