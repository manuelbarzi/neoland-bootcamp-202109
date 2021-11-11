import React from 'react'
import { useState } from 'react';
import './Home.css'
import AddedToCart from './Added-to-cart';

import logger from '../logger'

function Detail({
    item: {
        id,
        name,
        image,
        description,
        year,
        price,
        color,
        style,
        collection,
        maker,
        url,
        isFav
    },
    backResultList,
    onToggleFavorite,
    onAddToCart
}) {   
    logger.info('Detail -> render')

    const [added, setAdded] = useState(false)
    const addedTo = () => setAdded(true)
    const removedTo = () => setAdded(false)

    return <div className="welcome__details container container--vertical">
        <button className="button" onClick={backResultList}> Volver atrás</button>
        <button className="button button--red" onClick={() => {
            onAddToCart(id);
            addedTo();
        }}> Agregar al carrito <span>{added && <AddedToCart />}</span></button>
        <span onClick={() => onToggleFavorite(id)}>{isFav ? '❤️' : '🤍'}</span>
        <h2>{name}</h2>
        <img src={image} alt="" width="300px" />
        <p>{description}</p>
        <time>{year}</time>
        <span>{price}</span>
        <span>{color}</span>
        <span>{style}</span>
        <span>{collection}</span>
        <span>{maker}</span>
        <a href={url}>Original</a>
    </div>
}

export default Detail