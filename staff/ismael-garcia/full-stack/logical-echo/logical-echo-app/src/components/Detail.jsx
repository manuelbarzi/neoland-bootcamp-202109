import { useState, useEffect, useContext } from 'react'
// import { useParams } from 'react-router-dom'
import { useQueryParams } from '../hooks'
import { retrieveItem } from '../logic'
import AppContext from './AppContext'
import logger from '../utils/logger'
import './Detail.css'

function Detail({ onBack, onToggle }) { 
    logger.debug('Detail -> render')

    const { onFlowStart, onFlowEnd, onModal } = useContext(AppContext)

    // const { id } = useParams()
    const [item, setItem] = useState()

    const queryParams = useQueryParams()

    const item_id = queryParams.get('q')

    const { token } = sessionStorage

    useEffect(() => {
        (async () => {
            logger.debug('Detail -> useEffect')

            try {
                onFlowStart()

                const item = await retrieveItem(token, item_id) 

                onFlowEnd()

                setItem(item)     
            } catch ({ message }) {
                onFlowEnd()

                onModal(message, 'error')
            }
        })()
    }, [item_id]);

    return <div className="container container--vertical">
        <button type="button" className="button button--medium" onClick={onBack}>Back to Results</button>
        {item && <>
            <div class="card">
                <img className="detail-image" src={item.images[0]} alt="" />
                <h3 class="card__header">{item.name}</h3>
                <div class="card__body">
                    <p class="card__body-description">{item.description}</p>
                </div>
                <ul class="card__list">
                    <li class="card__list-item"><span>{item.price}</span></li>
                    <li class="card__list-item"><span>Colors: {item.colors}</span></li>
                </ul>
                <div class="card-body">
                    <a href={item.url} class="card-link">Visit the shop</a>
                </div>
                <div class="card-footer">
                    Save in Favs
                    <button type='button' className='button fav-button' onClick={() => onToggle(item_id)}>{item.isFav ? '🧡' : '🤍'}</button>
                </div>
            </div>
            {/* <button type="button" className="button button--medium" onClick={onBack}>Back to Results</button>
            <h2>{item.name}</h2>
            <img className="home__detail-image" src={item.images[0]} alt="" />
            <p>{item.description}</p>
            <span>{item.price}</span>
            <button type='button' className='button' onClick={() => onToggle(item_id)}>{item.isFav ? '🧡' : '🤍'}</button>
            <span>Colors: {item.colors}</span>
            <a href={item.url}>Visit the store</a> */}
        </>}
    </div>
}

export default Detail