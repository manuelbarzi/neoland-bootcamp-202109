import React from 'react';
import { Link } from 'react-router-dom';


function ResultClient({ items }) {


    return <ul className="results">
        {
            items.map(({ id, firstName, lastName, phone }) =>
                <Link key={id} to={"/home/clientPet/file/" + id}>
                    <li className="result">
                        {firstName} {lastName} - {phone}
                    </li>
                </Link>
            )
        }
    </ul>
};

export default ResultClient