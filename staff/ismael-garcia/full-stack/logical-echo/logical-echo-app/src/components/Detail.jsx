import logger from '../utils/logger'
// import './Detail.css'
import { useParams } from 'react-router-dom'
import { retrieveItem, toggleFavItem } from '../logic'
import { useState, useEffect } from 'react'

function Detail({ onBack, onFlowStart, onFlowEnd, onModal }) { 
    logger.debug('Detail -> render')

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
            <img className="home__detail-image" src={item.image} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quas sapiente veritatis, magni natus necessitatibus velit aliquam enim iste? Beatae velit explicabo temporibus et blanditiis! Deleniti nemo voluptatem cumque nam.</p>
            <time>{item.year}</time>
            <span>{item.price}</span>
            <button className='button' onClick={() => toggleFav(id)}>{item.isFav ? '🧡' : '🤍'}</button>
            <span>{item.color}</span>
            <span>{item.style}</span>
            <span>{item.collection}</span>
            <span>{item.maker}</span>
            <a href={item.url}>original</a>
        </>}
    </div>
}

export default Detail