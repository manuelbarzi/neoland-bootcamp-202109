import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { retrieveItem, toggleFavItem } from '../logic'
import AppContext from './AppContext'
import logger from '../utils/logger'
// import './Detail.css'

function Detail({ onBack }) { 
    logger.debug('Detail -> render')

    const { onFlowStart, onFlowEnd, onModal } = useContext(AppContext)

    const { id } = useParams()
    const [item, setItem] = useState()

    useEffect(() => {
        onFlowStart()

        try {
            retrieveItem(sessionStorage.token, id, (error, item) => {
                if (error) { 
                    onFlowEnd()

                    onModal(error.message)

                    return
                }

                setItem(item)

                onFlowEnd()
            })
        } catch ({ message }) {
            onFlowEnd()

            onModal(message, 'warn')
        }
    }, [id]);

    const toggleFav = id => {
        onFlowStart()

        try {
            toggleFavItem(sessionStorage.token, id, error => {
                if (error) {
                    onFlowEnd()

                    onModal(error.message)

                    return
                }

                
                setItem({ ...item, isFav: !item.isFav })

                onFlowEnd()
            })
        } catch ({ message }) {
            onFlowEnd()

            onModal(message, 'warn')
        }
    }

    return <div className="container container--vertical">
        {item && <>
            <button type="button" className="button button--medium" onClick={onBack}>Back to Results</button>
            <h2>{item.name}</h2>
            <img className="home__detail-image" src={item.images[0]} alt="" />
            <p>{item.description}</p>
            <span>{item.price}</span>
            <button type='button' className='button' onClick={() => toggleFav(id)}>{item.isFav ? '🧡' : '🤍'}</button>
            <span>{item.colors}</span>
            <a href={item.url}>Visit the store</a>
        </>}
    </div>
}

export default Detail