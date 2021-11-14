import logger from '../../utils/logger'
import './Detail.css'
import { useParams } from 'react-router-dom'
import { retrieveVehicle, toggleFavVehicle, addVehicleToCart } from '../../logic'
import { useState, useEffect } from 'react'

function Detail({ onBack, onFlowStart, onFlowEnd, onModal }) { 
    logger.debug('Detail -> render')

    const { id } = useParams()
    const [vehicle, setVehicle] = useState()

    useEffect(() => {
        onFlowStart()

        try {
            retrieveVehicle(sessionStorage.token, id, (error, vehicle) => {
                if (error) { 
                    onFlowEnd()

                    onModal(error.message)

                    return
                }

                setVehicle(vehicle)

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
            toggleFavVehicle(sessionStorage.token, id, error => {
                if (error) {
                    onFlowEnd()

                    onModal(error.message)

                    return
                }

                
                setVehicle({ ...vehicle, isFav: !vehicle.isFav })

                onFlowEnd()
            })
        } catch ({ message }) {
            onFlowEnd()

            onModal(message, 'warn')
        }
    }

    const addToCart = id => {
        onFlowStart()

        try {
            addVehicleToCart(sessionStorage.token, id, error => {
                if (error) {
                    onFlowEnd()

                    onModal(error.message)

                    return
                }

                onFlowEnd()
            })
        } catch ({ message }) {
            onFlowEnd()

            onModal(message, 'warn')
        }
    }
    
    return <div className="container container--vertical">
        {vehicle && <>
            <button type="button" className="button button--medium" onClick={onBack}>Back to Results</button>
            <h2>{vehicle.name}</h2>
            <img className="home__detail-image" src={vehicle.image} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quas sapiente veritatis, magni natus necessitatibus velit aliquam enim iste? Beatae velit explicabo temporibus et blanditiis! Deleniti nemo voluptatem cumque nam.</p>
            <time>{vehicle.year}</time>
            <span>{vehicle.price}</span>
            <button className='button' onClick={() => toggleFav(id)}>{vehicle.isFav ? '🧡' : '🤍'}</button>
            <button type="button" className='button button--medium button--dark' onClick={() => addToCart(id)}>Add to Cart</button>
            <span>{vehicle.color}</span>
            <span>{vehicle.style}</span>
            <span>{vehicle.collection}</span>
            <span>{vehicle.maker}</span>
            <a href={vehicle.url}>original</a>
        </>}
    </div>
}

export default Detail