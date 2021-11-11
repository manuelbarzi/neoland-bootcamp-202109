import { useState } from 'react'
import HeaderUser from './HeaderUser'
import Search from "./Search"
import Results from './Results'
import ResultDetails from './ResultDetails'
import Profile from './Profile'
import ChangePassword from './ChangePassword'
import UnRegister from "./UnRegister";

// Logger
import logger from '../utils/logger'

// Logic Bussines
import {
    searchVehicles,
    retrieveVehicle,
    updateUserPassword,
    unregisterUser,
    toggleFavVehicle
} from '../logic'

// Styles
import './Home.css'

function Home({ myUserName, goToLanding, showSpinner, hideSpinner, showFeedback }) {
    logger.debug('Home -> render')

    const [view, setView] = useState('search')
    const [vehicles, setVehicles] = useState([])
    const [detail, setDetail] = useState([])
    const [fav, setFav] = useState('🤍')

    // Go to ...
    const goToProfile = () => setView('profile')
    const goToSearch = () => setView('search')
    const goToUnregister = () => setView('unregister')
    const goToResults = () => setView('results')
    const signOut = () => { delete sessionStorage.token; goToLanding() }
    const goToChangePassword = () => setView('changepassword')


    const search = query => {
        showSpinner()
        try {
            searchVehicles(query, (error, vehicles) => {
                if (error) {
                    hideSpinner()
                    showFeedback(error.message)
                    return
                }
                if (!vehicles.length) {
                    showFeedback('No matches found')
                    hideSpinner()
                    return
                }
                hideSpinner()
                setVehicles(vehicles)
                setView('results', 'search')
            })
        } catch ({ message }) {
            hideSpinner()
            showFeedback(message, 'warn')
        }
    }

    const showDetails = (id) => {
        showSpinner()
        try {
            retrieveVehicle(id, (error, detail) => {
                if (error) {
                    hideSpinner()
                    showFeedback(error.message)
                    return
                }
                hideSpinner()
                setDetail(detail)
                setView('details')
            })
        } catch (error) {
            hideSpinner()
            showFeedback(error.message)
        }

    }

    const unRegister = (password) => {
        showSpinner()
        try {
            unregisterUser(sessionStorage.token, password, error => {
                if (error) {
                    hideSpinner()
                    showFeedback(error.message)
                    return
                }
                hideSpinner()
                showFeedback('usuario eliminado')
                delete sessionStorage.token
                setView('landing')
            })
        } catch (error) {
            hideSpinner()
            showFeedback(error.message)
        }
    }

    const updatePassword = (oldPassword, password) => {
        showSpinner()
        try {
            updateUserPassword(sessionStorage.token, oldPassword, password, error => {
                if (error) {
                    hideSpinner()
                    showFeedback(error.message)
                    return
                }
                hideSpinner()
                showFeedback('Password Changed')
            })
        } catch (error) {
            hideSpinner()
            showFeedback(error.message)
            return
        }
    }

    const toggleFav = (id) => {
        toggleFavVehicle(sessionStorage.token, id, error => {
            if (error) {
                showFeedback(error.message)
                return
            }
            setFav('❤')
        })
    }

    return <>
        <HeaderUser myUserName={myUserName} onProfile={goToProfile} onLogOut={signOut} />

        {(view === 'search' || view === 'results') && <Search onSubmitSearch={search} />}

        {view === 'results' && <Results vehicles={vehicles} onVehicle={showDetails} onFav={toggleFav} />}

        {view === 'details' && <ResultDetails detail={detail} onBack={goToResults} />}

        {view === 'profile' && <Profile onUpdatePassword={goToChangePassword} onDeleteAccount={goToUnregister} onGoBack={goToSearch} />}

        {view === 'changepassword' && <ChangePassword onSubmitUpdate={updatePassword} onGoBack={goToSearch} />}

        {view === 'unregister' && <UnRegister onSubmitUnRegister={unRegister} onGoBack={goToSearch} />}
    </>
}

export default Home