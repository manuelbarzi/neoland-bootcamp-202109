import React from 'react';
import logger from '../logger'
import { useContext } from 'react'
import AppContext from './AppContext'
import { authorizeUser } from '../logic'


function SignIn({ onSignedIn, onSignUp }) {
    logger.info("SignIn -> render")

    const { showSpinner, hideSpinner, showModal } = useContext(AppContext)

    return (
        <form className="login container container--vertical" onSubmit={async event => {
            event.preventDefault()

            const { target: { reset, username: { value: username }, password: { value: password } } } = event

            const user = {
                username,
                password
            }

            try {
                showSpinner()

                const token = await authorizeUser(user)

                sessionStorage.token = token

                hideSpinner()

                onSignedIn()

            } catch ({ message }) {
                hideSpinner()

                showModal("Error", message)
            }

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