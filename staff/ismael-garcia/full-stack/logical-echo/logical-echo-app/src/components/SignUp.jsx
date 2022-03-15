import logger from '../utils/logger'

function SignUp({ onSignUp, onSignIn, onBack }) {
    logger.debug('SignUp -> render')

    return <form className="register container container--vertical container--gapped" onSubmit={event => {
        event.preventDefault()

        const { target: { name: { value: name }, username: { value: username }, email: { value: email }, password: { value: password } } } = event 

        onSignUp(name, username, email, password)
    }}>
        <input className="field" type="text" name="name" id="register-name" placeholder="Name" required />
        <input className="field" type="text" name="username" id="register-username" placeholder="Username" required />
        <input className="field" type="email" name="email" id="register-email" placeholder="Email" required />
        <input className="field" type="password" name="password" id="register-password" placeholder="Password" required />

        <div className="container">
            <button type="button" className="button button--medium" onClick={event => {
                event.preventDefault()

                onSignIn()
            }}>Sign in</button>
            <button type="submit" className="button button--medium button--dark">Sign Up</button>
            <button type="button" className="button button--medium" onClick={event => {
                event.preventDefault()
                
                onBack()
            }}>Go Back</button>
        </div>
    </form>
}

export default SignUp