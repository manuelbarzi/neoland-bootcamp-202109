import React from 'react';
import './Home.css'
import logger from '../logger'

function Results({ items, onItem, onToggleFavorite }) {
    logger.info("Results -> render")
    
    return items.length ?
        <div className="welcome__results container container--vertical">
            <ul className="welcome__results--ul">
                {
                    items.map(({ id, name, thumbnail, image, price, isFav }) => <li key={id} onClick={() => {onItem(id)}}>
                        <div>
                            <h2>{name}</h2>
                            <span onClick={event => {
                                event.stopPropagation()

                                onToggleFavorite(id)
                            }}>{isFav ? '❤️' : '🤍'}</span>
                        </div>
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