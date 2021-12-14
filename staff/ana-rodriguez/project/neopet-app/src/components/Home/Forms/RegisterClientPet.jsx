import React from 'react';
import { useState, useEffect } from "react";
import { getEspecies, getGenero, getRazaById } from '../../../logic/combos';
import registerPet from '../../../logic/register-pet';
import registerClients from '../../../logic/register-clients';
import Combo from '../../Forms-components/Combo';
import './RegisterClientPet.css';

function RegisterClientPet() {
    const [especies, setEspecies] = useState([]);
    const [razas, setRazas] = useState([]);
    // const [mestizo, setMestizo] = useState(false);
    const [genero, setGenero] = useState([]);
    // const [petCount, setPetCount] = useState([0]);

    let valorComboEspecie;
    let valorComboRaza;
    let valorComboGenero;
    useEffect(() => {
        getEspecies((err, res) => {
            setEspecies(res);
        });
        getGenero((err, res) => {
            setGenero(res)
        });
    }, []
    );

    function especieSeleccionada(event) {
        const id = event.target.value;
        valorComboEspecie = id;
        getRazaById(parseInt(id), (err, res) => {
            setRazas(res);
        });
    };
                                            //Aquí guardo los valores de los combo, en las tres funciones
    function razaSeleccionada(event){
        const id = event.target.value;
        valorComboRaza = id;
        // if(valorComboRaza === "515"){
        //     setMestizo(true);
        // }else{
        //     setMestizo(false);
        // }
    }

    function generoSeleccionado(event){
        const id = event.target.value;
        valorComboGenero = id;
    }
    // function addPet(e) {
    //     e.preventDefault();
    //     setPetCount([...petCount, petCount.length]);
    // };

    // function removePet(event) {
    //     event.preventDefault();
    //     if (petCount.length > 1) {
    //         const newPetCount = petCount.slice(0, -1);
    //         setPetCount([...newPetCount]);
    //     };
    // };

    function registerClientsOnSubmit(event) {
        event.preventDefault();
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
            specie: valorComboEspecie,
            race: valorComboRaza,
            mestizo: event.target.mestizo.value,//||'',
            hair: event.target.hair.value,
            layer: event.target.layer.value,
            genre: valorComboGenero,
            age: event.target.age.value,
            pedigree: event.target.pedigree.value,
            passport: event.target.passport.value,
            alta: event.target.alta.value,
        };

        /**
         * registra el cliente, y en el callback registra a la mascota.
         */
        registerClients(client, '').then(response1=>{
            
            // Si el cliente se ha registrado, iniciamos el proceso de registro de la mascota
            pet['client'] = response1.id
            registerPet(client, pet,'').then(response2=>{
                
                //manejamos que hacemos cuándo ambos están registrados
                alert('cliente y masocta registradas correctamente')
            }).catch(err2=>{
                
                // Aquí manejamos los errores de registerPet
            })
        }).catch(err1=>{
            // Aquí manejamos los errores de registerClients
        });
    }; 
            
        
    return <>
        <form className="Register_cliPet" onSubmit={(event) => registerClientsOnSubmit(event)}>
            <h1 className="tit_ReCliPet">Registro Propietario</h1>
            <div className="input_CliPet">
                <input className="input_reCliPet" type="text" placeholder="Nombre" name="firstName" />
                <input className="input_reCliPet" type="text" placeholder="Apellidos" name="lastName" />
                <input className="input_reCliPet" type="text" placeholder="teléfono" name="phone" />
                <input className="input_reCliPet" type="text" placeholder="Direccion" name="direction" />
                <input className="input_reCliPet" type="text" placeholder="email" name="email" />
                <input className="input_reCliPet" type="text" placeholder="documento de identidad" name="document" />
            </div>
            <hr></hr>
            <h1 className="tit_ReCliPet">Registro Mascota</h1>
            <div className="input_CliPet">
                <label>Nombre<input className="reCliPet" type="text" name="name" /></label>
                <label>Chip<input className="reCliPet" type="text" name="chip" /></label>
                <label>Tatuaje<input className="reCliPet" type="text" name="tatoo" /></label>
                <label>Especie:{<Combo className="reCliPet" items={especies} onSelect={(event) => especieSeleccionada(event)} />}</label>
                <label>Raza:<Combo className="reCliPet" items={razas} onSelect={(event) => razaSeleccionada(event)} campoPendiente="Especie"/></label>
                <label>Tipo de Mestizo<input className="reCliPet" type="text" name="mestizo" /></label>
                <label>Tipo de Pelo<input className="reCliPet" type="text" name="hair" /></label>
                <label>Capa<input className="reCliPet" type="text" name="layer" /></label>
                <label>Género:<Combo className="reCliPet" items={genero} onSelect={(event) => generoSeleccionado(event)} /></label>
                <label>Nacimiento<input className="reCliPet" type="text" name="age" /></label>
                <div className='checkbox_label'>                   
                <label htmlFor="pedigree">Pedigrí</label><input className="reCliPet" id='pedigree' type="checkbox" name="pedigree" />
                </div>
                <label>Pasaporte<input className="reCliPet" type="text" name="passport" /></label>
                <label>Alta<input className="reCliPet" type="text" name="alta" /></label>
                <label>Baja<input className="reCliPet" type="text" name="baja" /></label>
            </div>

            <button className="button_CliPet" type="submit">Enviar<img src="http://localhost:3000/prescripcion.png"></img></button>

        </form>

    </>
}


export default RegisterClientPet