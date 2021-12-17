import { useState } from 'react'
import logger from '../utils/logger'
import SignUp from './SignUp'
import SignIn from './SignIn'
import { signUpUser, signInUser, retrieveUser } from '../logic'


function Account({ onBack, onFlowStart, onFlowEnd, onModal }) {
    logger.debug('Account -> render')

    const [view, setView] = useState('signin')

    const goToSignUp = () => setView('signup')
    
    const goToSignIn = () => setView('signin')

    const signUp = (email, password) => {
        onFlowStart()

        try {
            signUpUser(email, password, error => {
                if (error) {
                    onFlowEnd()

                    onModal(error.message)

                    return
                }

                onBack()

                onFlowEnd()
            })
        } catch ({ message }) {
            onFlowEnd()

            onModal(message, 'warn')
        }
    }

    const signIn = (email, password) => {
        onFlowStart()

        try {
            signInUser(email, password, (error, token) => {
                if (error) {
                    onFlowEnd()

                    onModal(error.message)

                    return
                }

                sessionStorage.token = token

                try {
                    retrieveUser(token, (error) => {
                        if (error) {
                            onFlowEnd()

                            onModal(error.message)

                            return
                        }

                        onBack()
                        
                        onFlowEnd()
                    })
                } catch ({ message }) {
                    onFlowEnd()

                    onModal(message, 'warn')
                }
            })
        } catch ({ message }) {
            onFlowEnd()

            onModal(message, 'warn')
        }
    }

    
    return <>
        {view === 'signin' && <SignIn onBack={onBack} onSignIn={signIn} onSignUp={goToSignUp} />}

        {view === 'signup' && <SignUp onBack={onBack} onSignUp={signUp} onSignIn={goToSignIn} />}
    </>

}

export default Account



