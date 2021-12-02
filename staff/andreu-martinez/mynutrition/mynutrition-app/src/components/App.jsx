import { useState, useEffect } from 'react'
import { retrieveUser } from '../logic'
import Spinner from './Spinner'
import Landing from './Landing'
import Login from './SignIn'
import Register from './SignUp'
import Home from './Home'
import FeedBack from './FeedBack'
import Header from './Header'

function App() {

    const [view, setView] = useState(sessionStorage.token ? 'home' : "landing")
    const [name, setName] = useState(null)
    const [spinner, setSpinner] = useState(null)
    const [feedback, setFeedback] = useState(null)
    const [level, setLevel] = useState(null)

    const gotoLogin = () => setView('login')
    const gotoRegister = () => setView('register')
    const showSpinner = () => setSpinner(true)
    const hideSpinner = () => setSpinner(false)


    const gotoHome = (name) => {
        setView('home')
        setName(name)
    }

    const resetTokenAndGoToLanding = () => {
        delete sessionStorage.token
        setView('landing')
        hideSpinner()
    }

    useEffect(() => {
        const { token } = sessionStorage

        if (token) {
            try {
                retrieveUser(token, (error, user) => {
                    if (error) {
                        alert(error.message)
                        resetTokenAndGoToLanding()
                        return
                    }

                    var name = user.name
                    setName(name)
                    setView('home')
                    hideSpinner()
                })
            } catch ({ message }) {
                showFeedback(message, 'warn')
                resetTokenAndGoToLanding()

                return
            }
        }
    })

    const acceptFeedback = () => setFeedback(null)
    
    const showFeedback = (message, level = 'error') => {
        setFeedback(message)
        setLevel(level)
    }

    return <>
        {
            view === "landing" && <Landing
                gotoLogin={gotoLogin}
                gotoRegister={gotoRegister}
            ></Landing>
        }

        {
            view === "login" && <Login
                gotoRegister={gotoRegister}
                gotoHome={gotoHome}
                showSpinner={showSpinner}
                hideSpinner={hideSpinner}
                showFeedback={showFeedback}
            ></Login>
        }

        {
            view === "register" && <Register
                gotoLogin={gotoLogin}
                showSpinner={showSpinner}
                hideSpinner={hideSpinner}
                showFeedback={showFeedback}
            ></Register>
        }

        {
            view === "home" && <Home
                name={name}
                onSignOut={resetTokenAndGoToLanding}
                showSpinner={showSpinner}
                hideSpinner={hideSpinner}
                onFeedback={showFeedback}
                acceptFeedback={acceptFeedback}
            ></Home>
        }
        {spinner && <Spinner />}
        {feedback && <FeedBack level={level} message={feedback} onAccept={acceptFeedback} />}
    </ >
}

export default App

