import React from "react";
import Landing from "./components/Landing";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from "./components/Home";

// Logic Business
import { signinUser } from "./logic";
import { retrieveUser } from "./logic";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      view: 'landing',
      user: null
    }
  }

  // Go to ..
  goToSignIn = () => this.setState({ view: 'signin' })
  goToSignUp = () => this.setState({ view: 'signup' })

  // Logic Functions
  login = (username, password) => {
    try {
      signinUser(username, password, (error, token) => {
        if (error) {
          alert(error.message)
        }
        try {
          retrieveUser(token, (error, _user) => {
            if (error) {
              alert(error.message)
              return
            }
            const user = _user.username
            this.setState({ view: 'home', user })
          })
        } catch (error) {
          alert(error.message)
        }
      })
    } catch (error) {
      alert(error.message)
      return
    }
  }

  render() {
    return (<>
      {this.state.view === 'landing' && <Landing
        onSignIn={this.goToSignIn}
        onSignUp={this.goToSignUp}
      />}

      {this.state.view === 'signin' && <SignIn onSignUp={this.goToSignUp} onSubmitSignIn={this.login} />}

      {this.state.view === 'signup' && <SignUp />}

      {this.state.view === 'home' && <Home myUserName={this.state.user} />}
    </>)
  }
}

export default App;