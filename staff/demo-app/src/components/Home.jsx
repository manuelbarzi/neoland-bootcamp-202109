import { useState } from 'react'
import HeaderUser from './HeaderUser'
import Search from "./Search"
import Results from './Results'
import ResultDetails from './ResultDetails'
import Profile from './Profile'
import UnRegister from "./UnRegister";

// Logic Bussines
import {
    searchVehicles,
    retrieveVehicle,
    updateUserPassword,
    unregisterUser
} from '../logic'

// Styles
import './Home.css'

function Home({ }) {
    const [view, setView] = useState(null)
    const [vehicles, setVehicles] = useState([])
    const [detail, setDetail] = useState([])

    // Go to ...
    const goToProfile = () => setView('profile')
    const goToUnregister = () => setView('unregister')
    const goToResults = () => setView('results')
    const goToLanding = () => setView('landing')


    const search = query => {
        searchVehicles(query, (error, vehicles) => {
            if (error) {
                return alert(error.message)
            }
            setView('results')
            setVehicles(vehicles)

        })
    }

    const showDetails = (id) => {
        retrieveVehicle(id, (error, detail) => {
            if (error) return alert(error.message)

            setView('details')
            setDetail(detail)
        })
    }

    const unRegister = (password) => {
        try {
            unregisterUser(sessionStorage.token, password, error => {
                if (error) {
                    alert(error.message)
                    return
                }
                alert('usuario borrado')
                delete sessionStorage.token
                setView('landing')
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const updatePassword = (oldPassword, password) => {
        try {
            updateUserPassword(sessionStorage.token, oldPassword, password, error => {
                if (error) {
                    alert(error.message)
                    return
                }
                alert('todo ok')
            })
        } catch (error) {
            alert(error.message)
            return
        }
    }

    return <>
        <HeaderUser onProfile={goToProfile} onLogOut={goToLanding} />

        <Search onSubmitSearch={search} />

        {view === 'results' && <Results vehicles={vehicles} onVehicle={showDetails} />}

        {view === 'details' && <ResultDetails detail={detail} onBack={() => setView('results')} />}

        {view === 'profile' && <Profile onUpdatePassword={goToUnregister} onDeleteAccount={goToUnregister} onGoBack={goToResults} />}

        {view === 'unregister' && <UnRegister onSubmitUnRegister={unRegister} onGoBack={goToProfile} />}
    </>
}

export default Home