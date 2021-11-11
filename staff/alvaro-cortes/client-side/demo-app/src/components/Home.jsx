import React from 'react';
import { useState, useEffect } from 'react'
import './Home.css'
import logger from '../logger'
import {
    searchVehicles,
    retrieveVehicle,
    toggleFavoriteVehicle,
    retrieveFavVehicles,
    addToCart,
    retrieveCartVehicles,
    removeFromCart
} from '../logic'
import Search from './Search'
import Results from './Results'
import Detail from './Detail'
import Favs from './Favs'
import Cart from './Cart'


function Home({ name, hideSpinner, showModal, showSpinner, onProfile, onSignOut, toCheckout }) {
    logger.info("Home -> constructor")

    const [vehicles, setVehicles] = useState([])
    const [vehicle, setVehicle] = useState(null)
    const [view, setView] = useState("results")
    const [favs, setFavs] = useState([])
    const [cartModal, setCartModal] = useState(false)
    const [cart, setCart] = useState([])
    
    useEffect(() => {
        showSpinner()
        try {
            retrieveFavVehicles(sessionStorage.token, (error, favs) => {
                if (error) {
                    hideSpinner()

                    showModal(error.message)

                    return
                }

                hideSpinner()

                setFavs(favs)

                try {
                    retrieveCartVehicles(sessionStorage.token, (error, vehicles) => {
                        if (error) {
                            hideSpinner()

                            showModal(error.message)

                            return
                        }

                        hideSpinner()

                        setCart(vehicles)
                    })

                } catch ({ message }) {
                    hideSpinner()

                    showModal(message)
                }
            })

        } catch ({ message }) {
            hideSpinner()

            showModal(message)
        }
    }, [vehicles])

    const showCart = () =>
        setCartModal(true)

    const closeCart = () => setCartModal(false)

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

                if (vehicle && vehicle.id === id)
                    setVehicle({ ...vehicle, isFav: !vehicle.isFav })

                if (vehicles.length)
                    setVehicles(vehicles.map(vehicle => {
                        if (vehicle.id === id) {
                            return { ...vehicle, isFav: !vehicle.isFav }
                        }

                        return vehicle
                    }))

                if (favs.length) {
                    setFavs(favs.filter(vehicle => vehicle.id !== id))
                }

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

                setFavs(favs)
                setView("favs")
            })

        } catch ({ message }) {
            hideSpinner()

            showModal(message)
        }
    }

    const addVehicleToCart = id => {

        try {
            addToCart(sessionStorage.token, id, error => {
                if (error) {
                    showSpinner()
                    
                    hideSpinner()

                    showModal(error.message)

                    return
                }
                hideSpinner()

                setCart(cart.map(vehicle => {
                    if (vehicle.id === id)
                        return { ...vehicle, quantity: vehicle.quantity + 1 }

                    return vehicle
                }))
            })

        } catch ({ message }) {
            hideSpinner()

            showModal(message)
        }
    }

    const goToCart = () => {

        showSpinner()

        try {
            retrieveCartVehicles(sessionStorage.token, (error, vehicles) => {
                if (error) {
                    hideSpinner()

                    showModal(error.message)

                    return
                }

                hideSpinner()

                setCart(vehicles)

                showCart()

            })

        } catch ({ message }) {
            hideSpinner()

            showModal(message)
        }
    }

    const onRemoveFromCart = id => {
        showSpinner()

        try {
            removeFromCart(sessionStorage.token, id, error => {
                if (error) {
                    hideSpinner()

                    showModal(error.message)

                    return
                }

                setCart(cart.reduce((accum, vehicle) => {
                    if (vehicle.id === id) {
                        if (vehicle.quantity < 2)
                        return accum

                        vehicle = { ...vehicle, quantity: vehicle.quantity - 1 }
                    }

                    accum.push(vehicle)

                    return accum
                }, []))

                hideSpinner()
            })
        } catch ({ message }) {
            hideSpinner()

            showModal(message)
        }
    }

    return <>
        {!vehicles && <Search 
        onSearch={onSearch} 
        itemsF={favs} 
        itemsC={cart} 
        goToCart={goToCart} 
        />}

        {vehicles && <Search 
        onSearch={onSearch} 
        itemsF={favs} 
        itemsC={cart} 
        goToCart={goToCart} 
        />}

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
            onAddToCart={addVehicleToCart}
        />}


        {view === "favs" && <Favs
            onItem={onItem}
            items={favs}
            backResultList={() =>
                setView("results")}
            onToggleFavorite={toggleFavorite}
        />}

        {cartModal && <Cart
            closeCart={closeCart}
            items={cart}
            addToCart={addVehicleToCart}
            onRemove={onRemoveFromCart}
            toCheckout={toCheckout}
            onItem={onItem}
        />}

    </>

}

export default Home
