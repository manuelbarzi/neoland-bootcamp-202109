import React, { useState } from "react"
import Search from "./Search"
import { retrieveChampions, retrieveChampion, unregisterUser, updateUserPassword} from '../logic/index'
import Results from "./Results"
import Detail from "./Detail"
import Profile from "./Profile"

function Home( { name, toLanding, openModal } ) {

    const [view, setView] = useState( "search" )
    const [champions, setChampions] = useState( [] )
    const [champion, setChampion] = useState( null )

    const goToItem = champion => {

        try {
            retrieveChampion( sessionStorage.token, champion, ( error, champion ) => {
                if ( error ) { alert( error.message ) }
                else {
                    setChampion( champion );
                    setView( "search" )
                }
            } )
        } catch ( error ) {
            alert( error.message )
        }
    }
    
    const changePassword = ( oldPassword, password ) => {
        try {
            updateUserPassword( sessionStorage.token, oldPassword, password, ( error ) => {
                if ( error ) openModal( error.message )
                else setView( "search" )
            } )
        } catch ( error ) {
            openModal( error.message )
        }
    }

    
    const deleteAccount = ( password ) => {
        try {
            unregisterUser( sessionStorage.token, password, ( error ) => {
                if ( error ) openModal( error.message )
                else { toLanding() }
            } )
        } catch ( error ) {
            openModal( error.message )
        }
    }

    const search = ( query ) => {
        setChampions( [] )

        try {
            retrieveChampions( sessionStorage.token, query, ( error, champions ) => {
                if ( error ) openModal( error.message )
                else setChampion( champions )
            } )

        } catch ( error ) {
            openModal( error.message )
        }

    }
    
    return <div className="home container container--gapped container--vertical">
        <nav className="nav-bar">
            <h1 className="nav--title">EZ BULDS</h1>
            <button className="button button--dark" onClick={() => setView( 'profile' )}>Profile</button>
            <button className="button button" onClick={() => toLanding()}>Sign out</button>
            </nav>
        <div className="container">
            
        </div>

        {view === 'search' && <><Search 
        onSearch={search}
        ></Search>


            {!champion && <Results
                items={champions}
                onItem={goToItem}
            ></Results>}

            {champion && <Detail 
            item={champion}             
            goSearch={() => { setChampion( null ); setChampions( [] ) }}
            ></Detail>}
        </>}

        {view === 'profile' && <Profile
            goSearch={() => { setChampion( null ); setView( "search" ); setChampions( [] ) }}
            onChangePassword={changePassword}
            onDeleteAccount={deleteAccount}
            ></Profile>}
    </div>

}

export default Home