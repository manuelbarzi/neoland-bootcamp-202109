function SignIn(props) {
    return (
        <form className="login container container--vertical" onSubmit={event => {
            event.preventDefault()
            const user = {
                username: event.target.username.value,
                password: event.target.password.value
            }
            try {
                loginUser(user, (error, token) => {
                    if (error) {
                        //injectableModal("template-modal", "Error", error.message);
                        alert(error.message)
                    } else {
                        alert("Usuario identificado")
                        event.target.reset()
                    }

                    sessionStorage.token = token

                    try {
                        retrieveUser(sessionStorage.token, function (error, user) {
                            if (error) {
                                //injectableModal("template-modal", "Error", error.message);
                                alert(error.message)
                            } else {
                                props.postSignIn(user.name)
                            }
                        })
                    } catch (error) {
                        //injectableModal("template-modal", "Error", error.message);
                        alert(error.message)
                    }
                })
            } catch (error) {
                //injectableModal("template-modal", "Error", error.message);
                alert(error.message)
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