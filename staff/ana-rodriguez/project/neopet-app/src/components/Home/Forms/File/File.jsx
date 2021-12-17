import React from 'react';
import { useState, useEffect } from 'react';
import FileClient from './FileClient';
import FilePet from './FilePet';
import { useNavigate, useParams } from 'react-router-dom';
import { searchPets } from '../../../../logic';
import { searchClients } from '../../../../logic';
import '../styles/File.css'

function File() {
    const { clientId } = useParams(); // Obtiene el parametro por url definido en el router
    
    const [client, setClient] = useState([]);
    const [pets, setPets] = useState([]);
    
    const navigate = useNavigate();

    //Obtengo los datos de la ficha
    useEffect(() => {
        (async () => {
            try {
                const client = await searchClients(sessionStorage.token, { id: clientId });
                const pets = await searchPets(sessionStorage.token, { clientId: clientId });
                setClient(client[0]);//Sólo seteo el primero del array
                setPets(pets);
            } catch (err) {
                alert(err);
                if (err.message === 'invalid token') {
                    navigate('/login')
                }
            }
        })()
    }, []);

    return <>
        <form className='file_form'>
            <FileClient client={client}></FileClient>
            <div className="petsContainer">
            {
                pets && pets.length > 0 && pets.map((pet, index) =>
                    <FilePet key={index} pet={pet}></FilePet>
                )
            }
            </div>
            <div className='file_container'>
                <div className="button_file">
                    <button className="file_button" type="button">Añadir mascota</button>
                    <button className="but_note" type='button'>Modificar</button>
                    <button className="but_note alert" type='button'>Baja</button>
                </div>
            </div>
        </form>
    </>
};

export default File;