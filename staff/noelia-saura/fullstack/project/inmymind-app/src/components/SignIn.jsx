import logger from '../logger'
import { useContext } from 'react'
import AppContext from './AppContext'
import { signinUser } from '../logic'

function SignIn({ onSignedIn, onSignUp }) {
    logger.debug('SignIn -> render')

    const { onFlowStart, onFlowEnd, onFeedback } = useContext(AppContext)

    return <form className="container container--vertical container--gapped" onSubmit={async event => {
        event.preventDefault()

        const { target: { username: { value: username }, password: { value: password } } } = event

        try {
            onFlowStart()
        
            const token = await signinUser(username, password)

            sessionStorage.token = token

            console.log(token)
            console.log(sessionStorage.token)

            onFlowEnd()

            onSignedIn()
        } catch ({ message }) {
            onFlowEnd()

            onFeedback(message, 'warn')
        }
    }}>
        <input className="field" type="text" name="username" id="username" placeholder="username" />
        <input className="field" type="password" name="password" id="password" placeholder="password" />

        <div className="button--container">
            <button className="button button--medium button--dark">Sign in</button>
            <button className="button button--medium" onClick={event => {
                event.preventDefault()

                onSignUp()
            }}>Sign up</button>
        </div>
    </form>
}

export default SignIn