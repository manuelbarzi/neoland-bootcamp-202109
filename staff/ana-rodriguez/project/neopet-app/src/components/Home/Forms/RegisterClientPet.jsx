import React from 'react';
import { useState, useEffect} from "react";
import {getEspecies,getGenero,getRazaById} from '../../../logic/combos';
import registerClients from '../../../logic/register-clients';
import registerPet from '../../../logic/register-pet';
import Combo from '../../Forms-components/Combo';
import './RegisterClientPet.css';

function RegisterClientPet(registerClient,){
    const [especies, setEspecies] = useState([]);
    const [razas, setRazas] = useState([]);
    const [genero,setGenero] = useState([]);
    const [petCount,setPetCount] = useState([0]);

    useEffect(()=>{
        getEspecies((err,res)=>{
            setEspecies(res);
        });
        getGenero((err,res)=>{
            setGenero(res)
        });
    },[]
    );

    function especieSeleccionada(e){
        const id = e.target.value;
        getRazaById(id,(err,res)=>{
            setRazas(res);
        })
    };

    function addPet(e){
        e.preventDefault();
        setPetCount([...petCount,petCount.length]);
    };

    function removePet(e){
        e.preventDefault();
        if(petCount.length>1){
            const newPetCount = petCount.slice(0,-1);
            setPetCount([...newPetCount]);
        };
    };

    function registerClient(e){
        e.preventDefault();

        //CLIENT
        const client = {
            uRegister:"PG00001",
            regDate: new Date().toLocaleDateString(),
            name:e.target.name.value,
            firstName:e.target.firstName.value,
            lastName:e.target.lastName.value,
            phone:e.target.phone.value,
            email:e.target.email.value,
            dni:e.target.dni.value,
            petUIDs:[]
        }

        //PET
        const pets = [];

        //Comprobar la cuenta de pets. Usar un bucle para añadirlo al array de pets mediante push()
        for(var i = 0; i < petCount.length; i++){
            pets.push({
                name : e.target['name'+i].value,
                chip : e.target['chip'+i].value,
                tatoo : e.target['tatoo'+i].value,
                specie : e.target['specie'+i].value,
                race : e.target['race'+i].value,
                hair : e.target['hair'+i].value,
                layer : e.target['layer'+i].value,
                genre : e.target['genre'+i].value,
                age : e.target['age'+i].value,
                pedigree : e.target['pedigree'+i].value,
                passport : e.target['race'+i].value,
                alta : e.target['hair'+i].value,
                // baja : e.target.baja.value
            });
        };

        // Compruebo si tengo los datos "correctos" antes de enviarlos al "servidor"
        if(client && pets){
            registerClients(client,'token').then(
                // Manejo local del resolve
                (res)=>{
                    // Lo que hago cuándo está registrado (201|200) el cliente
                    console.log(res);
                    registerPet(client,pets,'token').then(
                        (res)=>{
                            //Lo que hago cuándo está registrado el pet
                        }
                    ).catch(
                        (err)=>{
                            // Manejo local del reject
                            console.log(err)
                        }
                    );
                }
            ).catch(
                // Manejo local del reject
                (err)=>{
                    console.log(err)
                }
            );
        }

    }
    
    
    return<>
    <form className="Register_cliPet" onSubmit={(event)=>registerClient(event)}>
        <h1 className="tit_ReCliPet">Registro Cliente y Mascota</h1>
        <div className="input_CliPet">
            <input className="reCliPet" type="text" placeholder="Nombre" name="name" />
            <input className="reCliPet" type="text" placeholder="Primer Apellido" name="firstName" />
            <input className="reCliPet" type="text" placeholder="Segundo Apellido" name="lastName" />
            <input className="reCliPet" type="text" placeholder="teléfono" name="phone" />
            <input className="reCliPet" type="text" placeholder="email" name="email" />
            <input className="reCliPet" type="text" placeholder="dni" name="dni" />
        
        </div>
        <div className="petList">
            <ul>
                {
                     
                    petCount.map(
                        (id)=>
                            <li key={'petCount_${petCount}'}>{petCount}
                                <div className="input_CliPet">
                                    <label>Nombre<input className="reCliPet" type="text" name={"name"+id} /></label>
                                    <label>Chip<input className="reCliPet" type="text" name={"chip"+id} /></label>
                                    <label>Tatuaje<input className="reCliPet" type="text" name={"tatoo"+id} /></label>
                                    <label className="reCliPet">Especie:{<Combo name={"specie"+id} items={especies} onSelect={(event)=>especieSeleccionada(event)}/>}</label>
                                    <label className="reCliPet">Raza:<Combo name={"race"+id} items={razas} onSelect={()=>null}/></label>
                                    <label>Tipo de Pelo<input className="reCliPet" type="text" name={"hair"+id} /></label>
                                    <label>Capa<input className="reCliPet" type="text" name={"layer"+id} /></label>
                                    <label className="reCliPet">Género:<Combo name={"genre"+id} items={genero} onSelect={()=>null}/></label>
                                    <label>Nacimiento<input className="reCliPet" type="text" name={"age"+id} /></label>
                                    <label>Pedigrí<input className="reCliPet" type="checkbox" name={"pedigree"+id} /></label>
                                    <label>Pasaporte<input className="reCliPet" type="text" name={"passport"+id} /></label>
                                    <label>Alta<input className="reCliPet" type="text" name={"alta"+id} /></label>
                                    <label>Baja<input className="reCliPet" type="text" name={"baja"+id} /></label>
                                </div>
                            </li>
                    )
                }
            </ul>
        </div>

        <button className="button_CliPet" type="submit" >Enviar<img src="prescripcion.png"></img></button>
        <button className="bitton_plusMin" type="button" onClick={e=>addPet(e)}>Añadir</button>
        <button className="bitton_plusMin" type="button" onClick={e=>removePet(e)}>Eliminar</button>

    </form>
    
    </>
    
}

export default RegisterClientPet