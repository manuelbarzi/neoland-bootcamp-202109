import React from 'react';
import logger from '../logger'

function ChangeData({ onChangeData, onProfile }) {
    logger.info("ChangeData -> render")

    return(
        <div className="modify container container--vertical" onSubmit={event => {
            event.preventDefault()
            
            const { target: { reset, name: { value: name }, surname: { value: surname }, email: { value: email }, username: { value: username } } } = event

            const user = {
                name,
                surname,
                email,
                username
            }

            onChangeData(user)

            event.target.reset()
        }}>
        <form className="container container--vertical">
            <h3 className="titles">Modificar datos</h3>
            <input type="text" placeholder="Nombre" id="name" />
            <input type="text" placeholder="Apellido" id="surname" />
            <input type="email" placeholder="Email" id="email" />
            <input type="text" placeholder="Usuario" id="username" />

            <div className="container">
                <button className="button" onClick={() => onProfile()}>Volver atrás</button>
                <button className="button button--red">Actualizar</button>
            </div>
        </form>
    </div>
    )
}

export default ChangeData