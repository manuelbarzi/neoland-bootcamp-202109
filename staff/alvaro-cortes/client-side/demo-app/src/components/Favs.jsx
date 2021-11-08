import React from 'react';
import './Home.css'
import Results from "./Results"
import logger from '../logger.js'

function Favs({ items, backResultList, onItem, onToggleFavorite }) {
    logger.info('Favs -> render')

    return <div className="welcome__details container container--vertical">
        <button className="button" onClick={backResultList}> Volver atrás</button>
        <Results onItem={onItem} items={items} onToggleFavorite={onToggleFavorite} />
    </div>
}

export default Favs