import React  from 'react'
import SearchClients from './SearchClients';
import SearchPets from './SearchPets';
import '../styles/Search.css';


function Search({toogleSpinner}){

    return<>
        <SearchClients toogleSpinner={toogleSpinner}></SearchClients>
        <br />
        <SearchPets toogleSpinner={toogleSpinner}></SearchPets>
    </>
 
}

export default Search