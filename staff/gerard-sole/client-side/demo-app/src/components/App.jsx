import React from 'react'
import { useState, useEffect } from 'react'
import Home from './Home'
import Landing from './Landing'
import SignUp from './SignUp'
import PostSignUp from './PostSignUp'
import SignIn from './SignIn'
import Modal from './Modal'
import { signinUser, signupUser, retrieveUser } from '../logic/index'

// import {searchVehicles} from '../logic/index'
// import {retrieveVehicle} from '../logic/index'
// import {unregisterUser} from '../logic/index'
// import {updateUserPassword} from '../logic/index'


function App() {
    const [view, setView] = useState( sessionStorage.token ? '' : 'landing' )
    const [name, setName] = useState( null )
    const [modal, setModal] = useState( { state: null, message: null } )
    const openModal = ( message ) => {
        setModal( { state: true, message } )
    }
    const closeModal = () => setModal({state: null})
    useEffect( () => {

        const { token } = sessionStorage

        if ( token ) {
            try {
                retrieveUser( token, ( error, user ) => {
                    if ( error ) {
                        openModal( error.message )

                        resetTokenAndGoToLanding()

                        return
                    }

                    var name = user.name

                    setView( 'home' )
                    setName( name )
                } )
            } catch ( message ) {
                openModal( message )
                resetTokenAndGoToLanding()

                return
            }
        }
    }, [] )

    const resetTokenAndGoToLanding = () => {
        delete sessionStorage.token

        setView( 'landing' )
    }
    const goToSignIn = () => setView( "signin" )
    const goToSignUp = () => setView( "signup" )

    const signUp = ( name, username, password ) => {
        try {
            signupUser( name, username, password, error => {
                if ( error ) {
                    openModal( error.message )

                    return
                }

                setView( 'post-signup' )

            } )
        } catch ( error ) {
            openModal( error.message )
        }
    }

    const signIn = ( username, password ) => {
        try {
            signinUser( username, password, ( error, token ) => {
                if ( error ) {
                    openModal( error.message )
                    openModal( error.message )
                    return
                }

                sessionStorage.token = token

                try {
                    retrieveUser( token, ( error, user ) => {
                        if ( error ) {
                            openModal( error.message )



                            return
                        }

                        const { name } = user

                        setView( 'home' )
                        setName( name )

                    } )
                } catch ( error ) {
                    openModal( error.message )


                }
            } )
        } catch ( error ) {
            openModal( error.message )

        }
    }

    return (
        <>
            {view === "landing" && (
                <Landing
                    onSignIn={goToSignIn}
                    onSignUp={goToSignUp}
                />
            )}

            {view === "signin" && (
                <SignIn onSignUp={goToSignUp} signIn={signIn} />
            )}

            {view === "signup" && (
                <SignUp
                    onSignIn={goToSignIn}
                    onSignUp={signUp}
                />
            )}

            {view === "post-signup" && (
                <PostSignUp onSignIn={goToSignIn} />
            )}

            {view === "home" && (
                <Home name={name}
                    toLanding={resetTokenAndGoToLanding} />
            )}
            {modal.state === true && <Modal message={modal.message} onCloseModal={closeModal} />}

        </>
    )
}

export default App;
