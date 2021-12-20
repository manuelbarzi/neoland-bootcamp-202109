import React, { useState } from 'react'
import ResultPet from '../../../Forms-components/ResultPet';
import { searchPets } from '../../../../logic';
import '../styles/Search.css';


function SearchPets({toogleSpinner}) {

  const [list, setList] = useState([]);

  const search = async (event) => {
    event.preventDefault()
    try {
      toogleSpinner(true)

      const pet = { name: event.target.name.value }
      const result = await searchPets(sessionStorage.token, pet);
      setList(result);
      toogleSpinner(false)
    }
    catch (error) {
      toogleSpinner(false)
    
    }

  }

  return <>
    <form className="search_container" onSubmit={event => search(event)}>
      <h1 className='title_search'>Busqueda mascota</h1>
      <div className="input">
        <input className="search_input" type="text" placeholder="Nombre" name="name" />
        <div className="buttons">
          <button className='button' type="submit">Buscar</button>
        </div>
      </div>
      {
        list.length > 0 && <ResultPet items={list} />
      }
    </form>

  </>
}

export default SearchPets