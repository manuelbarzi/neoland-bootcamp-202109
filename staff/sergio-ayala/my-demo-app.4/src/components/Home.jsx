import { useState, useEffect } from 'react'
import {
    updatePassword,
    unregisterUser,
    searchVehicles,
    retrieveVehicle,
    toggleFavVehicle,
    retrieveFavVehicles,
    addVehicleToCart,
    retrieveCartVehicles,
    removeVehicleCart
} from '../logic'
import HeaderHome from './HeaderHome'
import Search from './Search'
import Results from './Results'
import Detail from './Detail'
import ButtonsHome from './ButtonsHome'
import Profile from './Profile'
import Favs from './Favs'
import Cart from './Cart'
// import ChangePassword from './ChangePassword'
// import DeleteAccount from './DeleteAccount'


function Home({ Username, OnSignOut, OnDelete, OnStartFlow, OnEndFlow, OnShowModal }) {

    const [view, setView] = useState('home')
    const [vehicles, setvehicles] = useState([]);
    const [vehicle, setvehicle] = useState(null);
    const [name, setname] = useState(Username);
    const [favs, setfavs] = useState([]);
    const [query, setquery] = useState(null);
    const [cart, setcart] = useState([]);

    const goToHome = () => setView('home')
    const goToResults = () => {
        setView('home')
        setvehicle(null)
    }
    const goToProfile = () => setView('profile')

    const search = query => {
        OnStartFlow()
        setvehicles([])
        setvehicle(null)
        setquery(query)
        try {
            searchVehicles(sessionStorage.token, query, (error, vehicles) => {
                if (error) {
                    OnShowModal(error.message)
                    OnEndFlow()

                } else {
                    setvehicles(vehicles)
                    OnEndFlow()
                }
            })
        } catch ({ message }) {
            OnShowModal(message, 'warn')
            OnEndFlow()
        }
    }

    const ToggleFav = (id) => {
        OnStartFlow()
        try {
            toggleFavVehicle(sessionStorage.token, id, (error => {
                if (error) {
                    OnShowModal(error.message)
                    OnEndFlow()
                    return
                }
                if (vehicle && vehicle.id === id) {
                    setvehicle({ ...vehicle, isFav: !vehicle.isFav })
                }
                if (vehicles.length) {
                    setvehicles(vehicles.map(vehicle => {
                        if (vehicle.id === id) {
                            return { ...vehicle, isFav: !vehicle.isFav }
                        }
                        return vehicle
                    }))
                }
                if (favs.length) {
                    setfavs(favs.filter(vehicle => vehicle.id !== id))
                }
                OnEndFlow()
            }))
        } catch ({ message }) {
            OnShowModal(message, 'warn')
            OnEndFlow()
        }
    }

    const goToFavs = () => {
        OnStartFlow()
        try {
            retrieveFavVehicles(sessionStorage.token, (error, favs) => {
                if (error) {
                    OnShowModal(error.message)
                    OnEndFlow()
                } else {
                    OnEndFlow()
                    setView('favs')
                    setfavs(favs)
                }


            })
        } catch ({ message }) {
            OnShowModal(message, 'warn')
            OnEndFlow()
        }
    }

    const getVehicle = (vehicleId) => {
        OnStartFlow()
        try {
            retrieveVehicle(sessionStorage.token, vehicleId, (error, vehicle) => {
                if (error) {
                    OnShowModal(error.message)
                    OnEndFlow()

                } else {
                    setvehicle(vehicle)
                    goToHome()
                    OnEndFlow()
                }
            })
        } catch ({ message }) {
            OnShowModal(message, 'warn')
            OnEndFlow()
        }
    }

    const addToCArt = (id) => {
        OnStartFlow()
        try {
            addVehicleToCart(sessionStorage.token, id, (error) => {
                if (error) {
                    OnShowModal(error.message)
                    OnEndFlow()
                } else {
                    setcart(cart.map(vehicle => {
                        if (vehicle.id === id) {
                            return { ...vehicle, qty: vehicle.qty + 1 }
                        }
                        return vehicle
                    })) 
                    OnEndFlow()
                }
            })

        } catch ({ message }) {
            OnShowModal(message, 'warn')
            OnEndFlow()
        }
    }

    const removeFromCart = (id) => {
        OnStartFlow()
        try {

            removeVehicleCart(sessionStorage.token, id, (error) => {
                if (error) {
                    OnShowModal(error.message)
                    OnEndFlow()
                } else {
                    setcart(cart.reduce((acum, vehicle) => {
                        if (vehicle.id === id) {
                            if (vehicle.qty < 2) {
                                return acum
                            }
                            vehicle = { ...vehicle, qty: vehicle.qty -1}   
                        }
                        acum.push(vehicle)
                        return acum

                    }, []))
                    OnEndFlow()
                }
            } )
            
        } catch ({ message }) {
            OnShowModal(message)
            OnEndFlow()
        }
    }

    const goToCart = () => {
        OnStartFlow()
        try {
            retrieveCartVehicles(sessionStorage.token, (error, vehicles) => {

                if (error) {
                    OnShowModal(error.message)
                    OnEndFlow()
                } else {
                    setcart(vehicles)
                    setView('cart')
                    OnEndFlow()
                }
            })

        } catch ({ message }) {
            OnShowModal(message)
            OnEndFlow()
        }
    }


    const changePassword = (oldpassword, password) => {
        OnStartFlow()
        try {
            updatePassword(sessionStorage.token, oldpassword, password, (error) => {
                if (error) {
                    OnShowModal(error.message)
                    OnEndFlow()

                } else {
                    setView('profile')
                    OnEndFlow()
                    OnShowModal(`${name}, your password has been updated!`, 'success')
                }
            })
        } catch ({ message }) {
            OnShowModal(message, 'warn')
            OnEndFlow()
        }
    }

    const deleteAccount = (password) => {
        OnStartFlow()
        try {
            unregisterUser(sessionStorage.token, password, (error) => {
                if (error) {
                    OnShowModal(error.message)
                    OnEndFlow()

                } else {
                    OnEndFlow()
                    OnShowModal(`${name}, account deleted`, 'success')
                    OnDelete()
                }
            })
        } catch ({ message }) {
            OnShowModal(message, 'warn')
            OnEndFlow()
        }
    }
    return <div className="pagelayout">

        {view === 'home' && <>
            <HeaderHome name={name}></HeaderHome>
            <Search onSearch={search} query={query} ></Search>

            {!vehicle && <Results items={vehicles} onItem={getVehicle} OnClickFav={ToggleFav} ></Results>}
            {vehicle && <Detail item={vehicle} OnBackList={() => setvehicle(null)} OnClickFav={ToggleFav} OnAddToCart={addToCArt} ></Detail>}

            <ButtonsHome OnViewProfile={goToProfile} OnViewFavs={goToFavs} OnViewCart={goToCart} ></ButtonsHome>
        </>}

        {view === 'profile' && <Profile
            name={name} OnBackHome={goToHome} OnSignOut={OnSignOut} OnUpdate={changePassword} OnDelete={deleteAccount}
        ></Profile>}

        {view === 'favs' && <Favs
            name={name} OnBackHome={goToHome} items={favs} onItem={getVehicle} OnClickFav={ToggleFav}
        ></Favs>}

        {view === 'cart' && <Cart 
        name={name} OnBackHome={goToResults} items={cart} onItem={getVehicle} OnClickFav={ToggleFav} OnAdd={addToCArt} OnRemove={removeFromCart}
        ></Cart>}

    </div>

}

export default Home