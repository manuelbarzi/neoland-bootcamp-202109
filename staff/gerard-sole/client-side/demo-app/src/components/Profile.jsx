import React from "react"
import ButtonsProfile from "./ButtonsProfile"
import Password from "./Password"
import Unregister from "./Unregister"
import { useState, useEffect } from 'react'

function Profile( { goSearch, onChangePassword, onDeleteAccount } ) {

    const [view, setView] = useState( 'profile' )
   
    return <>
        <div className="container container--vertical">
            <h2>Your Profile</h2>
            <button className="button" onClick={() => goSearch()}>Back home</button>
        </div>
        {view === 'profile' && <ButtonsProfile
            goPassword={() => setView( 'password' )}
            goDeleteUser={() => setView( 'delete' )}
        ></ButtonsProfile>}

        {view === 'password' && <Password
            onChangePassword={onChangePassword}
            backProfile={() => setView( 'profile' )}
        />}


        {view === 'delete' && <Unregister
            onDeleteAccount={onDeleteAccount}
            backProfile={() => setView( 'profile' )}
        />}
    </>

}

export default Profile