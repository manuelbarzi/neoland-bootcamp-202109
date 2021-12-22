import logger from '../utils/logger'

function SignUp({ onSignUp, onSignIn, onBack }) {
    logger.debug('SignUp -> render')

    return <form className="register container container--vertical container--gapped" onSubmit={event => {
        event.preventDefault()

        const { target: { email: { value: email }, password: { value: password } } } = event 

        onSignUp(email, password)
    }}>
        <input className="field" type="email" name="email" id="register-email" placeholder="Email" required />
        <input className="field" type="password" name="password" id="register-password" placeholder="Password" required />

        <div className="container">
            <button type="button" className="button button--medium" onClick={(event) => {
                event.preventDefault()

                onSignIn()
            }}>Sign in</button>
            <button type="submit" className="button button--medium button--dark">Sign Up</button>
            <button type="button" className="button button--medium" onClick={(event) => {
                event.preventDefault()
                
                onBack()
            }}>Go Back</button>
        </div>
    </form>
}

export default SignUp