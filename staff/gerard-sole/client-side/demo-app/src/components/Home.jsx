import React from "react"
import Search from "./Search"
import { retrieveVehicle, searchVehicles, unregisterUser, updateUserPassword } from '../logic'
import Results from "./Results"
import Detail from "./Detail"
import Profile from "./Profile"

class Home extends React.Component {
    constructor() {
        super()

        this.state = {
            view: 'search',
            vehicles: [],
            vehicle: null
        }


    }
    render() {
        return <div className="home container container--gapped container--vertical">
            <div className="container">
                <p>Hello, <span className="name">{this.props.name ? this.props.name : 'World'}</span>!</p>
                <button className="button button-medium button--dark" onClick={() => this.setState( { view: 'profile' } )}>Profile</button>
                <button className="button button-medium button" onClick={() => this.props.toLanding()}>Sign out</button>
            </div>

            {this.state.view === 'search' && <><Search onSearch={( query ) => {
                this.setState( { vehicle: null, vehicles: [] } )

                try {
                    searchVehicles( query, ( error, vehicles ) => {
                        if ( error ) alert( error.message )
                        else this.setState( { vehicles } )
                    } )

                } catch ( error ) {
                    alert( error.message )
                }

            }}></Search>


                {!this.state.vehicle && <Results items={this.state.vehicles} onItem={vehicleid => {

                    try {
                        retrieveVehicle( vehicleid, ( error, vehicle ) => {
                            if ( error ) { alert( error.message ) }
                            else { this.setState( { vehicle } ) }
                        } )
                    } catch ( error ) {
                        alert( error.message )
                    }
                }}
                ></Results>}

                {this.state.vehicle && <Detail item={this.state.vehicle} goSearch={() => this.setState( { vehicle: null } )}></Detail>}
            </>}

            {this.state.view === 'profile' && <Profile
                goSearch={() => this.setState( { view: 'search', vehicles: [], vehicle: null } )}
                onChangePassword={( oldPassword, password ) => {
                    try {
                        updateUserPassword( sessionStorage.token, oldPassword, password, ( error ) => {
                            if ( error ) alert( error.message )
                            else this.setState( { view: 'search' } )
                        } )
                    } catch ( error ) {
                        alert( error.message )
                    }
                }}
                onDeleteAccount={(password) => {
                    try{
                        unregisterUser(sessionStorage.token, password,(error) => {
                            if(error) alert(error.message)
                            else {this.props.toLanding()}
                        })
                    }catch(error) {
                        alert(error.message)
                    }
                }}></Profile>}

        </div>

    }

}
export default Home