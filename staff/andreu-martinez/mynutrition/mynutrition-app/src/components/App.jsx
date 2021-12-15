import { useState } from 'react'
import logger from '../logger'
import SignUp from './SignUp'
// import SignInSide from './SignInSide'
import SignIn from './SignIn'
import Home from './Home'
import Spinner from './Spinner'
import Feedback from './Feedback'
import AppContext from './AppContext'

function App() {
    logger.debug('App -> render')

    const [view, setView] = useState(sessionStorage.token ? 'home' : 'signin')
    const [spinner, setSpinner] = useState(sessionStorage.token ? true : false)
    const [feedback, setFeedback] = useState(null)
    const [level, setLevel] = useState(null)

    const resetTokenAndGoToLanding = () => {
        delete sessionStorage.token

        setView('signin')
        setSpinner(false)
    }

    const goToSignIn = () => setView('signin')

    const goToSignUp = () => setView('signup')

    const showSpinner = () => setSpinner(true)

    const hideSpinner = () => setSpinner(false)

    const goToHome = () => setView('home')

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

            {view === 'signup' && <SignUp onSignUp={goToSignUp} onSignIn={goToSignIn} />}

            {view === 'signin' && <SignIn onSignedIn={goToHome} x={1} />}

            {view === 'home' && <Home onSignOut={resetTokenAndGoToLanding} onAuthError={resetTokenAndGoToLanding} />}

            {feedback && <Feedback level={level} message={feedback} onAccept={acceptFeedback} />}

            {spinner && <Spinner />}
        </AppContext.Provider>
    </>
}

export default App