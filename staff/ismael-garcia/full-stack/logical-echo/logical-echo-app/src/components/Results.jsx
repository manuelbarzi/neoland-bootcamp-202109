import logger from '../utils/logger'
// import './Results.css'
import { useQueryParams } from '../hooks'
import { useState, useEffect } from 'react'
import { searchItems, toggleFavItem } from '../logic'

function Results({ onItem, onFlowStart, onFlowEnd, onModal }) {
    logger.debug('Results -> render')

    const [items, setItems] = useState([])

    const queryParams = useQueryParams()

    const query = queryParams.get('q')

    useEffect(() => {
        onFlowStart()
        
        try {
            searchItems(sessionStorage.token, query, (error, items) => {
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
    }, [query])


    const toggleFav = id => {
        onFlowStart()

        try {
            toggleFavItem(sessionStorage.token, id, error => {
                if (error) {
                    onFlowEnd()

                    onModal(error.message)

                    return
                }

                setItems(items.map(item => {
                    if (item.id === id) {
                        return { ...item, isFav: !item.isFav}
                    }

                    return item
                }))

                onFlowEnd()
            })
        } catch ({ message }) {
            onFlowEnd()

            onModal(message, 'warn')
        }
    }

    return items.length ?
        <ul className="results container container--vertical">
            {
                items.map(({ id, name, images, price, isFav }) => <li key={id}className="home__results-item" onClick={() => onItem(id)}>
                    <h2>{name}</h2>
                    <span>{price}</span>
                    <img src={images[0]} alt='' />
                    <button className="button" onClick={event => {
                            event.stopPropagation()

                            toggleFav(id)
                        }}>{isFav ? '🧡' : '🤍'}</button>
                </li>)
            }
        </ul>
        :
        null
}

export default Results