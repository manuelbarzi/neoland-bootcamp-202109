import React, { useState } from 'react'
import './Search.css';
import ResultPet from './ResultPet';
import {searchPet} from '../../../logic';


function SearchPet() {

const [list, setList] = useState([]);

function search (event) {
 event.preventDefault()

const name = event.target.name.value

searchPet(name,'')
 .then((result)=>{
   setList(result)
 })
 .catch(error =>{

 })

 

 
}    // Todo preventDefault, recogr taaarget de los inputs...
      // Llamar a la función manejadora que previamente
      //tenemos que pasar por props
    
    return <>
 <form className="search_container" onSubmit={event =>search(event)}>
   <h1 className='title_search'>Busqueda mascota</h1>
      <div className="input">
        <input className="search_input" type="text" placeholder="Nombre" name="name" />
      </div>
      <div className="buttons">
        <button className='button' type="submit">Buscar</button>  
      </div>
      {
        list.length > 0 && <ResultPet items={list}/>
      }
    </form>

  </>
}

export default SearchPet