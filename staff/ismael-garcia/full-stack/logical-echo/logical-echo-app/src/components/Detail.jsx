import { useState, useEffect, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { retrieveItem, toggleFavItem } from '../logic'
import AppContext from './AppContext'
import logger from '../utils/logger'
import './Detail.css'

function Detail() { 
    logger.debug('Detail -> render')

    const { onFlowStart, onFlowEnd, onModal } = useContext(AppContext)

    const [item, setItem] = useState()

    const { item_id } = useParams()

    const navigate = useNavigate()

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
    }, [item_id])

    const toggleFav = async (item_id) => {
        try {
            if (!token) {
                onModal('Sign in to add favorites to your profile', 'warn')
            } else {
                onFlowStart()
                
                await toggleFavItem(token, item_id)
    
                setItem({ ...item, isFav: !item.isFav })
    
                onFlowEnd()
            }
        } catch ({ message }) {
            onFlowEnd()

            onModal(message, 'error')
        }
    }

    const goBack = () => navigate(-1)

    return <div className="container container--vertical">
        <button type="button" className="button button--medium" onClick={() => goBack()}>Back to Results</button>
        
        {item && <>
            <div class="card">
                {
                    item.images.map((image) => <img className="detail-image" src={image} alt="" />)
                }
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
                    <button type='button' className='button fav-button' onClick={() => toggleFav(item.item_id)}>{item.isFav ? '🧡' : '🤍'}</button>
                </div>
            </div>
        </>}
    </div>
}

export default Detail