const SignUp = props => {
    logger.info('SignUp -> render')

    return <React.Fragment>
        <form className="signup container container--vertical container--gapped"
            onSubmit={event => {
                event.preventDefault()
                const user = { name: event.target.name.value, username: event.target.username.value, password: event.target.password.value }
                try {
                    signupUser(user, (err) => {
                        if (err) alert(err.message)
                        else props.goToLogin()
                    })
                }
                catch (err) {
                    alert(err.message)
                }
            }}>
            <input className="field" type="text" name="name" id="name" placeholder="name" />
            <input className="field" type="text" name="username" id="username" placeholder="username" />
            <input className="field" type="password" name="password" id="password" placeholder="password" />
            <div className="container">
                <button type="button" className="button button--medium" onClick={() => props.goToLogin()}>
                    go to login
                </button>
                <button type="submit" className="button button--medium">Register</button>
            </div>
        </form>
    </React.Fragment>
}