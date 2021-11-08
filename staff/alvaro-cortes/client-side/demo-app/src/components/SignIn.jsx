import React from 'react';
import logger from '../logger'

function SignIn({ onSignIn, onSignUp }) {
    logger.info("SignIn -> render")
    return (
        <form className="login container container--vertical" onSubmit={event => {
            event.preventDefault()
            
            const { target: { reset, username: { value: username }, password: { value: password } } } = event

            const user = {
                username,
                password
            }

            onSignIn(user)

            event.target.reset()
        }}>
            <h3 className="titles">Iniciar Sesión</h3>
            <div className="color">
            </div><input type="text" placeholder="Usuario" id="username"></input>
            <input type="password" placeholder="Contraseña" id="password"></input>
            <div className="container">
                <button className="button" onClick={() => onSignUp()}>Registrarse</button>
                <button className="button button--red">Iniciar Sesión</button>
            </div>
        </form>
    )
}

export default SignIn