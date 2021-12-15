import React from 'react'
import logger from '../logger'
import './Profile.sass'
import { useContext } from 'react'
import AppContext from './AppContext'

function Profile() {
    logger.info("Profile -> render")

    const { goToHome, goToUnregister, goToChangePassword, goToChangeData } = useContext(AppContext)

    return (
        <div className="profile ">
            <div className="container container--vertical table">
                <table>
                    <tbody>
                        <tr>
                            <td className="table2">Nombre y Apellido</td>
                            <td className="table1">Álvaro Córtes</td>
                        </tr>
                        <tr>
                            <td className="table2">Usuario</td>
                            <td className="table1">alvaro</td>
                        </tr>
                        <tr>
                            <td className="table2">Dirección Email</td>
                            <td className="table1">alvaro@mail.com</td>
                        </tr>
                        <tr>
                            <td className="table2">Password</td>
                            <td className="table1">********</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="container container--vertical">
                <button className="button button--config" onClick={() => goToChangeData()}>Modificar tu datos</button>

                <button className="button button--change--password" onClick={() => goToChangePassword()}>Cambiar contraseña</button>

                <button className="button button--delete" onClick={() => goToUnregister()}>Eliminar usuario</button>

                <button type="button" className="button button--back--profile" onClick={() => goToHome()}>Volver atrás</button>

            </div>

        </div>
    )
}

export default Profile