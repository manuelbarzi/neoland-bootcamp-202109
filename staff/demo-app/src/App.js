import { useState, useEffect } from 'react'
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


function App() {

  const [view, setView] = useState(sessionStorage.token ? 'home' : 'landing')
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (sessionStorage.token) {
      try {
        retrieveUser(sessionStorage.token, (error, _user) => {
          if (error) {
            alert(error)
            return
          }
          const user = _user.username
          setView('home')
          setUser(user)
        })
      } catch (error) {
        alert('Su sesión ha caducado')
      }
    }
    deleteToken()
    goToLanding()
  }, [])



  // Go to ..
  const goToSignIn = () => setView('signin')
  const goToSignUp = () => setView('signup')
  const goToLanding = () => setView('landing')
  const goToProfile = () => setView('profile')
  const goToHome = () => setView('home')
  const goToUnregister = () => setView('unregister')
  const goToPostSignUp = () => setView('postsignup')

  // Delete Token
  const deleteToken = () => delete sessionStorage.token

  // Go to landing and delete token
  const onSignOut = () => { goToLanding(); deleteToken() }

  // Logic Functions
  const login = (username, password) => {
    try {
      signinUser(username, password, (error, _token) => {
        if (error) {
          alert(error.message)
          return
        }
        sessionStorage.token = _token
        setUser(user)
        goToHome()
      })
    } catch (error) {
      alert(error.message)
    }
  }

  const register = (name, username, password) => {
    try {
      signupUser(name, username, password, (error) => {
        if (error) {
          alert(error.message)
          return
        }
        goToPostSignUp()
      })
    } catch (error) {
      alert(error.message)
      return
    }
  }

  const updatePassword = (oldPassword, password) => {
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

  const unRegister = (password) => {
    try {
      unregisterUser(sessionStorage.token, password, error => {
        if (error) {
          alert(error.message)
          return
        }
        alert('usuario borrado')
        delete sessionStorage.token
        setView('landing')
      })
    } catch (error) {
      alert(error.message)
    }
  }

  return (<>
    {view === 'landing' && <Landing
      onSignIn={goToSignIn}
      onSignUp={goToSignUp}
    />}

    {view === 'signin' && <SignIn onSignUp={goToSignUp} onSubmitSignIn={login} />}

    {view === 'signup' && <SignUp onSignUp={register} onSignIn={goToSignIn} />}

    {view === 'postsignup' && <PostSignUp onSignIn={goToSignIn} onLanding={goToLanding} />}

    {view === 'home' && <Home myUserName={user} onProfile={goToProfile} onSignOut={onSignOut} />}

    {view === 'profile' && <Profile onUnRegister={goToUnregister} onDeleteAccount={goToUnregister} onGoBack={goToHome} />}

    {view === 'unregister' && <UnRegister onSubmitUnRegister={unRegister} onGoBack={goToProfile} />}

    {view === 'spinner' && <Spinner />}
  </>)
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