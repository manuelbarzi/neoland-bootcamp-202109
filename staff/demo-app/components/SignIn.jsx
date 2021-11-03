function SignIn(props) {
    logger.info("SignIn -> render")
    return (
        <form className="login container container--vertical" onSubmit={event => {
            event.preventDefault()
            props.showSpinner()
            const user = {
                username: event.target.username.value,
                password: event.target.password.value
            }
            try {
                loginUser(user, (error, token) => {
                    if (error) {
                        var error = error.message

                        props.showModal("Error", error)

                        props.hideSpinner()

                        props.onSignIn()

                        return
                    } else {
                        event.target.reset()

                        props.postSignIn()

                        props.hideSpinner()
                        
                        sessionStorage.token = token
                    }
                })
            } catch (error) {
                var errorM = error.message

                props.showModal("Error", errorM)

                props.hideSpinner()
            }
        }}>
            <h3 className="titles">Iniciar Sesión</h3>
            <div className="color">
            </div><input type="text" placeholder="Usuario" id="username"></input>
            <input type="password" placeholder="Contraseña" id="password"></input>
            <div className="container">
                <button className="button" onClick={() => props.onSignUp()}>Registrarse</button>
                <button className="button button--red">Iniciar Sesión</button>
            </div>
        </form>
    )
}