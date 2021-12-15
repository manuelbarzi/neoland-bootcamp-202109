import React from 'react';
import './Home.css'
import logger from '../logger'
import { useQuery } from '../hooks'
import { useState, useEffect } from 'react'
import { searchVehicles } from '../logic'

function Results({ onItem, onToggleFavorite, showSpinner, hideSpinner, showModal }) {
    logger.info("Results -> render")

    const [vehicles, setVehicles] = useState({})

    const _query = useQuery()

    const query = _query.getParam('q')

    useEffect(() => {
    showSpinner()
        try {
            searchVehicles(sessionStorage.token, query, (error, vehicles) => {
                if (error) {

                    hideSpinner()

                    showModal("Error", error.message)

                    return
                }

                setVehicles(vehicles)

                hideSpinner()
            })
        } catch ({ message }) {
            hideSpinner()

            showModal("Error", message)
        }
    }, [query])
    
    return vehicles && vehicles.length ?
        <div className="welcome__results container container--vertical">
            <ul className="welcome__results--ul">
                {
                    vehicles.map(({ id, name, thumbnail, image, price, isFav }) => <li key={id} onClick={() => {onItem(id)}}>
                        <div>
                            <h2>{name}</h2>
                            <span onClick={event => {
                                event.stopPropagation()

                                onToggleFavorite(id)
                            }}>{isFav ? '❤️' : '🤍'}</span>
                        </div>
                        <img src={thumbnail || image} />
                        <span>{price}</span>
                    </li>)
                }
            </ul>
        </div>
        :
        null
}

export default Results