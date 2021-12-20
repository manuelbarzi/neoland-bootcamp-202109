import { useQueryParams } from '../hooks'
import { useState, useEffect, useContext } from 'react'
import { retrieveItemsCollection } from '../logic'
import AppContext from './AppContext'
import logger from '../utils/logger'
// import './Collection.css'

function Collection({ onItem, onToggle }) {
    logger.debug('Collection -> render')

    const { onFlowStart, onFlowEnd, onModal } = useContext(AppContext)

    const [items, setItems] = useState([])

    const queryParams = useQueryParams()

    const store = queryParams.get('store')

    useEffect(() => {
        async function collectionUseEffect() {
            logger.debug('Collection -> useEffect')
        
            const { token } = sessionStorage
            
            try {
                onFlowStart()

                const items = await retrieveItemsCollection(token, store)
                    
                onFlowEnd()
                    
                setItems(items)

            } catch ({ message }) {
                onFlowEnd()

                onModal(message, 'warn')
            }
        }
        collectionUseEffect();
    }, [store]);

    return items.length ?
        <ul className="results container container--vertical">
            {
                items.map(({ id, name, images, price, isFav }) => <li key={id}className="home__results-item" onClick={() => onItem(id)}>
                    <h2>{name}</h2>
                    <span>{price}</span>
                    <img src={images[0]} alt='' />
                    <button className="button" onClick={event => {
                            event.stopPropagation()

                            onToggle(id)
                        }}>{isFav ? '🧡' : '🤍'}</button>
                </li>)
            }
        </ul>
        :
        null
}

export default Collection