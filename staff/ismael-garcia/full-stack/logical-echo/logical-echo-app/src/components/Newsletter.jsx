import { useContext } from 'react'
import { registerSubscription } from '../logic'
import AppContext from './AppContext'
import logger from '../utils/logger'

function Newsletter() {
    logger.debug('Newsletter -> render')

    const { onFlowStart, onFlowEnd, onModal } = useContext(AppContext)

    const registerForNewsletter = async (email) => {
        try {
            onFlowStart()

            await registerSubscription(email)
            
            onFlowEnd()

            onModal('Registered for newsletter', 'success')
        } catch ({ message }) {
            onFlowEnd()

            onModal(message, 'error')
        }
    }

    return <form className="register container container--vertical container--gapped" onSubmit={event => {
        event.preventDefault()

        const { target: { email: { value: email } } } = event 

        registerForNewsletter(email)
    }}>
        <input className="field" type="email" name="email" id="register-email" placeholder="Email" required />

        <div className="container">
            <button type="submit" className="button button--medium button--dark">Register for Newsletter</button>
        </div>
    </form>
}

export default Newsletter