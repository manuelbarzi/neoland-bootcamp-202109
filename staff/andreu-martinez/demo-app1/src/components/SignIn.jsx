const SignIn = props => {
    logger.info('SignIn -> render')

    return <React.Fragment>

        <form className="signin container container--vertical container--gapped"
            onSubmit={event => {
                event.preventDefault()
                const user = { username: event.target.username.value, password: event.target.password.value }
                try {
                    signinUser(user, (err, token) => {
                        if (err) alert(err.message)
                        else {
                            sessionStorage.token = token
                            props.goToHome()
                        }
                    })
                }
                catch (err) {
                    alert(err.message)
                }
            }}>

            <input className="field" type="text" name="username" id="username" placeholder="username" />
            <input className="field" type="password" name="password" id="password" placeholder="password" />

            <div className="container">
                <button className="button button--medium" onClick={() => props.goToSignUp()}>go to Sign up</button>
                <button className="button button--medium button--dark">Sign in</button>
            </div>
        </form>
    </React.Fragment>
}