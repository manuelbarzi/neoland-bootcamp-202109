import React from "react";
import Landing from "./components/Landing";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import Profile from "./components/Profile";
import UnRegister from "./components/UnRegister";
import PostSignUp from "./components/PostSignUp";
import Spinner from "./components/Spinner";

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
      view: sessionStorage.token ? 'spinner' : 'home',
      user: null
    }
  }

  componentDidMount() {
    if (sessionStorage.token) {
      try {
        retrieveUser(sessionStorage.token, (error, _user) => {
          if (error) {
            alert(error)
            return
          }
          const user = _user.username
          this.setState({ view: 'home', user })
        })
      } catch (error) {
        alert('Su sesión ha caducado')
      }
    }
    this.deleteToken()
    this.goToLanding()
  }

  // Go to ..
  goToSignIn = () => this.setState({ view: 'signin' })
  goToSignUp = () => this.setState({ view: 'signup' })
  goToLanding = () => this.setState({ view: 'landing' })
  goToProfile = () => this.setState({ view: 'profile' })
  goToHome = () => this.setState({ view: 'home' })
  goToUnregister = () => this.setState({ view: 'unregister' })
  goToPostSignUp = () => this.setState({ view: 'postsignup' })

  // Delete Token
  deleteToken = () => delete sessionStorage.token

  // Go to landing and delete token
  onSignOut = () => { this.goToLanding(); this.deleteToken() }

  // Logic Functions
  login = (username, password) => {
    try {
      signinUser(username, password, (error, _token) => {
        if (error) {
          alert(error.message)
          return
        }
        sessionStorage.token = _token
        this.setState({ user: this.state.user })
        this.goToHome()
      })
    } catch (error) {
      alert(error.message)
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

      {this.state.view === 'spinner' && <Spinner />}
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