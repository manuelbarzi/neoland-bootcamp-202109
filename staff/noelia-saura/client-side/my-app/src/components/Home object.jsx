import React from "react"
import { retrieveVehicle, updateUserPassword, searchVehicles } from "../logic"
import Profile from "./Profile"
import Search from "./Search"
import Details from "./Details"
import Results from "./Results"
import Favs from "./Favs"
class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            view: 'home',
            vehicle: null,
            vehicles: [],
            fav: [],
            
        }
    }

    componentDidMount() {
        if (sessionStorage.fav) {
            this.setState({fav: JSON.parse(sessionStorage.fav)}) //parse: transforma de nuevo el string en array
        }
    }

    goToProfile = () => { this.setState({ view: 'profile' }) }
    goBack = () => { this.setState({ view: 'home' }) }
    updatePassword = (oldPassword, password) => {

        updateUserPassword(sessionStorage.token, oldPassword, password, error => {
            if (error) {
                alert(error.message)
                return error
            }
            alert('password is updated')
            this.setState({ view: 'home' })
        }
        )
    }

    onSearch = query => {
        this.setState({ vehicle: null, vehicles: [] })
        try {
            searchVehicles(query, (error, vehicles) => {
                if (error) {
                    alert(error.message)
                    return
                }
                this.setState({ vehicles, view: 'search' })
            })
        } catch (error) {
            alert(error.message)
        }
    }

    goToItem = vehicleId => {
        try {
            retrieveVehicle(vehicleId, (error, vehicle) => {

                if (error) {
                    alert(error.message)
                    return
                }
                this.setState({ vehicle: vehicle })
            })
        } catch (error) {
            alert(error.message)
        }
    }

    addFavVehicle = (vehicle) => {
        let arrayFavs = this.state.fav
        arrayFavs.push(vehicle)
        this.setState({ fav: arrayFavs });

        sessionStorage.fav = JSON.stringify(arrayFavs)//stringify : covierte el array en forma de string
    }

    clearVehicle = () => this.setState({ vehicle: null })
    goToSearch = () => { this.setState({ view: 'search' }) }
    goToLanding = () => { this.props.goToLanding() }
    
    render() {


        return <>

            <div className="home container container--gapped container--vertical "  >
                <div className="container">
                    <p>Hello, <span className="name">{this.props.name}</span>!</p>
                    <button className="button button-medium button--dark" onClick={this.goToProfile} >Profile</button>
                    <button className="button button-medium button" onClick={this.props.goToSignOut}>Sign out</button>
                </div>
                {(this.state.view === 'home' || this.state.view === 'search') && <Favs fav={this.state.fav}/> }
               


                {this.state.view === 'profile' && <Profile goToHome={this.goBack} onPasswordUpdate={this.updatePassword} goToLanding={this.goToLanding} />}

                {this.state.view === 'home' || this.state.view === 'search' ? <Search onSearch={this.onSearch} /> : <></>}

                {this.state.view === 'search' && <>
                    {this.state.vehicles && !this.state.vehicle && <Results items={this.state.vehicles} onItem={this.goToItem} />}
                    {this.state.vehicle && <Details item={this.state.vehicle} onBack={this.clearVehicle} favSelect={this.addFavVehicle} />}
                </>}


            </div>
        </>
    }

}

export default Home