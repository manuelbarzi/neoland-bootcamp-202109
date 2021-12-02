import { useState, useEffect } from 'react'
import {
    updatePassword,
    unregisterUser,
    searchVehicles,
    retrieveVehicle,
    toggleFavVehicle,
    retrieveFavVehicles
} from '../logic'
import HeaderHome from './HeaderHome'
import Search from './Search'
import Results from './Results'
import Detail from './Detail'
import ButtonsHome from './ButtonsHome'
import Profile from './Profile'
import Favs from './Favs'
// import ChangePassword from './ChangePassword'
// import DeleteAccount from './DeleteAccount'


function Home({ Username, OnSignOut, OnDelete, OnStartFlow, OnEndFlow, OnShowModal }) {

    const [view, setView] = useState('home')
    const [vehicles, setvehicles] = useState([]);
    const [vehicle, setvehicle] = useState(null);
    const [name, setname] = useState(Username);
    const [favs, setfavs] = useState([]);
    const [query, setquery] = useState(null);

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
                }
                if (vehicle) {
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
                    OnEndFlow()
                }
            })
        } catch ({ message }) {
            OnShowModal(message, 'warn')
            OnEndFlow()
        }
    }

    const goToHome = () => setView('home')
    const goToProfile = () => setView('profile')
    // const goToChangePassword = () => setView('changePassword')
    // const goToDeleteAccount = () => setView('deleteAccount')

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

            {vehicle && <Detail item={vehicle} OnBackList={() => setvehicle(null)} OnClickFav={ToggleFav} ></Detail>}

            <ButtonsHome OnViewProfile={goToProfile} OnViewFavs={goToFavs} ></ButtonsHome>
        </>}

        {view === 'profile' && <Profile
            name={name}
            OnBackHome={goToHome}
            OnSignOut={OnSignOut}
            OnUpdate={changePassword}
            OnDelete={deleteAccount}
        ></Profile>}

        {view === 'favs' && <Favs
            name={name}
            OnBackHome={goToHome}
            items={favs}
            onItem={getVehicle}
            OnClickFav={ToggleFav}
        ></Favs>}

    </div>

}

export default Home