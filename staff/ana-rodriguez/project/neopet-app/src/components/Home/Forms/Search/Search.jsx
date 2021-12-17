import React  from 'react'
import SearchClients from './SearchClients';
import SearchPets from './SearchPets';
import '../styles/Search.css';


function Search(){

    return<>
        <SearchClients></SearchClients>
        <br />
        <SearchPets></SearchPets>
    </>
 
}

export default Search