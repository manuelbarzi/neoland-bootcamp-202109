import React from 'react';
import { useState } from 'react'
import './Home.css'
import logger from '../logger'
import {
    searchVehicles,
    retrieveVehicle,
    toggleFavoriteVehicle,
    retrieveFavVehicles
} from '../logic'
import Search from './Search'
import Results from './Results'
import Detail from './Detail'
import Favs from './Favs'

function Home({ name, hideSpinner, showModal, showSpinner, onProfile, onSignOut }) {
    logger.info("Home -> constructor")

    const [vehicles, setVehicles] = useState([])
    const [vehicle, setVehicle] = useState(null)
    const [view, setView] = useState("results")
    const [favs, setFavs] = useState([])

    const onSearch = query => {
        //En caso de ya tener resultados impresos de la busqueda anterior, se reemplazaran por los de la nueva busqueda 

        setVehicle(null)
        setVehicles([])

        showSpinner()

        try {
            searchVehicles(sessionStorage.token, query, (error, vehicles) => {
                if (error) {

                    hideSpinner()

                    showModal("Error", error.message)

                    return
                }

                hideSpinner()

                setVehicles(vehicles)

                setView("results")
            })
        } catch ({ message }) {

            showModal("Error", message)

            hideSpinner()

            setVehicles([])
        }
    }

    const onItem = vehicleId => {

        showSpinner()

        try {
            retrieveVehicle(sessionStorage.token, vehicleId, (error, vehicle) => {
                if (error) {
                    hideSpinner()

                    showModal("Error", error.message)

                    return
                }
                setVehicle(vehicle)
                setView("detail")

                hideSpinner()
            })
        } catch ({ message }) {

            showModal("Error", message)

            hideSpinner()
        }
    }

    const toggleFavorite = id => {

        showSpinner()

        try {
            toggleFavoriteVehicle(sessionStorage.token, id, error => {
                if (error) {
                    hideSpinner()

                    showModal(error.message)

                    return
                }

                if (vehicle)
                    setVehicle({ ...vehicle, isFav: !vehicle.isFav })

                if (vehicles.length)
                    setVehicles(vehicles.map(vehicle => {
                        if (vehicle.id === id) {
                            return { ...vehicle, isFav: !vehicle.isFav }
                        }

                        return vehicle
                    }))

                if (favs.length)
                    setFavs(favs.filter(vehicle => vehicle.id !== id))

                hideSpinner()
            })
        } catch ({ message }) {
            hideSpinner()

            showModal(message)
        }
    }

    const goToFavorites = () => {

        showSpinner()

        try {
            retrieveFavVehicles(sessionStorage.token, (error, favs) => {
                if (error) {
                    hideSpinner()

                    showModal(error.message)

                    return
                }

                hideSpinner()

                setView("favs")
                setFavs(favs)
            })

        } catch ({ message }) {
            hideSpinner()

            showModal(message)
        }
    }

    return <>
        {!vehicles && <Search onSearch={onSearch} />}

        {vehicles && <Search onSearch={onSearch} />}

        <div className="welcome container container--vertical">
            <h2> Bienvenido a tu página de inicio <span className="name"> {name} </span></h2>
            <div className="container container--vertical">
                <button type="button" className="button button--red" onClick={onProfile}>Perfil</button>
                <button type="button" className="button button--red" onClick={goToFavorites}>Favoritos</button>
                <button type="button" className="button button--signout" onClick={onSignOut}>Cerrar Sesión</button>
            </div>
        </div>

        {view === "results" && <Results
                items={vehicles}
                onItem={onItem}
                onToggleFavorite={toggleFavorite}
        />}

        {view === "detail" && <Detail
                item={vehicle}
                backResultList={() =>
                    setView("results")}
                onToggleFavorite={toggleFavorite}
        />}


        {view === "favs" && <Favs
            onItem={onItem}
            items={favs}
            backResultList={() =>
                setView("results")}
            onToggleFavorite={toggleFavorite}
        />}
    </>

}

export default Home
