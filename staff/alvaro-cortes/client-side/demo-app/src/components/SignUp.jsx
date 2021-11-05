import logger from '../logger'
import { registerUser } from '../logic'

function SignUp(props) {
    logger.info("SignUp -> render")
    return (
        <form className="register container container--vertical" onSubmit={event => {
            event.preventDefault()

            const { showModal, showSpinner, hideSpinner, onSignUp, onSignIn } = props
            
            const { target: { reset, name: { value: name }, surname: { value: surname }, email: { value: email }, username: { value: username }, password: { value: password } } } = event
            
            showSpinner()

            const user = {
                name,
                surname,
                email ,
                username,
                password
            }
            try {
                registerUser(user, (error) => {
                    if (error) {

                        showModal("Error", error.message)

                        hideSpinner()

                        onSignUp()
                    } else {
                        showModal("Éxito", "Tu cuenta se ha creado correctamente.")

                        reset()

                        hideSpinner()

                        onSignIn()
                    }
                })
            } catch ({ message }) {

                showModal("Error", message)

                hideSpinner()

                onSignUp()
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

export default SignUp