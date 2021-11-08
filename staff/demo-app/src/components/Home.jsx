import { useState } from 'react'
import Search from "./Search"
import Results from './Results'
import ResultDetails from './ResultDetails'

// Logic Bussines
import { searchVehicles, retrieveVehicle } from '../logic'


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
        <div className="home container container--gapped container--vertical">
            <div className="container">
                <p>Hello, <span className="name">{myUserName}</span>!</p>
                <button type="button" className="button button-medium button--dark" onClick={() => onProfile()}>Profile</button>
                <button className="button button-medium button" onClick={() => onSignOut()}>Sign out</button>
            </div>

            <Search onSubmitSearch={search} />

            {view === 'results' && <Results vehicles={vehicles} onVehicle={showDetails} />}

            {view === 'details' && <ResultDetails detail={detail} onBack={() => setView('results')} />}
        </div>
    </>
}

export default Home