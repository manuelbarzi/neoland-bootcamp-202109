import React from 'react';

function FileClient(){}

return<>
<form className="file_container">
    <h1 className="title_file"></h1>
     <div className="input_file">
        <h2 className="subtitle_file">
            <textarea name="noteVacunas" id="" cols="30" row="10"></textarea>
        </h2>
        <h2 className="subtitle_file">
            <textarea name="noteDesparasitation" id="" cols="30" rows="10"></textarea>
        </h2>

     </div>

     <div className="note_button">
         <button className="but_note"><img src="http://localhost:3000/notas.png"></img>Modificar</button>
         <button className="but_note"><img src="http://localhost:3000/add.png"></img>Añadir mascota</button>
         <button className="but_note"><img src="http://localhost:3000/eliminar.png"></img>Eliminar</button>
         
     </div>
</form>

</>

export default FileClient