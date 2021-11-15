import logger from '../logger'
import { useQueryParams } from '../hooks'
import { useState, useEffect } from 'react'
import { searchVehicles, toggleFavVehicle } from '../logic'

function Results({ onItem, startSpinner, endSpinner, onModal }) {
    logger.debug('Results -> render')
    const [vehicles, setVehicles] = useState()

    const queryParams = useQueryParams()

    const query = queryParams.get('q')
    useEffect(() => {
        
        startSpinner()

        try {
            searchVehicles(sessionStorage.token, query, (error, vehicles) => {
                if (error) {
                    endSpinner()

                    onModal(error.message)

                    return
                }

                setVehicles(vehicles)

                endSpinner()
            })
        } catch ({ message }) {
            endSpinner()

            onModal(message, 'warn')
        }
    }, [query])

    const toggleFav = id => {
        startSpinner()

        try {
            toggleFavVehicle(sessionStorage.token, id, error => {
                if (error) {
                    endSpinner()

                    onModal(error.message)

                    return
                }

                setVehicles(vehicles.map(vehicle => {
                    if (vehicle.id === id) {
                        return { ...vehicle, isFav: !vehicle.isFav }
                    }

                    return vehicle
                }))

                endSpinner()
            })
        } catch ({ message }) {
            endSpinner()

            onModal(message, 'warn')
        }
    }
    return vehicles && vehicles.length ?
        <ul className="home__results container container--vertical">

            {
                vehicles.map(({ id, name, thumbnail, image, price, isFav }) => <li key={id} className="home__result" onClick={() => onItem(id)}>
                    <div className="container">
                        <h2>{name}</h2>
                        <button className="button" onClick={event => {
                            event.stopPropagation()

                            toggleFav(id)
                        }}>{isFav ? '💜' : '🤍'}</button>
                    </div>
                    <img src={thumbnail || image} />
                    <span>{price}€</span>
                </li>)
            }
        </ul>
        :
        null
        
}

export default Results