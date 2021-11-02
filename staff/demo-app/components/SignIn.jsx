function SignIn(props) {
    logger.info("SignIn -> render")
    return (
        <form className="login container container--vertical" onSubmit={event => {
            event.preventDefault()
            props.goToSpinner()
            const user = {
                username: event.target.username.value,
                password: event.target.password.value
            }
            try {
                loginUser(user, (error, token) => {
                    if (error) {
                        //alert(error.message)
                        props.onModal("Error", error.message)
                        props.onModalPop("Error", error.message)
                        props.onSignIn()
                    } else {
                        //alert("Usuario identificado")
                        event.target.reset()
                        props.postSignIn()
                    }

                    sessionStorage.token = token

                })
            } catch (error) {
                //alert(error.message)
                props.onModal("Error", error.message)
               // props.onSignIn()
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