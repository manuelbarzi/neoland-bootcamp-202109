import { useState, useEffect } from 'react'
import logger from '../utils/logger'
import { retrieveUser, signUpUser, signInUser } from '../logic'
import Logo from './Logo'
import SignUp from './SignUp'
import SignIn from './SignIn'
import Home from './Home'
import Spinner from './Spinner'
import Modal from './Modal'
// import '../assets/logo.png'

function App() {
    logger.debug('App -> render')

    const [view, setView] = useState('home')
    const [name, setName] = useState(null)
    const [modal, setModal] = useState(null)
    const [spinner, setSpinner] = useState(sessionStorage.token ? true : false)
    const [level, setLevel] = useState(null)

        
    useEffect(() => {
        logger.debug('App -> useEffect')

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

                    setView('home')
                    setName(name)
                    setSpinner(false)
                })
            } catch ({ message }) {
                showModal(message, 'warn')

                resetTokenAndGoToLanding()

                return
            }
        }
    }, [])

    const resetTokenAndGoToLanding = () => {
        delete sessionStorage.token

        setView('landing') // cambiar esto
        setSpinner(false)
    }

    
    const goToSignUp = () => setView('signup')
    
    const goToSignIn = () => setView('signin')

    const showSpinner = () => setSpinner(true)

    const hideSpinner = () => setSpinner(false)

    const goToHome = () => setView('home')

    const showModal = (message, level = 'error') => {
        setModal(message)
        setLevel(level)
    }

    const acceptModal = () => setModal(null)

    const signUp = (name, username, password) => {
        showSpinner()

        try {
            signUpUser(name, username, password, error => {
                if (error) {
                    hideSpinner()

                    showModal(error.message)

                    return
                }

                // goToPostSignUp() // cambiar esto

                hideSpinner()
            })
        } catch ({ message }) {
            hideSpinner()

            showModal(message, 'warn')
        }
    }

    const signIn = (username, password) => {
        showSpinner()

        try {
            signInUser(username, password, (error, token) => {
                if (error) {
                    hideSpinner()

                    showModal(error.message)

                    return
                }

                sessionStorage.token = token

                try {
                    retrieveUser(token, (error, user) => {
                        if (error) {
                            hideSpinner()

                            showModal(error.message)

                            return
                        }

                        const { name } = user

                        setName(name)
                        goToHome() // cambiar esto
                        hideSpinner()
                    })
                } catch ({ message }) {
                    hideSpinner()

                    showModal(message, 'warn')
                }
            })
        } catch ({ message }) {
            hideSpinner()

            showModal(message, 'warn')
        }
    }

    return <>
        <Logo image="../assets/logo.png" text='Logical Echo' />

        {view === 'signup' && <SignUp onSignUp={signUp} onSignIn={goToSignIn} />}

        {view === 'signin' && <SignIn  onSignIn={signIn} onSignUp={goToSignUp} />}

        {view === 'home' && <Home 
            name={name} 
            onSignOut={resetTokenAndGoToLanding}
            onFlowStart={showSpinner}
            onFlowEnd={hideSpinner}
            onModal={showModal} 
        />}

        {spinner && <Spinner />}

        {modal && <Modal level={level} message={modal} onAccept={acceptModal} />}
    </>
}

export default App