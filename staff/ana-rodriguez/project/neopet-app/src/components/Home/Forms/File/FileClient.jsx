import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { modifyClient, deleteClient } from '../../../../logic';

function FileClient({ client }) {

    const navigate = useNavigate();

    const updateFileClient = async (event) => {
        try {
            const clientForm = {
                phone: event.target.phone.value,
                direction: event.target.direction.value,
                email: event.target.email.value
            }

            const updatedClient = await modifyClient(sessionStorage.token, client.id, clientForm);

            window.location.reload();
        } catch (err) {
            alert(err);
            if (err.message === 'invalid token') {
                navigate('/login')
            }
        }


    }

    const removeClient = async (event) => {

        // Abro una ventana de confirmación:
        if (window.confirm('¿Seguro que quieres eliminar al cliente?')) {

            try {
                const token = sessionStorage.token
                await deleteClient(token, client.id)
                alert('cliente eliminado')
                navigate('/home')
            } catch (err) {
                alert(err);
                if (err.message === 'invalid token') {
                    navigate('/login')
                }
            }
        }

    }
    return <>
        <form name="fileClient" className="file_container client" onSubmit={(event) => updateFileClient(event)}>
            <h1 className="title_file">Cliente - {client.firstName} {client.lastName}</h1>
            <div className="input_file">
                <br />
                <label>Teléfono:
                    <input className="input_reCliPet" type="text" name="phone" value={client.phone} /></label>
                <label>Direccción:
                    <input className="input_reCliPet" type="text" name="direction" value={client.direction} /></label>
                <label>Email:
                    <input className="input_reCliPet" type="text" name="email" value={client.email} /></label>
            </div>
            <div className="button_file">
                <button className="but_note" type='submit'>Guardar</button>
                <Link to={"/home/clientPet/registerNewPet/" + client.id}><button className="file_button" type="button">Añadir mascota</button></Link>
                <button className="but_note alert" type='button' onClick={event => removeClient(event)}>Baja</button>

            </div>
        </form>

    </>
}

export default FileClient