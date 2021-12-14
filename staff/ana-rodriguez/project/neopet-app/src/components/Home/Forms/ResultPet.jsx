import React  from 'react'
import {Link} from 'react-router-dom';


function ResultPet({items}) {
    
    return <ul className="results">
        {
      
            items.map(({id, name, species, race}) => 
            <Link to ={"/home/clientPet/file/"+id}>
                <li key={id} className="result">
                {name} - {species} - {race}
                </li>
            </Link>
            )
        }
    </ul>
}

export default ResultPet