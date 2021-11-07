import logger from '../logger'

function SignUp({ onSignUp, onSignIn }) {
    logger.info("SignUp -> render")
    return (
        <form className="register container container--vertical" onSubmit={event => {
            event.preventDefault()
            
            const { target: { name: { value: name }, surname: { value: surname }, email: { value: email }, username: { value: username }, password: { value: password } } } = event

            const user = {
                name,
                surname,
                email ,
                username,
                password
            }

            onSignUp(user)
            
        }}>
        <h3 className="titles">Registro</h3>
        <input type="text" placeholder="Nombre" id="name"></input>
        <input type="text" placeholder="Apellido" id="surname"></input>
        <input type="email" placeholder="Email" id="email"></input>
        <input type="text" placeholder="Usuario" id="username"></input>
        <input type="password" placeholder="Contraseña" id="password"></input>

        <div className="container">
            <button type="button" className="button" onClick={() => onSignIn()}>Iniciar Sesión</button>
            <button type="submit" className="button button--red">Registrarse</button>
        </div>
    </form>
    )
}

export default SignUp