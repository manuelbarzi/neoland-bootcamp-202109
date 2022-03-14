function SignUp(props) {
    logger.info("SignUp -> render")
    return (
        <form className="register container container--vertical" onSubmit={event => {
            event.preventDefault()
            props.showSpinner()
            const user = {
                name     : event.target.name.value,
                surname  : event.target.surname.value,
                email    : event.target.email.value,
                username : event.target.username.value,
                password : event.target.password.value
            }
            try {
                registerUser(user, (error) => {
                    if (error) {
                        var error = error.message

                        props.showModal("Error", error)

                        props.hideSpinner()

                        props.onSignUp()
                    } else {
                        alert("usuario registrado correctamente")
                        event.target.reset()

                        props.hideSpinner()

                        props.onSignIn()
                    }
                })
            } catch (error) {
                var errorM = error.message

                props.showModal("Error", errorM)

                props.hideSpinner()

                props.onSignUp()
            }
        }}>
        <h3 className="titles">Registro</h3>
        <input type="text" placeholder="Nombre" id="name"></input>
        <input type="text" placeholder="Apellido" id="surname"></input>
        <input type="email" placeholder="Email" id="email"></input>
        <input type="text" placeholder="Usuario" id="username"></input>
        <input type="password" placeholder="Contraseña" id="password"></input>

        <div className="container">
            <button type="button" className="button" onClick={() => props.onSignIn()}>Iniciar Sesión</button>
            <button type="submit" className="button button--red">Registrarse</button>
        </div>
    </form>
    )
}