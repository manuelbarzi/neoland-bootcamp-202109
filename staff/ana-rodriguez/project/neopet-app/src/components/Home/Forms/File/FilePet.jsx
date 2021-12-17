import React from 'react';
import { modifyPets } from '../../../../logic';

function FilePet({ pet }) {

    const { vaccines, deparasite, notes, name, weigth } = pet;
    const saveFile = async (event) => {
        // event.preventDefault();
        // try {
        //     const pet = {
        //         weigth: event.target.weigth.value,
        //         noteVaccines: event.target.noteVaccines.value,
        //         noteDeworming: event.target.noteDeworming.value,
        //         notes: event.target.notes.value
        //     }

        //     const response = await modifyPets(sessionStorage.token, petId, pet)
        //     console.log(response);
        // } catch (err) {
        //     // Manejo el error
        //     // TODO: Feedback;
        // }
    }

    return <>
        <div className="file_container pet" onSubmit={event => saveFile(event)}>
            <h1 className="title_file">Mascota - {name}</h1>
            <div className="file">
                <label>Peso
                    <input className="input_reCliPet" type="text" name="weigth" value={weigth} />
                </label>
                <h2>Vacunas</h2>
                <ul>
                    {
                        vaccines && vaccines.length > 0 && vaccines.map((vaccine, index) =>
                            <li key={index}>{vaccine.date} - {vaccine.product} - {vaccine.vaccine}</li>
                        )
                    }
                    <li>Nueva: <input className="input_reCliPet" type="text" name="product" placeholder="Producto" /><input className="input_reCliPet" type="text" name="vaccine" placeholder="Descripción" /></li>
                </ul>
                <h2>Desparasitaciones</h2>
                <h2>Notas</h2>
                <ul>
                    {
                        notes && notes.length > 0 && notes.map((note, index) =>
                            <li key={index}>{note.date} - {note.note}</li>
                        )
                    }
                    <li><textarea cols="30" rows="10"></textarea></li>
                </ul>
            </div>
        </div>

    </>
}

export default FilePet