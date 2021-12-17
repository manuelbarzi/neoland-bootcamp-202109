import logger from '../utils/logger'

function Newsletter({ onNewsletter, onBack }) {
    logger.debug('SignUp -> render')

    return <form className="register container container--vertical container--gapped" onSubmit={event => {
        event.preventDefault()

        const { target: { email: { value: email } } } = event 

        onNewsletter(email)
    }}>
        <input className="field" type="email" name="email" id="register-email" placeholder="Email" required />

        <div className="container">
            <button type="submit" className="button button--medium button--dark">Register for Newsletter</button>
            <button type="button" className="button button--medium button--dark" onClick={(event) => {
                event.preventDefault()
                
                onBack()
                }}>Go Back</button>
        </div>
    </form>
}

export default Newsletter