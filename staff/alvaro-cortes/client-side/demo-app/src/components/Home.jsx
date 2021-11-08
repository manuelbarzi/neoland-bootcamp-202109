import React, { Component } from 'react';
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

class Home extends Component {
    constructor(props) {
        logger.info("Home -> constructor")

        super(props)

        this.state = { vehicles: [], vehicle: null, favs: [], view: "results" }
    }

    onSearch = query => {
        //En caso de ya tener resultados impresos de la busqueda anterior, se reemplazaran por los de la nueva busqueda 
        const { props: { hideSpinner, showModal, showSpinner } } = this

        this.setState({ vehicle: null })

        showSpinner()

        try {
            searchVehicles(query, (error, vehicles) => {
                if (error) {

                    hideSpinner()

                    showModal("Error", error.message)

                    return
                }

                hideSpinner()

                this.setState({ vehicles, view: "results" })
            })
        } catch ({ message }) {

            showModal("Error", message)

            hideSpinner()

            this.setState({ vehicles: [] })
        }
    }

    onItem = vehicleId => {

        const { props: { showModal, showSpinner, hideSpinner } } = this

        showSpinner()

        try {
            retrieveVehicle(sessionStorage.token, vehicleId, (error, vehicle) => {
                if (error) {
                    hideSpinner()

                    showModal("Error", error.message)
                }
                hideSpinner()

                this.setState({ vehicle })
            })
        } catch ({ message }) {

            showModal("Error", message)

            hideSpinner()
        }
    }

    toggleFavorite = id => {

        const { props: { hideSpinner, showSpinner, showModal } } = this

        showSpinner()

        try {
            toggleFavoriteVehicle(sessionStorage.token, id, error => {
                if (error) {
                    hideSpinner()

                    showModal(error.message)

                    return
                }

                hideSpinner()
            })
        } catch ({ message }) {
            hideSpinner()

            showModal(message)
        }
    }

    goToFavorites = () => {
        const { props: { hideSpinner, showModal, showSpinner } } = this

        showSpinner()

        try {
            retrieveFavVehicles(sessionStorage.token, (error, favs) => {
                if (error) {
                    hideSpinner()

                    showModal(error.message)

                    return
                }

                hideSpinner()

                this.setState({ view: "favs", favs })
            })

        } catch ({ message }) {
            hideSpinner()

            showModal(message)
        }
    }

    render() {

        const {
            state: { vehicles, vehicle, favs },
            props: { name, onProfile, signOut },
            toggleFavorite,
            onItem,
            onSearch,
            goToFavorites
        } = this

        return <>
            {!vehicles && <Search onSearch={onSearch} />}

            {vehicles && <Search onSearch={onSearch} />}

            <div className="welcome container container--vertical">
                <h2> Bienvenido a tu página de inicio <span className="name"> {name} </span></h2>
                <div className="container">
                    <button type="button" className="button button--red" onClick={onProfile}>Perfil</button>
                    <button type="button" className="button button--red" onClick={goToFavorites}>Favoritos</button>
                    <button type="button" className="button button--signout" onClick={signOut}>Cerrar Sesión</button>
                </div>
            </div>

            {this.state.view === "results" && <>
            {!vehicle && <Results 
                items={vehicles} onItem={onItem} />}

            {vehicle && <Detail
                item={vehicle}
                backResultList={() => this.setState({ vehicle: null, view: "results" })}
                onToggleFavorite={toggleFavorite}
            />}

            </>}

            {this.state.view === "favs" && <Favs 
                onItem={onItem}
                items={favs}
                backResultList={() => this.setState({ vehicle: null, view: "results" })} />}
        </>
    }
}

export default Home
