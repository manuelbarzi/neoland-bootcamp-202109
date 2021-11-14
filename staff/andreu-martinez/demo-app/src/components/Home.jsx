import { useState } from 'react'
import Header from './Header'
import {
    updateUserPassword,
    unregisterUser,
    searchVehicles,
    toggleFavVehicle,
    retrieveFavVehicles,
    retrieveCartVehicles,
    removeVehicleFromCart,
    addVehicleToCart,
    retrieveVehicle
} from '../logic'
import "./style.css"
import Profile from './Profile'
import Detail from './Detail'
import Search from './Search'
import Favs from './Favs'
import Results from './Results'
import Cart from './Cart'

import Footer from './Footer'


function Home({ name, onSignOut, hideSpinner, showSpinner, onFeedback }) {

    const [vehicles, setVehicles] = useState([])
    const [vehicle, setVehicle] = useState(null)
    const [view, setView] = useState('search')
    const [favs, setFavs] = useState([])
    const [cart, setCart] = useState([])
    const [query, setQuery] = useState(null)

    const goToProfile = () => setView('profile')
    const goToHome = () => setView('search')
    const clearVehicle = () => setVehicle(null)
    const goToSearch = () => setView('search')

    const search = query => {

        setVehicle(null)
        setVehicles([])
        setQuery(query)

        try {
            searchVehicles(sessionStorage.token, query, (error, vehicles) => {
                if (error) {
                    onFeedback(error.message)
                    return
                }

                setVehicles(vehicles)
                hideSpinner()
            })

        } catch ({ message }) {
            hideSpinner()
            onFeedback(message)
        }
    }

    const goToCart = () => {
        showSpinner()
        try {
            retrieveCartVehicles(sessionStorage.token, (error, vehicles) => {
                if (error) {
                    hideSpinner()
                    onFeedback(error)
                    return
                }
                setCart(vehicles)
                setView('cart')
                hideSpinner()
            })
        } catch ({ message }) {
            hideSpinner()
            onFeedback(message)
        }
    }

    const addToCart = id => {
        showSpinner()

        try {
            addVehicleToCart(sessionStorage.token, id, error => {
                if (error) {
                    showSpinner()
                    onFeedback(error.message)
                    return
                }

                setCart(cart.map(vehicle => {
                    if (vehicle.id === id)
                        return { ...vehicle, qty: vehicle.qty + 1 }

                    return vehicle

                }))
                hideSpinner()
            })
        } catch ({ message }) {
            hideSpinner()
            onFeedback(message, 'warn')
        }
    }

    const removeFromCart = id => {
        showSpinner()

        try {
            removeVehicleFromCart(sessionStorage.token, id, error => {
                if (error) {
                    hideSpinner()
                    onFeedback(error.message)
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

                hideSpinner()
            })
        } catch ({ message }) {
            hideSpinner()
            onFeedback(message, 'warn')
        }
    }

    const goToFavs = () => {

        try {
            retrieveFavVehicles(sessionStorage.token, (error, favs) => {
                if (error) {
                    onFeedback(error)
                    return
                }

                setFavs(favs)
                setView('favs')
            })
        } catch ({ message }) {
            onFeedback(message)
        }
    }

    const goToItem = vehicleId => {
        showSpinner()
        try {
            retrieveVehicle(sessionStorage.token, vehicleId, (error, vehicle) => {
                if (error) {
                    onFeedback(error.message)
                    return
                }
                setVehicle(vehicle)
                setView('search')
            })
        } catch ({ message }) {
            onFeedback(message)
        }
    }


    const toggleFav = id => {
        showSpinner()
        try {
            toggleFavVehicle(sessionStorage.token, id, error => {
                if (error) {
                    alert(error.message)
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

            })
        } catch ({ message }) {
            alert(message)
        }
    }

    const updatePassword = (oldPassword, password) => {
        showSpinner()
        try {
            updateUserPassword(sessionStorage.token, oldPassword, password, error => {
                if (error) {

                    onFeedback(error.message)
                    hideSpinner()
                    return
                }

                onFeedback('success', 'Contraseña cambiada correctamente.')
                hideSpinner()
            })
        } catch ({ message }) {

            hideSpinner()
            onFeedback(message, 'warn')
        }
    }

    const unregister = password => {
        showSpinner()
        try {
            unregisterUser(sessionStorage.token, password, error => {
                if (error) {
                    onFeedback(error.message)
                    hideSpinner()
                    return
                }
                onFeedback('success', 'Usuario eliminado correctamente.')
                hideSpinner()
                onSignOut()
            })
        } catch ({ message }) {
            hideSpinner()
            onFeedback(message, 'warn')
        }
    }

    return <>
        <div className="layout">
            <Header goToProfile={goToProfile} goToFavs={goToFavs} goToCart={goToCart} onSignOut={onSignOut} name={name}>

            </Header>
            {
                view === 'profile' &&
                <Profile
                    onBack={goToHome}
                    onPasswordUpdate={updatePassword}
                    onUnregister={unregister}
                    showSpinner={showSpinner}
                    hideSpinner={hideSpinner}
                    onFeedback={onFeedback}>
                </Profile>
            }
            <div className="center">
                {
                    view === 'search' && <>

                        <Search onSearch={search} query={query}></Search>

                        {!vehicle && <Results items={vehicles} onItem={goToItem} onToggleFav={toggleFav} ></Results>}

                        {vehicle && <Detail item={vehicle} onBack={clearVehicle} onToggleFav={toggleFav} onBuyItem={addToCart} > </Detail>}

                    </>
                }
                {view === 'favs' && <Favs items={favs} onBack={goToSearch} onItem={goToItem} onToggleFav={toggleFav} />}

                {view === 'cart' && <Cart items={cart} onItem={goToItem} onBack={goToSearch} onRemove={removeFromCart} onAdd={addToCart} />}
            </div>
            <Footer>

            </Footer>
        </div>
    </>
}

export default Home