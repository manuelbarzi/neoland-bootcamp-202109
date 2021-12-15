import logger from '../logger'

import './Results.sass'
import { useState, useEffect, useContext } from 'react'
import { searchEmails } from '../logic'
import AppContext from './AppContext'

function Results({ onItem }) {
    logger.debug('Results -> render')

    const { onFlowStart, onFlowEnd, onFeedback } = useContext(AppContext)

    const [emails, setEmails] = useState()

    useEffect(() => {
        logger.debug('Results -> useEffect (componentDidMount)')

        try {
            onFlowStart()
        
            searchVehicles(sessionStorage.token, query, (error, vehicles) => {
                if (error) {
                    onFlowEnd()

                    onFeedback(error.message)

                    return
                }

                onFlowEnd()

                setVehicles(vehicles)
            })
        } catch ({ message }) {
            onFlowEnd()

            onFeedback(message, 'warn')
        }
    }, [query])

    

    return vehicles && vehicles.length ?
        <ul className="results container container--vertical">
            {
                vehicles.map(({ id, name, thumbnail, image, price, isFav }) => <li key={id} className="home__result" onClick={() => onItem(id)}>
                    <div className="container">
                        <h2>{name}</h2>
                        <button className="button" onClick={event => {
                            event.stopPropagation()

                            toggleFav(id)
                        }}>{isFav ? '💜' : '🤍'}</button>
                    </div>
                    <img className="results__image" src={thumbnail || image} />
                    <span>{price} $</span>
                </li>)
            }
        </ul>
        :
        null
}

export default Results