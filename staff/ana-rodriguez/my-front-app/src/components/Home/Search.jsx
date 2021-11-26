import React  from 'react'
import {Link} from 'react-router-dom'
import './Search.css';


function Search(){

    return<>
    <form className="search_container">
        <div className="input">
        <input className="search_input" type="text" palceholder="Search"/>
        </div>
        <div className="buttons">
        <button className='button' type="button">Search</button>
          <Link to="../home"><button className="button" type="button">Go Back</button></Link>
        </div>
    </form>
    
    </>
}

export default Search