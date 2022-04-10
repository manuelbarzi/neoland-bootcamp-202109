import { useState, useContext } from 'react'
import { registerUser, loginUser } from '../logic'
import AppContext from './AppContext'
import logger from '../utils/logger'
import SignUp from './SignUp'
import SignIn from './SignIn'

function Account({ onBack }) {
    logger.debug('Account -> render')

    const { onFlowStart, onFlowEnd, onModal } = useContext(AppContext)

    const [view, setView] = useState('signin')

    const goToSignUp = () => setView('signup')
    
    const goToSignIn = () => setView('signin')

    const signUp = async (name, username, email, password) => {
        try {
            onFlowStart()

            await registerUser(name, username, email, password)

            onFlowEnd()

            onModal('Account created', 'success')

            onBack()
        } catch ({ message }) {
            onFlowEnd()

            onModal(message, 'warn')
        }
    }

    const signIn = async (username, password) => {
        try {
            onFlowStart()

            const token = await loginUser(username, password)
            
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



