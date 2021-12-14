import React, {useState} from 'react';
import ResultClient from './ResultClient';
import {searchClient} from '../../../logic';
import './Search.css';


function SearchClient() {

  const [list, setList] = useState([]);

  function search (event) {
    event.preventDefault();
    const client = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value
    }

    searchClient(client,'')
    .then((result)=>{
      setList(result);
      })
      .catch(error=>{
        // Manejo el error
      })
  };

  return <>
    <form className="search_container" onSubmit={event=>search(event)}>
    <h1 className='title_search'>Busqueda Propietario</h1>
      <div className="input">
        <input className="search_input" type="text" placeholder="Nombre" name="firstName" />
        <input className="search_input" type="text" placeholder="Apellidos" name="lastName" />
      </div>
      <div className="buttons">
        <button className='button' type="submit">Buscar</button>
      </div>
      <hr />
      {
        list.length > 0 && <ResultClient items={list} />
      }
    </form>

  </>
}

export default SearchClient