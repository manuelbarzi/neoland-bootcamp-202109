import logger from '../logger'

function SignIn({ onSignIn, onSignUp }) {
    logger.debug('SignIn -> render')

    return <form className="login container container--vertical container--gapped" onSubmit={event => {
        event.preventDefault()

        const { target: { username: { value: username }, password: { value: password } } } = event

        onSignIn(username, password)
    }}>
        <input className="field" type="text" name="username" id="register-username" placeholder="Username" required />
        <input className="field" type="password" name="password" id="register-password" placeholder="Password" required />

        <div className="container">
            <button type="button" className="button button--medium" onClick={event => {
                event.preventDefault()

                onSignUp()
            }}>Sign up</button>
            <button type="submit" className="button button--medium button--dark">Sign In</button>
        </div>
    </form>
}

export default SignIn
