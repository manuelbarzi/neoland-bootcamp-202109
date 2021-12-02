import { useState, useEffect } from 'react'
import {
    updatePassword,
    unregisterUser,
    searchVehicles,
    retrieveVehicle
} from '../logic'
import HeaderHome from './HeaderHome'
import Search from './Search'
import Results from './Results'
import Detail from './Detail'
import ButtonsHome from './ButtonsHome'
import Profile from './Profile'
import ChangePassword from './ChangePassword'
import DeleteAccount from './DeleteAccount'


function Home({ Username, OnSignOut, OnDelete, OnStartFlow, OnEndFlow, OnShowModal }) {

    const [view, setView] = useState('home')
    const [vehicles, setvehicles] = useState([]);
    const [vehicle, setvehicle] = useState(null);
    const [name, setname] = useState(Username);

    const search = query => {
        OnStartFlow()
        setvehicles([])
        setvehicle(null)
        try {
            searchVehicles(query, (error, vehicles) => {
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

    const getVehicleId = vehicleId => {
        OnStartFlow()
        try {
            retrieveVehicle(vehicleId, (error, vehicle) => {
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
    const goToChangePassword = () => setView('changePassword')
    const goToDeleteAccount = () => setView('deleteAccount')

    const changePassword = (oldpassword, password) => {
        OnStartFlow()
        try {
            updatePassword(sessionStorage.token, oldpassword, password, (error) => {
                if (error) {
                    OnShowModal(error.message)
                    OnEndFlow()

                } else {
                    setView('home')
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
        } catch ({message}) {
            OnShowModal(message, 'warn')
            OnEndFlow()
        }
    }
    return <div className="pagelayout">

        {view === 'home' && <>
            <HeaderHome name={name}></HeaderHome>
            <Search onSearch={search}></Search>

            {!vehicle && <Results
                items={vehicles}
                onItem={getVehicleId}
            ></Results>}

            {vehicle && <Detail
                item={vehicle}
                OnBackList={setvehicle(null)}
            ></Detail>}

            <ButtonsHome
                OnViewProfile={goToProfile}
                OnSignOut={OnSignOut}
            ></ButtonsHome>
        </>}

        {view === 'profile' && <Profile
            name={name}
            OnBackHome={goToHome}
            OnSignOut={OnSignOut}
            OnChangePassword={goToChangePassword}
            OnDeleteAccount={goToDeleteAccount}
            OnUpdate={changePassword}
            OnDelete={deleteAccount}
            ></Profile>}

        {/* {view === 'changePassword' && <ChangePassword
            name={name}
            OnBackProfile={goToProfile}
        ></ChangePassword>}

        {view === 'deleteAccount' && <DeleteAccount
            name={name}
            OnBackProfile={goToProfile}
        ></DeleteAccount>} */}

    </div>

}

export default Home