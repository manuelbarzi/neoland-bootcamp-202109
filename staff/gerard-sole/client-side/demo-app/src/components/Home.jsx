import React, {useState} from "react"
import Search from "./Search"
import { retrieveVehicle, searchVehicles, unregisterUser, updateUserPassword } from '../logic/index'
import Results from "./Results"
import Detail from "./Detail"
import Profile from "./Profile"

function Home({ name, toLanding }) {

    const [view, setView] = useState( "search" )
    const [vehicles, setVehicles] = useState( [] )
    const [vehicle, setVehicle] = useState( null )

    return <div className="home container container--gapped container--vertical">
        <div className="container">
            <p>Hello, <span className="name">{name ? name : 'World'}</span>!</p>
            <button className="button button--dark" onClick={() => setView('profile')}>Profile</button>
            <button className="button button" onClick={() => toLanding()}>Sign out</button>
        </div>

        {view === 'search' && <><Search onSearch={( query ) => {
            setVehicles( [] )

            try {
                searchVehicles( query, ( error, vehicles ) => {
                    if(error) alert(error.message)
                    else setVehicles(vehicles)
                })

            } catch ( error ) {
                alert( error.message )
            }

        }}></Search>


            {!vehicle && <Results items={vehicles} onItem={vehicleid => {

                try {
                    retrieveVehicle( vehicleid, ( error, vehicle ) => {
                        if ( error ) { alert( error.message ) }
                        else { setVehicle  (vehicle) }
                    } )
                } catch ( error ) {
                    alert( error.message )
                }
            }}
            ></Results>}

            {vehicle && <Detail item={vehicle} goSearch={() => {setVehicles( [] ); setView("search")}}></Detail>}
        </>}

        {view === 'profile' && <Profile
            goSearch={() => { setView("search"); setVehicles([]); setVehicle(null)}}
            onChangePassword={( oldPassword, password ) => {
                try {
                    updateUserPassword( sessionStorage.token, oldPassword, password, ( error ) => {
                        if ( error ) alert( error.message )
                        else setView("search") 
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