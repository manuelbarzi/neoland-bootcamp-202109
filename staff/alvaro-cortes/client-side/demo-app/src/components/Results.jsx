import React from 'react';
import './Home.css'
import logger from '../logger'

function Results({ items, onItem }) {
    logger.info("Results -> render")
    return items.length ?
        <div className="welcome__results container container--vertical">
            <ul className="welcome__results--ul">
                {
                    items.map(({ id, name, thumbnail, image, price }) => <li  key={id} onClick={() => onItem(id)}>
                        <h2>{name}</h2>
                        <img src={thumbnail || image} />
                        <span>{price}</span>
                    </li>)
                }
            </ul>
        </div>
        :
        null
}

export default Results