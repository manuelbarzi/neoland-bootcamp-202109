import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSpecies, getGenre, getRaceById } from '../../../logic/combos';
import Combo from '../../Forms-components/Combo';
import { registerPet } from "../../../logic";


function RegisterNewPet({ toogleSpinner }) {

    const { clientId } = useParams() // Obtiene el parametro por url definido en el router

    const [species, setSpecies] = useState([])
    const [race, setRace] = useState([])
    // const [mestizo, setMestizo] = useState(false);
    const [genre, setGenre] = useState([])

    const navigate = useNavigate()

    const [valueComboSpecie, setComboSpecie] = useState('')
    const [valueComboRace, setComboRace] = useState('')
    const [valueComboGenre, setComboGenre] = useState('')

    useEffect(() => {
        getSpecies((err, res) => {
            setSpecies(res);
        })
        getGenre((err, res) => {
            setGenre(res)
        })
    }, []
    )

    function specieSelect(event) {

        const id = event.target.value;
        setComboSpecie(species.find(obj => obj.id === parseInt(id)).value);
        getRaceById(parseInt(id), (err, res) => {
            setRace(res);
        })
    };
    //Aquí guardo los valores de los combo, en las tres funciones
    function raceSelect(event) {

        const id = event.target.value;
        setComboRace(race.find(obj => obj.id === parseInt(id)).value);
    }

    function genreSelect(event) {

        const id = event.target.value;
        setComboGenre(genre.find(obj => obj.id === id).value);
    }

    const addPet = async (event) => {
        event.preventDefault()

        try {
            toogleSpinner(true)

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
                client: clientId
            }
            
            const NewPet = await registerPet(sessionStorage.token, clientId, pet)
            alert('mascota registrada correctamente')
            toogleSpinner(false)
            navigate('/home/clientPet/file/' + clientId)

        } catch (error) {
            alert(error)
            toogleSpinner(false)
            if (error.message === 'invalid token') {
                navigate('/login')
            }
        }
    }
    return <>
        <form className="Register_cliPet" onSubmit={(event) => addPet(event)}>
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
            <div className="button_file">
                <button className="button_CliPet" type="submit">Enviar<img src="http://localhost:3000/prescripcion.png"></img></button>
                <Link to={'/home/clientPet/file/' + clientId}><button className="button_CliPet" type="button">Volver<img src="http://localhost:3000/atras.png" /></button></Link>
            </div>

        </form>
    </>

}

export default RegisterNewPet
