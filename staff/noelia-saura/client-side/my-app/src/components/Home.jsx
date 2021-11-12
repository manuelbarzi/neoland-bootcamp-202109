//este Home es funcional y con hooks
import { useState } from "react"
import {
    retrieveVehicle,
    updateUserPassword,
    searchVehicles,
    toggleFavVehicle,
    retrieveFavVehicles,
    unregisterUser,
    addVehicleToCart,
    retrieveVehiclesCart,
    removeVehicleFromCart
} from "../logic/logic"
import logger from '../logger'
import Profile from "./Profile"
import Search from "./Search"
import Details from "./Details"
import Results from "./Results"
import Favs from "./Favs"
import Cart from './Cart'

function Home({ name, onSignOut, startSpinner, endSpinner, onModal }) {
    logger.debug('Home -> render')

    const [vehicles, setVehicles] = useState([])
    const [vehicle, setVehicle] = useState(null)
    const [view, setView] = useState('search')
    const [favs, setFavs] = useState([])
    const [query, setQuery] = useState(null)
    const [cart, setCart] = useState([])

    const search = query => {
        startSpinner()
        setVehicle(null)
        setVehicles([])
        setQuery(query)

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
    }


    const goToItem = vehicleId => {
        startSpinner()
        try {
            retrieveVehicle(sessionStorage.token, vehicleId, (error, vehicle) => {

                if (error) {
                    endSpinner()
                    onModal(error.message)
                    return
                }
                setVehicle(vehicle)
                endSpinner()

            })
        } catch ({ message }) {
            onModal(message, 'warn')
            endSpinner()
        }
    }

    const clearVehicle = () => setVehicle(null)

    const goToProfile = () => setView('profile')

    const goToSearch = () => {
        setView('search')
        // setVehicles([])
    }

    const updatePassword = (oldPassword, password) => {
        startSpinner()
        try {
            updateUserPassword(sessionStorage.token, oldPassword, password, error => {
                if (error) {
                    onModal(error.message)
                    endSpinner()
                    return
                }
                endSpinner()
                onModal('password is updated','success')
                // setView('search')
            })
        } catch ({ message }) {
            onModal(message, 'warn')
            endSpinner()
        }
    }
    const unregister = password => {
        startSpinner()
        try {
            unregisterUser(sessionStorage.token, password, error => {
                if (error) {
                    endSpinner()

                    onModal(error.message)

                    return
                }
                endSpinner()
                onModal('User unregistered', 'success')

                onSignOut()
            })
        } catch ({ message }) {
            endSpinner()

            onModal(message, 'warn')
        }
    }
    const toggleFav = id => {
        startSpinner()

        try {
            toggleFavVehicle(sessionStorage.token, id, error => {
                if (error) {
                    onModal(error.message)
                    endSpinner()
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

                if (favs.length)
                    setFavs(favs.filter(vehicle => vehicle.id !== id))
                endSpinner()


            })
        } catch ({ message }) {
            onModal(message, 'warn')
            endSpinner()


        }
    }
    const goToFavs = () => {
        startSpinner()
        try {
            retrieveFavVehicles(sessionStorage.token, (error, favs) => {
                if (error) {

                    endSpinner()
                    onModal(error.message)

                    return
                }
                endSpinner()
                setFavs(favs)
                setView('favs')
            })
        } catch ({ message }) {
            endSpinner()
            onModal(message, 'warn')

        }
    }
    const addToCart = id => {
        startSpinner()
        try {
            addVehicleToCart(sessionStorage.token, id, error => {
                if (error) {
                    endSpinner()
                    onModal(error.message)
                    return
                }
                setCart(cart.map(vehicle => {
                    if (vehicle.id === id)
                        return { ...vehicle, qty: vehicle.qty + 1 }
                    return vehicle
                }))
                endSpinner()
            })
        } catch ({ message }) {
            endSpinner()
            onModal(message, 'warn')
        }
    }
    const goToCart = () => {
        startSpinner()
        
        try {
            retrieveVehiclesCart(sessionStorage.token, (error, vehicles) => {
                
                if (error) {
                    endSpinner()
                    onModal(error.message)
                    return
                }
                setCart(vehicles)
                setView('cart')
                endSpinner()
            })
        } catch ({ message }) {
            endSpinner()
            onModal(message, 'warn')
        }
    }
    const removeFromCart = id => {
        startSpinner()
        try {
            removeVehicleFromCart(sessionStorage.token, id, error => {
                if (error) {
                    endSpinner()
                    onModal(error.message)
                    return
                }
                setCart(cart.reduce((accum, vehicle) => {
                    if (vehicle.id === id) {
                        if (vehicle.qty < 2)
                            return accum
                        vehicle = { ...vehicle, qty: vehicle.qty - 1 }
                    }
                    accum.push(vehicle)

                    return accum
                }, []))
                endSpinner()
            })
        } catch ({ message }) {
            endSpinner()
            onModal(message, 'warn')
        }
    }
    return <div className="home container container--gapped container--vertical "  >
        <div className="container">
            <p>Hello, <span className="name">{name}</span>!</p>
            <button className="button button-medium button--dark" onClick={goToProfile} >Profile</button>
            <button className="button button-medium button--dark" onClick={goToFavs}>Favs</button>
            <button className={`button button-medium ${view === 'cart' && 'button--dark'}`} onClick={goToCart}>Cart</button>
            <button className="button button-medium button" onClick={onSignOut}>Sign out</button>
        </div>

        {view === 'search' && <>
            <Search onSearch={search} query={query} />
            {!vehicle && <Results items={vehicles} onItem={goToItem} onToggleFav={toggleFav} />}
            {vehicle && <Details item={vehicle} onBack={clearVehicle} onToggleFav={toggleFav} onAddToCart={addToCart} />}
        </>}
        {view === 'profile' && <Profile onBack={goToSearch} onPasswordUpdate={updatePassword} onUnregister={unregister} />}

        {view === 'favs' && <Favs items={favs} onBack={goToSearch} onItem={goToItem} onToggleFav={toggleFav} />}
        {view === 'cart' && <Cart items={cart} onBack={goToSearch} onItem={goToItem} onAdd={addToCart} onRemove={removeFromCart} />}

    </div>
}


export default Home