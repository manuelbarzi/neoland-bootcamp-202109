import React from 'react'
import logger from '../logger'

function Profile({onChangeData, onChangePassword, onUnregister, goToHome}) {
    logger.info("Profile -> render")

    return (
        <div className="profile container container--vertical">
            <h3 className="titles">Mi perfil</h3>
            <hr />
            <div className="button--out--form container">
                <button className="button button--config" onClick={() => onChangeData()}>Modificar tu datos</button>
            </div>
            <div className="button--out--form container">
                <button className="button button--change--password" onClick={() => onChangePassword()}>Cambiar contraseña</button>
            </div>
            <div className="button--out--form container">
                <button className="button button--delete" onClick={() => onUnregister()}>Eliminar usuario</button>
            </div>
            <div className="button--out--form container">
                <button type="button" className="button button--back--profile" onClick={() => goToHome()}>Volver atrás</button>
            </div>
            <hr />
        </div>
    )
}

export default Profile