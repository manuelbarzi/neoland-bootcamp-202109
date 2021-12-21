import React from 'react'
import { Link } from 'react-router-dom';


function ResultPet({ items }) {

    return <ul className="results">
        {
            items.map(({ id, client, name, specie, race }) =>
                <Link key={id} to={"/home/clientPet/file/" + client}>
                    <li className="result">
                        {name} - {specie} - {race}
                    </li>
                </Link>
            )
        }
    </ul>
}

export default ResultPet