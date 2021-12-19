import React from 'react';
import { useState, useEffect } from 'react';
import FileClient from './FileClient';
import FilePet from './FilePet';
import { useNavigate, useParams } from 'react-router-dom';
import { searchPets, searchClients } from '../../../../logic';
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
                // Primero obtengo el cliente ya que el param de la url es el clientId
                const client = await searchClients(sessionStorage.token, { id: clientId });
                // Obtengo el pet, en base el clientId
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
        <div className='file_form'>
            {
                client && client.id && <FileClient client={client}></FileClient>
            }
            <div className="petsContainer">
                {
                    pets && pets.length > 0 && pets.map((pet, index) =>
                        <FilePet key={index} pet={pet}></FilePet>
                    )
                }
            </div>

        </div>
    </>
};

export default File;