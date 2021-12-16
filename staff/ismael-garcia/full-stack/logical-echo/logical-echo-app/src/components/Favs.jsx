import logger from '../utils/logger.js'
import { useState, useEffect } from 'react'
import { retrieveFavItems, toggleFavItem } from '../logic'
// import './Favs.css'

function Favs({ onBack, onItem, onFlowStart, onFlowEnd, onModal }) {
    logger.debug('Favs -> render')

    const [items, setItems] = useState()

    useEffect(() => {
        onFlowStart()

        try {
            retrieveFavItems(sessionStorage.token, (error, items) => {
                if (error) {
                    onFlowEnd()

                    onModal(error.message)

                    return
                }

                setItems(items)

                onFlowEnd()
            })
        } catch ({ message }) {
            onFlowEnd()

            onModal(message, 'warn')
        }
    }, []);

    const toggleFav = id => {
        onFlowStart()

        try {
            toggleFavItem(sessionStorage.token, id, error => {
                if (error) {
                    onFlowEnd()

                    onModal(error.message)

                    return
                }

                setItems(items.filter(item => item.id !== id))

                onFlowEnd()
            })
        } catch ({ message }) {
            onFlowEnd()

            onModal(message, 'warn')
        }
    }

    return <>
        <button className='button button--medium' onClick={onBack}>Go back</button>

        {items && items.length ?
        <ul className="favs container container--vertical">
            {
                items.map(({ id, name, thumbnail, image, price, isFav }) => <li key={id}className="home__results-item" onClick={() => onItem(id)}>
                    <h2>{name}</h2>
                    <span>{price}$</span>
                    <img className="favs__image" src={thumbnail || image} alt='' />
                    <button className="button" onClick={event => {
                            event.stopPropagation()

                            toggleFav(id)
                        }}>{isFav ? '🧡' : '🤍'}</button>
                </li>)
            }
        </ul>
        :
        null}
    </>
}

export default Favs