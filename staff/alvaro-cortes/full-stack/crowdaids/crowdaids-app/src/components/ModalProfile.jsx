import React from 'react';
import './ModalProfile.sass'
import { useContext } from 'react'
import AppContext from './AppContext'

function ModalProfile({ closeProfile }) {

    const { resetTokenAndGoToLogin, goToProfile } = useContext(AppContext)

    return (
        <div className="modal--profile" id="modal profile" onMouseLeave={() => closeProfile()}>
            <div className="container--profile container--vertical" >
                <button type="button" className="button--modal" onClick={goToProfile}>Perfil</button>
                <button type="button" className="button--modal" >Favoritos</button>
                <button type="button" className="button--modal" onClick={resetTokenAndGoToLogin}>Cerrar Sesión</button>
            </div>
        </div>
    )
}

export default ModalProfile