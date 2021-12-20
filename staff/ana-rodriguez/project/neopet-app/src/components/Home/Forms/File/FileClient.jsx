import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { modifyClient, deleteClient} from '../../../../logic';

function FileClient({ client, toogleSpinner }) {

    const navigate = useNavigate();

    const updateFileClient = async (event) => {
        event.preventDefault()
        try {
            toogleSpinner(true)

            const clientForm = {
                phone: event.target.phone.value,
                direction: event.target.direction.value,
                email: event.target.email.value
            }
            const updatedClient = await modifyClient(sessionStorage.token, client.id, clientForm);
            toogleSpinner(false)
            
            window.location.reload();
        } catch (error) {

            alert(error);
            toogleSpinner(false)
            if (error.message === 'invalid token') {
                navigate('/login')
            }
        }


    }

    const removeClient = async (event) => {

        // Abro una ventana de confirmación:
        if (window.confirm('¿Seguro que quieres eliminar al cliente?')) {

            try {
                toogleSpinner(true)

                const token = sessionStorage.token
                await deleteClient(token, client.id)
                alert('cliente eliminado')
                toogleSpinner(false)
                navigate('/home')

            } catch (error) {
                alert(error)
                toogleSpinner(false)
                if (error.message === 'invalid token') {
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
                    <input className="input_reCliPet" type="text" name="phone" defaultValue={client.phone} /></label>
                <label>Direccción:
                    <input className="input_reCliPet" type="text" name="direction" defaultValue={client.direction} /></label>
                <label>Email:
                    <input className="input_reCliPet" type="text" name="email" defaultValue={client.email} /></label>
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