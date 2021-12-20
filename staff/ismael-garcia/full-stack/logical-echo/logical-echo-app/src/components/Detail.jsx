import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { retrieveItem } from '../logic'
import AppContext from './AppContext'
import logger from '../utils/logger'
// import './Detail.css'

function Detail({ onBack, onToggle }) { 
    logger.debug('Detail -> render')

    const { onFlowStart, onFlowEnd, onModal } = useContext(AppContext)

    const { id } = useParams()
    const [item, setItem] = useState()

    useEffect(() => {
        async function detailUseEffect() {
            logger.debug('Detail -> useEffect')

            try {
                onFlowStart()

                const item = await retrieveItem(sessionStorage.token, id) 

                setItem(item)

                onFlowEnd()
                
            } catch ({ message }) {
                onFlowEnd()

                onModal(message, 'warn')
            }
        } detailUseEffect();
    }, [id]);

    return <div className="container container--vertical">
        {item && <>
            <button type="button" className="button button--medium" onClick={onBack}>Back to Results</button>
            <h2>{item.name}</h2>
            <img className="home__detail-image" src={item.images[0]} alt="" />
            <p>{item.description}</p>
            <span>{item.price}</span>
            <button type='button' className='button' onClick={() => onToggle(id)}>{item.isFav ? '🧡' : '🤍'}</button>
            <span>{item.colors}</span>
            <a href={item.url}>Visit the store</a>
        </>}
    </div>
}

export default Detail