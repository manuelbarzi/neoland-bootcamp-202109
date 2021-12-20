import React from 'react';
import { useState, useEffect } from "react";
import { getSpecies, getGenre, getRaceById } from '../../../logic/combos';
import {registerPet,registerClient,registerUserClient}from '../../../logic';
import Combo from '../../Forms-components/Combo';
import './styles/RegisterClientPet.css';
import { useNavigate } from 'react-router-dom';

function RegisterClientPet({toogleSpinner}) {
    const [species, setSpecies] = useState([]);
    const [race, setRace] = useState([]);
    // const [mestizo, setMestizo] = useState(false);
    const [genre, setGenre] = useState([]);
    // const [petCount, setPetCount] = useState([0]);
    const navigate = useNavigate();
    const [valueComboSpecie,setComboSpecie] = useState('');
    const [valueComboRace,setComboRace] = useState('');
    const [valueComboGenre,setComboGenre] = useState('');
    useEffect(() => {
        getSpecies((err, res) => {
            setSpecies(res);
        });
        getGenre((err, res) => {
            setGenre(res)
        });
    }, []
    );

    function specieSelect(event) {
        const id = event.target.value;
        setComboSpecie(species.find(obj=>obj.id === parseInt(id)).value);
        getRaceById(parseInt(id), (err, res) => {
            setRace(res);
        })
    };
    //Aquí guardo los valores de los combo, en las tres funciones
    function raceSelect(event) {
        const id = event.target.value;
        setComboRace(race.find(obj=>obj.id === parseInt(id)).value);
    }

    function genreSelect(event) {
        const id = event.target.value;
        setComboGenre(genre.find(obj=>obj.id === id).value);
    }

    const registerClientOnSubmit = async (event) => {
        event.preventDefault()
        try {
            toogleSpinner(true)
            //CLIENT
            const client = {
                firstName: event.target.firstName.value,
                lastName: event.target.lastName.value,
                phone: event.target.phone.value,
                direction: event.target.direction.value,
                email: event.target.email.value,
                document: event.target.document.value

            };

            //PET
            const pet = {
                name: event.target.name.value,
                chip: event.target.chip.value,
                tatoo: event.target.tatoo.value,
                specie: valueComboSpecie,
                race: valueComboRace,
                mestizo: event.target.mestizo.value,
                hair: event.target.hair.value,
                layer: event.target.layer.value,
                genre: valueComboGenre,
                age: event.target.age.value,
                pedigree: event.target.pedigree.checked,
                passport: event.target.passport.value,
                date: event.target.date.value,
            }

            /**
             * registra el cliente
             */
            const newClient = await registerClient(sessionStorage.token, client)

            await registerUserClient(newClient.id,client.email,client.document)

            await registerPet(sessionStorage.token, newClient.id, pet)

            alert('cliente y mascota registradas correctamente')

            toogleSpinner(false)

            navigate('/home/clientPet/file/' + newClient.id)
        }
        catch (err) {
            alert(err.message)
            toogleSpinner(false)
        }
    };


    return <>
        <form className="Register_cliPet" onSubmit={(event) => registerClientOnSubmit(event)}>
            <h1 className="tit_ReCliPet">Registro Propietario</h1>
            <div className="input_CliPet">
                <label>Nombre<input className="input_reCliPet" type="text" name="firstName" /></label>
                <label>Apellidos<input className="input_reCliPet" type="text" name="lastName" /></label>
                <label>Teléfono<input className="input_reCliPet" type="text" name="phone" /></label>
                <label>Direccción<input className="input_reCliPet" type="text" name="direction" /></label>
                <label>Email <input className="input_reCliPet" type="text" name="email" /></label>
                <label>Dni<input className="input_reCliPet" type="text" name="document" /></label>
            </div>
            <hr></hr>
            <h1 className="tit_ReCliPet">Registro Mascota</h1>
            <div className="input_CliPet">
                <label>Nombre<input className="reCliPet" type="text" name="name" /></label>
                <label>Chip<input className="reCliPet" type="text" name="chip" /></label>
                <label>Tatuaje<input className="reCliPet" type="text" name="tatoo" /></label>
                <label>Especie:{<Combo className="reCliPet" items={species} onSelect={(event) => specieSelect(event)} />}</label>
                <label>Raza:<Combo className="reCliPet" items={race} onSelect={(event) => raceSelect(event)} campoPendiente="Especie" /></label>
                <label>Tipo de Mestizo<input className="reCliPet" type="text" name="mestizo" /></label>
                <label>Tipo de Pelo<input className="reCliPet" type="text" name="hair" /></label>
                <label>Capa<input className="reCliPet" type="text" name="layer" /></label>
                <label>Género:<Combo className="reCliPet" items={genre} onSelect={(event) => genreSelect(event)} /></label>
                <label>Nacimiento<input className="reCliPet" type="text" name="age" /></label>
                <div className='checkbox_label'>
                    <label htmlFor="pedigree">Pedigree</label><input className="reCliPet" id='pedigree' type="checkbox" name="pedigree" />
                </div>
                <label>Pasaporte<input className="reCliPet" type="text" name="passport" /></label>
                <label>Alta<input className="reCliPet" type="text" name="date" /></label>
            </div>

            <button className="button_CliPet" type="submit">Enviar<img src="http://localhost:3000/prescripcion.png"></img></button>

        </form>

    </>
}


export default RegisterClientPet