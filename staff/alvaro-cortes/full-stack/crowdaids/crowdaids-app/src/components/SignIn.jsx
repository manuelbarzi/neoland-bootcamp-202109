import React from 'react';
import logger from '../logger'
import { useContext } from 'react'
import AppContext from './AppContext'
import { authorizeUser } from '../logic'
import cablue from '../assets/cablue.png'


function SignIn() {
    logger.info("SignIn -> render")

    const { showSpinner, hideSpinner, showModal, goToHome, goToSignUp } = useContext(AppContext)

    return (
        <form className="login container container--vertical" onSubmit={async event => {
            event.preventDefault()

            const { target: { username: { value: username }, password: { value: password } } } = event

            const user = {
                username,
                password
            }

            try {
                showSpinner()

                const token = await authorizeUser(user)

                sessionStorage.token = token

                hideSpinner()

                goToHome()

            } catch ({ message }) {
                hideSpinner()

                showModal("Error", message)
            }

            event.target.reset()
        }}>
            <img src={cablue} alt=""style={{width:"110px"}} />
            <h3 className="titles">Iniciar Sesión</h3>
            <div className="color">
            </div><input type="text" placeholder="Usuario" id="username"></input>
            <input type="password" placeholder="Contraseña" id="password"></input>
            <div className="container">
                <button className="button">Iniciar Sesión</button>
            </div>
            <hr />
            <div className="container">
                <button className="button button--grey" onClick={() => goToSignUp()}>Crear una cuenta</button>
            </div>
        </form>
    )
}

export default SignIn