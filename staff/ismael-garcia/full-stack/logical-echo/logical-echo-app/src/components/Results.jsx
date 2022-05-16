import { useQueryParams } from '../hooks'
import { useState, useEffect, useContext } from 'react'
import { searchItems, toggleFavItem } from '../logic'
import AppContext from './AppContext'
import logger from '../utils/logger'
import './Results.css'

function Results({ onItem }) {
    logger.debug('Results -> render')

    const { onFlowStart, onFlowEnd, onModal } = useContext(AppContext)

    const [items, setItems] = useState([])

    const queryParams = useQueryParams()

    const query = queryParams.get('q')

    const { token } = sessionStorage

    useEffect(() => {
        (async () => {
            logger.debug('Results -> useEffect')
            
            try {
                onFlowStart()

                const items = await searchItems(token, query)

                onFlowEnd()
                    
                setItems(items)
            } catch ({ message }) {
                onFlowEnd()

                onModal(message, 'error')
            }
        })()
    }, [query])

    const toggleFav = async (item_id) => {
        try {
            onFlowStart()

            if (!token) {
                onModal('Sign in to add favorites to your profile', 'warn')
            } else {
                await toggleFavItem(token, item_id)
    
                setItems(items.map(item => {
                    if (item.item_id === item_id) {
                        return { ...item, isFav: !item.isFav}
                    }
    
                    return item
                }))
    
                onFlowEnd()
            }
        } catch ({ message }) {
            onFlowEnd()

            onModal(message, 'warn')
        }
    }

    return items && items.length ? <>
        <div className='container container--vertical'>
            <p>{items.length} results</p>
            
            <ul className='results container container--vertical'>
                {
                    items.map(({ item_id, name, images, price, isFav }) => <li key={item_id}className='home__results-item clickable' onClick={() => onItem(item_id)}>
                        <img src={images[0]} alt='' />
                        <h2>{name}</h2>
                        <span>{price}</span>
                        <button className='button fav-button clickable' onClick={event => {
                                event.stopPropagation()

                                toggleFav(item_id)
                            }}>{isFav ? '🧡' : '🤍'}</button>
                    </li>)
                }
            </ul>
        </div>
        </>
        :
        null
}

export default Results