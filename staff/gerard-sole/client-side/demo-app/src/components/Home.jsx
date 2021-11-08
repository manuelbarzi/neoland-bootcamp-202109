import React from "react"
import {setState} from "react"
import Search from "./Search"
import { retrieveVehicle, searchVehicles, unregisterUser, updateUserPassword } from '../logic/index'
import Results from "./Results"
import Detail from "./Detail"
import Profile from "./Profile"


function Home({ name, toLanding }) {

    const [view, setView] = setState( "search" )
    const [vehicles, setVehicles] = setState( [] )
    const [vehicle, setVehicle] = setState( null )

    return <div className="home container container--gapped container--vertical">
        <div className="container">
            <p>Hello, <span className="name">{name ? name : 'World'}</span>!</p>
            <button className="button button-medium button--dark" onClick={() => setState('profile')}>Profile</button>
            <button className="button button-medium button" onClick={() => toLanding()}>Sign out</button>
        </div>

        {view === 'search' && <><Search onSearch={( query ) => {
            setState( { vehicle: null, vehicles: [] } )

            try {
                searchVehicles( query, ( error, vehicles ) => {
                    if ( error ) alert( error.message )
                    else setState( { vehicles } )
                } )

            } catch ( error ) {
                alert( error.message )
            }

        }}></Search>


            {!vehicle && <Results items={vehicles} onItem={vehicleid => {

                try {
                    retrieveVehicle( vehicleid, ( error, vehicle ) => {
                        if ( error ) { alert( error.message ) }
                        else { setState( { vehicle } ) }
                    } )
                } catch ( error ) {
                    alert( error.message )
                }
            }}
            ></Results>}

            {vehicle && <Detail item={vehicle} goSearch={() => setState( { vehicle: null } )}></Detail>}
        </>}

        {view === 'profile' && <Profile
            goSearch={() => setState( { view: 'search', vehicles: [], vehicle: null } )}
            onChangePassword={( oldPassword, password ) => {
                try {
                    updateUserPassword( sessionStorage.token, oldPassword, password, ( error ) => {
                        if ( error ) alert( error.message )
                        else setState( { view: 'search' } )
                    } )
                } catch ( error ) {
                    alert( error.message )
                }
            }}
            onDeleteAccount={( password ) => {
                try {
                    unregisterUser( sessionStorage.token, password, ( error ) => {
                        if ( error ) alert( error.message )
                        else { toLanding() }
                    } )
                } catch ( error ) {
                    alert( error.message )
                }
            }}></Profile>}

    </div>

}

export default Home