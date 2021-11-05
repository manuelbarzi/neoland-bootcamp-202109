import logger from '../utils/logger'

function SignUp({ onSignUp, onSignIn }) {
    logger.debug('SignUp -> render')

    return <form className="register container container--vertical container--gapped" onSubmit={event => {
        event.preventDefault()

        const { target: { name: { value: name },username: { value: username}, password: { value: password } } } = event 

        onSignUp(name, username, password)
    }}>
        <input className="field" type="text" name="name" id="name" placeholder="Name" />
        <input className="field" type="text" name="username" id="register-username" placeholder="Username" required />
        <input className="field" type="password" name="password" id="register-password" placeholder="Password" required />

        <div className="container">
            <button type="button" className="button button--medium" onClick={(event) => {
                event.preventDefault()

                // props.onSignIn()
                onSignIn()
                }}>Sign in</button>
            <button type="submit" className="button button--medium button--dark">Sign Up</button>
        </div>
    </form>
}

export default SignUp