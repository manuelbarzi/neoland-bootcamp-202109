import React  from 'react'
import './Search.css';
import SearchClient from './SearchClient';
import SearchPet from './SearchPet';


function Search(){

    return<>
        <SearchClient></SearchClient>
        <br />
        <SearchPet></SearchPet>
    </>
 
}

export default Search