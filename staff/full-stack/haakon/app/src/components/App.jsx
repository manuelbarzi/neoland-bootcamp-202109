// Componentes
import Landing from './Landing'
import Register from './Register'
import PostRegister from './PostRegister'
import Login from './Login'
import Home from './Home'
import Spinner from './Spinner'
import Feedback from './Feedback'

// React
import { useState } from 'react';
import AppContext from './AppContext'

const App = () => {
  const [view, setView] = useState(sessionStorage.token ? 'home' : 'landing')
  const [spinner, setSpinner] = useState(sessionStorage.token ? true : false)
  const [feedback, setFeedback] = useState(null)
  const [level, setLevel] = useState(null)

  const goToLogin = () => setView('login')
  const goToRegister = () => setView('register')
  const goToPostRegister = () => setView('post-register')
  const goToHome = () => setView('home')
  const goToLanding = () => setView('landing')

  const resetTokenAndGoToLanding = () => {
    delete sessionStorage.token
    setView('landing')
    setSpinner(false)
  }

  const showSpinner = () => setSpinner(true)
  const hideSpinner = () => setSpinner(false)

  const acceptFeedback = () => setFeedback(null)

  const showFeedback = (message, level = 'error') => {
    setFeedback(message)
    setLevel(level)
  }

  return <>
    <AppContext.Provider value={{
      onFlowStart: showSpinner,
      onFlowEnd: hideSpinner,
      onFeedback: showFeedback
    }}>
      {view === 'landing' && <Landing handleBtnLogin={goToLogin} handleBtnRegister={goToRegister} />}
      {view === 'register' && <Register okRegisterUser={goToPostRegister} handleBtnLogin={goToLogin} />}
      {view === 'post-register' && <PostRegister handleBtnLogin={goToLogin} handleBtnLanding={goToLanding} />}
      {view === 'login' && <Login okAuthenticateUser={goToHome} handleBtnRegister={goToRegister} />}
      {view === 'home' && <Home onAuthError={resetTokenAndGoToLanding} unRegisterd={resetTokenAndGoToLanding} />}
      {spinner && <Spinner />}
      {feedback && <Feedback level={level} message={feedback} onAccept={acceptFeedback} />}
    </AppContext.Provider>
  </>
}

export default App;

// App
  // Landing
  // Register
  // Post-Register
  // Login
  // Home
    // Header
    // SideBarMenu
    // GameCard
    // GameDetail
    // UnRegister
    // UserDetail
    // UserSettings