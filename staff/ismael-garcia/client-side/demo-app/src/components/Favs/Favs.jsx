import logger from '../../utils/logger.js'
import { useState, useEffect } from 'react'
import { retrieveFavVehicles, toggleFavVehicle } from '../../logic'
import './Favs.css'

function Favs({ onBack, onItem, onFlowStart, onFlowEnd, onModal }) {
    logger.debug('Favs -> render')

    const [vehicles, setVehicles] = useState()

    useEffect(() => {
        onFlowStart()

        try {
            retrieveFavVehicles(sessionStorage.token, (error, vehicles) => {
                if (error) {
                    onFlowEnd()

                    onModal(error.message)

                    return
                }

                setVehicles(vehicles)
            })
        } catch ({ message }) {
            onFlowEnd()

            onModal(message, 'warn')
        }
    }, []);

    const toggleFav = id => {
        onFlowStart()

        try {
            toggleFavVehicle(sessionStorage.token, id, error => {
                if (error) {
                    onFlowEnd()

                    onModal(error.message)

                    return
                }

                setVehicles(vehicles.filter(vehicle => vehicle.id !== id))

                onFlowEnd()
            })
        } catch ({ message }) {
            onFlowEnd()

            onModal(message, 'warn')
        }
    }

    return <>
        <button className='button button--medium' onClick={onBack}>Go back</button>

        {vehicles && vehicles.length ?
        <ul className="favs container container--vertical">
            {
                vehicles.map(({ id, name, thumbnail, image, price, isFav }) => <li key={id}className="home__results-item" onClick={() => onItem(id)}>
                    <h2>{name}</h2>
                    <span>{price}$</span>
                    <img className="favs__image" src={thumbnail || image} alt='' />
                    <button className="button" onClick={event => {
                            event.stopPropagation()

                            toggleFav(id)
                        }}>{isFav ? '🧡' : '🤍'}</button>
                </li>)
            }
        </ul>
        :
        null}
    </>
}

export default Favs
