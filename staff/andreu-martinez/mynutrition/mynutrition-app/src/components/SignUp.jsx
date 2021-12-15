import logger from '../logger'
import { useContext } from 'react'
import AppContext from './AppContext'
import { signupUser } from '../logic'

function SignUp({ onSignUp, onSignIn }) {
    logger.debug('SignUp -> render')

    const { onFlowStart, onFlowEnd, onFeedback } = useContext(AppContext)

    return <form className="container container--vertical container--gapped" onSubmit={async event => {
        event.preventDefault()

        const { target: { name: { value: name }, username: { value: username }, password: { value: password } } } = event

        try {
            onFlowStart()
        
            await signupUser(name, username, password)

            onFlowEnd()

            onSignUp()
        } catch ({ message }) {
            onFlowEnd()

            onFeedback(message, 'warn')
        }
    }}>
        <input className="field" type="text" name="name" id="name" placeholder="name" />
        <input className="field" type="text" name="username" id="username" placeholder="username" />
        <input className="field" type="password" name="password" id="password" placeholder="password" />

        <div className="container">
            <button className="button">Sign up</button>
            <button className="button" onClick={event => {
                event.preventDefault()

                // props.onSignIn()                
                onSignIn()
            }}>Sign in</button>
            
        </div>
    </form>
}

export default SignUp