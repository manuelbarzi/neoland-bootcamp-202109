import logger from '../../utils/logger'
import './Results.css'
import { useQueryParams } from '../../hooks'
import { useState, useEffect } from 'react'
import { searchVehicles, toggleFavVehicle } from '../../logic'

function Results({ onItem, onFlowStart, onFlowEnd, onModal }) {
    logger.debug('Results -> render')

    const [vehicles, setVehicles] = useState([])

    const queryParams = useQueryParams()

    const query = queryParams.get('q')

    useEffect(() => {
        onFlowStart()
        
        try {
            searchVehicles(sessionStorage.token, query, (error, vehicles) => {
                if (error) { 
                    onFlowEnd()

                    onModal(error.message)

                    return
                }
    
                setVehicles(vehicles)

                onFlowEnd()
            })
        } catch ({ message }) {
            onFlowEnd()

            onModal(message, 'warn')
        }
    }, [query])

    const toggleFav = id => {
        onFlowStart()

        try {
            toggleFavVehicle(sessionStorage.token, id, error => {
                if (error) {
                    onFlowEnd()

                    onModal(error.message)

                    return
                }

                setVehicles(vehicles.map(vehicle => {
                    if (vehicle.id === id) {
                        return { ...vehicle, isFav: !vehicle.isFav}
                    }

                    return vehicle
                }))

                onFlowEnd()
            })
        } catch ({ message }) {
            onFlowEnd()

            onModal(message, 'warn')
        }
    }

    return vehicles.length ?
        <ul className="results container container--vertical">
            {
                vehicles.map(({ id, name, thumbnail, image, price, isFav }) => <li key={id}className="home__results-item" onClick={() => onItem(id)}>
                    <h2>{name}</h2>
                    <span>{price}$</span>
                    <img src={thumbnail || image} alt='' />
                    <button className="button" onClick={event => {
                            event.stopPropagation()

                            toggleFav(id)
                        }}>{isFav ? '🧡' : '🤍'}</button>
                </li>)
            }
        </ul>
        :
        null
}

export default Results