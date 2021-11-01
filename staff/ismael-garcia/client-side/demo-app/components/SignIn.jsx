function SignIn(props) {
    return <form className="login container container--vertical container--gapped" onSubmit={event => {
        event.preventDefault()

        const username = event.target.username.value
        const password = event.target.password.value

        props.onSignIn(username, password)
    }}>
        <input className="field" type="text" name="username" id="register-username" placeholder="Username" required />
        <input className="field" type="password" name="password" id="register-password" placeholder="Password" required />

        <div className="container">
            <button type="button" className="button button--medium" onClick={() => props.onSignUp()}>Sign up</button>
            <button type="submit" className="button button--medium button--dark">Sign In</button>
        </div>
    </form>
}
