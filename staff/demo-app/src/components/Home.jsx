import { useState } from 'react'
import Search from "./Search"
import Results from './Results'
import ResultDetails from './ResultDetails'

// Logic Bussines
import { searchVehicles, retrieveVehicle } from '../logic'

// Styles
import './Home.css'


function Home({ myUserName, onProfile, onSignOut }) {
    const [view, setView] = useState(null)
    const [vehicles, setVehicles] = useState([])
    const [detail, setDetail] = useState([])

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

    return <>
        <div className="home">
            <p className="home__title">Hello, <span className="home__user">{myUserName}</span>!</p>
            <button type="button" className="btn btn--white home__btn" onClick={() => onProfile()}>Profile</button>
            <button className="btn btn--white hom__btn" onClick={() => onSignOut()}>Log Out</button>
        </div>

        <Search onSubmitSearch={search} />

        {view === 'results' && <Results vehicles={vehicles} onVehicle={showDetails} />}

        {view === 'details' && <ResultDetails detail={detail} onBack={() => setView('results')} />}
    </>
}

export default Home