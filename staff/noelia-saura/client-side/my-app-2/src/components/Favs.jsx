import logger from '../logger.js'
import { useState, useEffect } from 'react'
import { retrieveFavVehicles, toggleFavVehicle } from '../logic'
function Favs({ startSpinner, endSpinner, onModal, onBack, onItem }) {
    logger.debug('Favs -> render')
    const [vehicles, setVehicles] = useState()
    useEffect(() => {
        startSpinner()

        try {
            retrieveFavVehicles(sessionStorage.token, (error, vehicles) => {
                if (error) {
                    endSpinner()

                    onModal(error.message)

                    return
                }

                endSpinner()

                setVehicles(vehicles)
            })
        } catch ({ message }) {
            endSpinner()

            onModal(message, 'warn')
        }
    }, [])

    const toggleFav = id => {
        startSpinner()

        try {
            toggleFavVehicle(sessionStorage.token, id, error => {
                if (error) {
                    endSpinner()

                    onModal(error.message)

                    return
                }

                setVehicles(vehicles.filter(vehicle => vehicle.id !== id))

                endSpinner()
            })
        } catch ({ message }) {
            endSpinner()

            onModal(message, 'warn')
        }
    }
    return <>
        <button className="button" onClick={onBack}>Go back</button>

        {vehicles && vehicles.length ?
        <ul className="favs container container--vertical">
            {
                vehicles.map(({ id, name, thumbnail, image, price, isFav }) => <li key={id} className="home__result" onClick={() => onItem(id)}>
                    <div className="container">
                        <h2>{name}</h2>
                        <button className="button" onClick={event => {
                            event.stopPropagation()

                            toggleFav(id)
                        }}>{isFav ? '💜' : '🤍'}</button>
                    </div>
                    <img className="favs__image" src={thumbnail || image} />
                    <span>{price} $</span>
                </li>)
            }
        </ul>
        :
        null}
    </>
}

export default Favs