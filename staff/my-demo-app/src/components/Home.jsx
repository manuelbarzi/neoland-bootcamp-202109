import { Component } from "react"
import Results from './Results'
import Search from "./Search"

// Logic Bussines
import { searchVehicles } from '../logic'


class Home extends Component {
    constructor() {
        super()

        this.state = { view: null }
    }

    search = query => {
        searchVehicles(query, (error, _vehicles) => {
            if (error) {
                alert(error.message)
                return
            }
            let vehicle = _vehicles
            this.setState({ view: 'results' })

        })
    }

    render() {
        const { props: { myUserName, onProfile, onSignOut }, search } = this
        return <>

            <div className="home container container--gapped container--vertical">
                <div className="container">
                    <p>Hello, <span className="name">{myUserName}</span>!</p>
                    <button type="button" className="button button-medium button--dark" onClick={() => onProfile()}>Profile</button>
                    <button className="button button-medium button" onClick={() => onSignOut()}>Sign out</button>
                </div>

                <Search onSubmitSearch={search} />

                {this.state.view === 'vehicles' && <Results />}

                {/* {this.state.view === 'result-details' && <ResultDetails />} */}

            </div>

        </>
    }
}
export default Home