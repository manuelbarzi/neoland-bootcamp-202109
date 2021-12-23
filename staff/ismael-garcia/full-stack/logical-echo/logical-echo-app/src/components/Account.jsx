import { useState, useContext } from 'react'
import { signUpUser, signInUser } from '../logic'
import AppContext from './AppContext'
import logger from '../utils/logger'
import SignUp from './SignUp'
import SignIn from './SignIn'

function Account({ onBack, onLogin }) {
    logger.debug('Account -> render')

    const { onFlowStart, onFlowEnd, onModal } = useContext(AppContext)

    const [view, setView] = useState('signin')

    const goToSignUp = () => setView('signup')
    
    const goToSignIn = () => setView('signin')

    const signUp = async (email, password) => {
        try {
            onFlowStart()

            await signUpUser(email, password)

            onLogin(true)

            onFlowEnd()

            onModal('Account created', 'success')
        } catch ({ message }) {
            onFlowEnd()

            onModal(message, 'warn')
        }
    }

    const signIn = async (email, password) => {
        try {
            onFlowStart()

            const token = await signInUser(email, password)
            
            sessionStorage.token = token

            onFlowEnd()

            onBack()
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



