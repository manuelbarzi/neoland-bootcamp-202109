import { useState, useEffect, useContext } from 'react'
// import { useParams } from 'react-router-dom'
import { useQueryParams } from '../hooks'
import { retrieveItem } from '../logic'
import AppContext from './AppContext'
import logger from '../utils/logger'
// import './Detail.css'

function Detail({ onBack, onToggle }) { 
    logger.debug('Detail -> render')

    const { onFlowStart, onFlowEnd, onModal } = useContext(AppContext)

    // const { id } = useParams()
    const [item, setItem] = useState()

    const queryParams = useQueryParams()

    const item_id = queryParams.get('q')

    useEffect(() => {
        (async () => {
            logger.debug('Detail -> useEffect')

            const { token } = sessionStorage

            try {
                onFlowStart()

                const item = await retrieveItem(token, item_id) 

                onFlowEnd()

                setItem(item)
                
            } catch ({ message }) {
                onFlowEnd()

                onModal(message, 'warn')
            }
        })()
    }, [item_id]);

    return <div className="container container--vertical">
        {item && <>
            <button type="button" className="button button--medium" onClick={onBack}>Back to Results</button>
            <h2>{item.name}</h2>
            <img className="home__detail-image" src={item.images[0]} alt="" />
            <p>{item.description}</p>
            <span>{item.price}</span>
            <button type='button' className='button' onClick={() => onToggle(item_id)}>{item.isFav ? '🧡' : '🤍'}</button>
            <span>{item.colors}</span>
            <a href={item.url}>Visit the store</a>
        </>}
    </div>
}

export default Detail