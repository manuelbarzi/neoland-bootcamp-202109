import { useState } from 'react'
import logger from '../logger'
import Logo from './Logo'
import Landing from './Landing'
import SignUp from './SignUp'
import PostSignUp from './PostSignUp'
import SignIn from './SignIn'
import Home from './Home'
import Spinner from './Spinner'
import Feedback from './Feedback'
import AppContext from './AppContext'
import Profile from './Profile'

function App() {
    logger.debug('App -> render')

    const [view, setView] = useState(sessionStorage.token ? 'home' : 'landing')
    const [spinner, setSpinner] = useState(sessionStorage.token ? true : false)
    const [feedback, setFeedback] = useState(null)
    const [level, setLevel] = useState(null)

   
    const goToSignIn = () => setView('signin')

    const goToSignUp = () => setView('signup')

    const showSpinner = () => setSpinner(true)

    const hideSpinner = () => setSpinner(false)

    const goToPostSignUp = () => setView('post-signup')

    const goToHome = () => setView('home')

    const acceptFeedback = () => setFeedback(null)

    const showFeedback = (message, level = 'error') => {
        setFeedback(message)
        setLevel(level)
    }
    const resetTokenAndGoToLanding = () => {
        delete sessionStorage.token

        setView('landing')
        setSpinner(false)
    }


    return <>
        <AppContext.Provider value={{
            onFlowStart: showSpinner,
            onFlowEnd: hideSpinner,
            onFeedback: showFeedback
        }}>
            {view === 'landing'&& <Logo image={process.env.PUBLIC_URL + '/logo.png'} text="In My Mind" />}
            {view === 'post-signup'&& <Logo image={process.env.PUBLIC_URL + '/logo.png'} text="In My Mind" />}
            {view === 'signin'&& <Logo image={process.env.PUBLIC_URL + '/logo.png'} text="In My Mind" />}
            {view === 'signup'&& <Logo image={process.env.PUBLIC_URL + '/logo.png'} text="In My Mind" />}
            

            {view === 'landing' && <Landing
                onSignIn={goToSignIn}
                onSignUp={goToSignUp}
            />}

            {view === 'signup' && <SignUp onSignedUp={goToPostSignUp} onSignIn={goToSignIn} />}

            {view === 'post-signup' && <PostSignUp onSignIn={goToSignIn} />}

            {view === 'signin' && <SignIn onSignedIn={goToHome} onSignUp={goToSignUp} />}

            {view === 'home' &&
                <Home onSignOut={resetTokenAndGoToLanding} onAuthError={resetTokenAndGoToLanding} />}

            {view === 'profile' && <Profile/>}

            {feedback && <Feedback level={level} message={feedback} onAccept={acceptFeedback} />}

            {spinner && <Spinner />}
        </AppContext.Provider>
    </>
}

export default App