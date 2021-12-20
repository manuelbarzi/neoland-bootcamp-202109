import { useQueryParams } from '../hooks'
import { useState, useEffect, useContext } from 'react'
import { searchItems } from '../logic'
import AppContext from './AppContext'
import logger from '../utils/logger'
// import './Results.css'

function Results({ onItem, onToggle }) {
    logger.debug('Results -> render')

    const { onFlowStart, onFlowEnd, onModal } = useContext(AppContext)

    const [items, setItems] = useState([])

    const queryParams = useQueryParams()

    const query = queryParams.get('q')

    useEffect(() => {
        async function resultsUseEffect() {
            logger.debug('Results -> useEffect')
        
            const { token } = sessionStorage
            
            try {
                onFlowStart()

                const items = await searchItems(token, query)
                    
                onFlowEnd()
                    
                setItems(items)

            } catch ({ message }) {
                onFlowEnd()

                onModal(message, 'warn')
            }
        }
        resultsUseEffect();
    }, [query]);

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

export default Results