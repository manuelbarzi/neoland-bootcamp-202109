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

    const store = queryParams.get('q')

    const { token } = sessionStorage

    useEffect(() => {
        (async () => {
            logger.debug('Collection -> useEffect')
            
            try {
                onFlowStart()

                const items = await retrieveItemsCollection(token, store)

                onFlowEnd()
                    
                setItems(items)

            } catch ({ message }) {
                onFlowEnd()

                onModal(message, 'warn')
            }
        })()
    }, [store, token]);

    return items && items.length ?
        <div>
            <ul className="results container container--vertical">
                {
                    items.map(({ item_id, name, images, price, isFav }) =>
                    <li key={item_id}className="home__results-item" onClick={() => onItem(item_id)}>
                        <img src={images[0]} alt='' />
                        <h2>{name}</h2>
                        <span>{price}</span>
                        <button className="button fav-button" onClick={event => {
                                event.stopPropagation()
    
                                onToggle(item_id)
                            }}>{isFav ? '🧡' : '🤍'}</button>
                    </li>
                    )
                }
            </ul>  
        </div>
        :
        null
}

export default Collection