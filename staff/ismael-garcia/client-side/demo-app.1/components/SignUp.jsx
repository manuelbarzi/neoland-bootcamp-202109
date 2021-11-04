function SignUp(props) {
    logger.info('SignUp -> render')

    return <form className="register container container--vertical container--gapped" onSubmit={event => {
        event.preventDefault()

        const name = event.target.name.value
        const username = event.target.username.value
        const password = event.target.password.value

        props.onSignUp(name, username, password)
    }}>
        <input className="field" type="text" name="name" id="name" placeholder="Name" />
        <input className="field" type="text" name="username" id="register-username" placeholder="Username" required />
        <input className="field" type="password" name="password" id="register-password" placeholder="Password" required />

        <div className="container">
            <button type="button" className="button button--medium" onClick={(event) => {
                event.preventDefault()

                props.onSignIn()
                }}>Sign in</button>
            <button type="submit" className="button button--medium button--dark">Sign Up</button>
        </div>
    </form>
}