function SignUp( props ) {
    return <div className="screen">
        <form className="signup container container--vertical container--gapped" onSubmit={event => {
            event.preventDefault()

            const name = event.target.name.value
            const username = event.target.username.value
            const password = event.target.password.value

            props.onSignUp( name, username, password )
        }}>
            <h1 className="container--title">Create new account</h1>
            <input className="field" type="text" name="name" id="name" placeholder="name" />
            <input className="field" type="text" name="username" id="username" placeholder="username" />
            <input className="field" type="password" name="password" id="password" placeholder="password" />

            <div className="container container--gapped">
                <button className="button button--medium" onClick={() => props.onSignIn()}>login</button>
                <button className="button button--medium button--dark">create account</button>
            </div>
        </form>
    </div>
}

export default SignUp