import React, { useState } from 'react';
import ResultClient from '../../../Forms-components/ResultClient';
import { searchClients } from '../../../../logic';
import '../styles/Search.css';


function SearchClients() {

  const [list, setList] = useState([]);

  const search = async (event) => {
    event.preventDefault();
    try {
      const client = {
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value
      }

      const result = await searchClients(sessionStorage.token, client);
      setList(result);
    } catch (err) {
      // Manejo el error
      // TODO: Feedback;
    }
  };

  return <>
    <form className="search_container" onSubmit={event => search(event)}>
      <h1 className='title_search'>Busqueda Propietario</h1>
      <div className="input">
        <input className="search_input" type="text" placeholder="Nombre" name="firstName" />
        <input className="search_input" type="text" placeholder="Apellidos" name="lastName" />
        <div className="buttons">
          <button className='button' type="submit">Buscar</button>
        </div>
      </div>
      <hr />
      {
        list.length > 0 && <ResultClient items={list} />
      }
    </form>

  </>
}

export default SearchClients