import React from 'react';
import {modifyPets} from '../../../logic';

function FilePet(){


    function file(event) {
        event.preventDefault();

        const note={
            weigth: event.target.weigth.value,
            noteVaccines: event.target.noteVaccines.value,
            noteDeworming: event.target.noteDeworming.value,
            notes: event.target.notes.value      
        }
        pet['note'] = response.id
        modifyPets(note,'') .then((response)=>{
            setNote(response)
        })
    }
}

return<>
<form className="file_container">
    <h1 className="title_file"></h1>
     <div className="file">
    <label>Peso<input className ="file_input"type="text"  name="weigth"/></label>
     <input className ="file_input"type="text" name="weigth"/>
        <h2 className="subtitle_file">Vacunas
            <textarea name="noteVaccines" id="" cols="30" row="10"></textarea>
        </h2>
        <h2 className="subtitle_file">Desparasitaciones
            <textarea name="noteDeworming" id="" cols="30" rows="10"></textarea>
        </h2>
        <h2 className="subtitle_file">Notas
            <textarea name="notes" id="" cols="30" rows="10"></textarea>
        </h2>

     </div>

     <div className="note_button">
         <button className="but_note"><img src="http://localhost:3000/notas.png"></img>Modificar</button>
         <button className="but_note"><img src="http://localhost:3000/eliminar.png"></img>Eliminar</button>
         
     </div>
</form>

</>

export default FilePet