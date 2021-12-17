import logger from '../utils/logger'

function SignIn({ onSignIn, onSignUp, onBack }) {
    logger.debug('SignIn -> render')

    return <form className="login container container--vertical container--gapped" onSubmit={event => {
        event.preventDefault()

        const { target: { email: { value: email }, password: { value: password } } } = event

        onSignIn(email, password)
    }}>
        <input className="field" type="email" name="email" id="register-email" placeholder="Email" required />
        <input className="field" type="password" name="password" id="register-password" placeholder="Password" required />

        <div className="container">
            <button type="button" className="button button--medium" onClick={event => {
                event.preventDefault()

                onSignUp()
            }}>Sign up</button>
            <button type="submit" className="button button--medium button--dark">Sign In</button>
            <button type="button" className="button button--medium button--dark" onClick={(event) => {
                event.preventDefault()
                
                onBack()
                }}>Go Back</button>
        </div>
    </form>
}

export default SignIn