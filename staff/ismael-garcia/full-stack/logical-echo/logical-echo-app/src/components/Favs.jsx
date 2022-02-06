import { useState, useEffect, useContext } from 'react'
import AppContext from './AppContext'
import { retrieveFavItems, toggleFavItem } from '../logic'
import logger from '../utils/logger.js'
// import './Favs.css'

function Favs({ onBack, onItem, onToggle }) {
    logger.debug('Favs -> render')

    const { onFlowStart, onFlowEnd, onModal } = useContext(AppContext)

    const [items, setItems] = useState()

    useEffect(() => {
        async function favsUseEffect() {
            try {
                onFlowStart()

                const items = await retrieveFavItems(sessionStorage.token)

                setItems(items)

                onFlowEnd()

            } catch ({ message }) {
                onFlowEnd()

                onModal(message, 'warn')
            }
        } favsUseEffect();
    }, []);


    return <>
        <button className='button button--medium' onClick={onBack}>Go back</button>

        {items && items.length ?
        <ul className="favs container container--vertical">
            {
                items.map(({ id, name, images, price, isFav }) => <li key={id}className="home__results-item" onClick={() => onItem(id)}>
                    <h2>{name}</h2>
                    <span>{price}</span>
                    <img className="favs__image" src={images[0]} alt='' />
                    <button className="button" onClick={event => {
                            event.stopPropagation()

                            onToggle(id)
                        }}>{isFav ? '🧡' : '🤍'}</button>
                </li>)
            }
        </ul>
        :
        null}
    </>
}

export default Favs