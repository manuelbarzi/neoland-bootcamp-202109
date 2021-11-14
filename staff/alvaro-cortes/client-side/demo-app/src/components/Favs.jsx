import React from 'react';
import './Home.css'
import { useState, useEffect } from 'react';
import { toggleFavoriteVehicle, retrieveFavVehicles } from '../logic';
import logger from '../logger.js'

function Favs({ onGoBack, onItem, showSpinner, hideSpinner, showModal }) {
    logger.info('Favs -> render')

    const [vehicles, setVehicles] = useState()

    useEffect(() => {
        showSpinner()

        try {
            retrieveFavVehicles(sessionStorage.token, (error, vehicles) => {
                if (error) {
                    hideSpinner()

                    showModal(error.message)

                    return
                }

                hideSpinner()

                setVehicles(vehicles)
            })

        } catch ({ message }) {
            hideSpinner()

            showModal(message)
        }
    }, [])

    const toggleFavorite = id => {

        showSpinner()

        try {
            toggleFavoriteVehicle(sessionStorage.token, id, error => {
                if (error) {
                    hideSpinner()

                    showModal(error.message)

                    return
                }
                setVehicles(vehicles.filter(vehicle => vehicle.id !== id))

                hideSpinner()
            })
        } catch ({ message }) {
            hideSpinner()

            showModal(message)
        }
    }

    return <div className="welcome__details container container--vertical">
        <button className="button" onClick={onGoBack}> Volver atrás</button>

        {vehicles && vehicles.length ?
        <div className="welcome__results container container--vertical">
            <ul className="welcome__results--ul">
                {
                    vehicles.map(({ id, name, thumbnail, image, price, isFav }) => <li key={id} onClick={() => { onItem(id) }}>
                        <div>
                            <h2>{name}</h2>
                            <span onClick={event => {
                                event.stopPropagation()

                                toggleFavorite(id)
                            }}>{isFav ? '❤️' : '🤍'}</span>
                        </div>
                        <img src={thumbnail || image} width="300px" />
                        <span>{price}</span>
                    </li>)
                }
            </ul>
        </div>
        :
        null}
    </div>
}

export default Favs