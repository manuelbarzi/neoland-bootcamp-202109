import React from "react";
import Landing from "./components/Landing";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import Profile from "./components/Profile";
import UnRegister from "./components/UnRegister";
import PostSignUp from "./components/PostSignUp";

// Logic Business
import {
  signinUser,
  signupUser,
  retrieveUser,
  updateUserPassword,
  unregisterUser
} from "./logic";


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      view: sessionStorage.token ? 'home' : 'landing',
      user: null
    }
  }

  // Go to ..
  goToSignIn = () => this.setState({ view: 'signin' })
  goToSignUp = () => this.setState({ view: 'signup' })
  goToLanding = () => this.setState({ view: 'landing' })
  onSignOut = () => {
    this.goToLanding()
    this.resetToken()
  }
  goToProfile = () => this.setState({ view: 'profile' })
  goToHome = () => this.setState({ view: 'home' })
  goToUnregister = () => this.setState({ view: 'unregister' })
  goToPostSignUp = () => this.setState({ view: 'postsignup' })

  // Delete Token
  resetToken = () => delete sessionStorage.token

  // Logic Functions
  login = (username, password) => {
    try {
      signinUser(username, password, (error, _token) => {
        if (error) {
          alert(error.message)
          return
        } else {

          sessionStorage.token = _token
        }
        try {
          retrieveUser(_token, (error, _user) => {
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

  register = (name, username, password) => {
    try {
      signupUser(name, username, password, (error) => {
        if (error) {
          alert(error.message)
          return
        }
        this.goToPostSignUp()
      })
    } catch (error) {
      alert(error.message)
      return
    }
  }

  updatePassword = (oldPassword, password) => {
    try {
      updateUserPassword(sessionStorage.token, oldPassword, password, error => {
        if (error) {
          alert(error.message)
          return
        }
        alert('todo ok')
      })
    } catch (error) {
      alert(error.message)
      return
    }
  }

  unRegister = (password) => {
    try {
      unregisterUser(sessionStorage.token, password, error => {
        if (error) {
          alert(error.message)
          return
        }
        alert('usuario borrado')
        delete sessionStorage.token
        this.setState({ view: 'landing' })
      })
    } catch (error) {
      alert(error.message)
    }
  }

  render() {
    const { updatePassword } = this
    return (<>
      {this.state.view === 'landing' && <Landing
        onSignIn={this.goToSignIn}
        onSignUp={this.goToSignUp}
      />}

      {this.state.view === 'signin' && <SignIn onSignUp={this.goToSignUp} onSubmitSignIn={this.login} />}

      {this.state.view === 'signup' && <SignUp onSignUp={this.register} onSignIn={this.goToSignIn} />}

      {this.state.view === 'postsignup' && <PostSignUp onSignIn={this.goToSignIn} />}

      {this.state.view === 'home' && <Home myUserName={this.state.user} onProfile={this.goToProfile} onSignOut={this.onSignOut} />}

      {this.state.view === 'profile' && <Profile onGoBack={this.goToHome} onSubmitUpdate={updatePassword} onUnRegister={this.goToUnregister} />}

      {this.state.view === 'unregister' && <UnRegister onSubmitUnRegister={this.unRegister} onGoBack={this.goToProfile} />}
    </>)
  }
}
export default App;

/*
    App
      Landing
      SignUp
      SignIn
      Search
      Profile
      UpdatePassword
      Unregister
      Landing
      Home
        Search
        Results
        Details

*/