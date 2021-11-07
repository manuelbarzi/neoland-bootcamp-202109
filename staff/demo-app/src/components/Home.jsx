import { Component } from "react"
import Search from "./Search"
import Results from './Results'
import ResultDetails from './ResultDetails'

// Logic Bussines
import { searchVehicles, retrieveVehicle } from '../logic'


class Home extends Component {
    constructor() {
        super()

        this.state = { view: null, vehicles: [], detail: [] }
    }

    search = query => {
        searchVehicles(query, (error, vehicles) => {
            if (error) {
                return alert(error.message)
            }

            this.setState({ view: 'results', vehicles })

        })
    }

    showDetails = (id) => {
        retrieveVehicle(id, (error, detail) => {
            if (error) return alert(error.message)

            { this.setState({ view: 'details', detail }) }
        })
    }

    render() {
        const { state: { view, vehicles, detail },
            props: { myUserName, onProfile, onSignOut },
            search, showDetails } = this
        return <>
            <div className="home container container--gapped container--vertical">
                <div className="container">
                    <p>Hello, <span className="name">{myUserName}</span>!</p>
                    <button type="button" className="button button-medium button--dark" onClick={() => onProfile()}>Profile</button>
                    <button className="button button-medium button" onClick={() => onSignOut()}>Sign out</button>
                </div>

                <Search onSubmitSearch={search} />

                {view === 'results' && <Results vehicles={vehicles} onVehicle={showDetails} />}

                {this.state.view === 'details' && <ResultDetails detail={detail} onBack={() => this.setState({ view: 'results' })} />}
            </div>
        </>
    }
}

export default Home