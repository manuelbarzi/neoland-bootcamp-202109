import React from 'react'
import { useState, useEffect} from 'react'
import Home from './Home'
import Landing from './Landing'
import SignUp from './SignUp'
import PostSignUp from './PostSignUp'
import SignIn from './SignIn'
import { signinUser, signupUser, retrieveUser } from '../logic/index'

// import {searchVehicles} from '../logic/index'
// import {retrieveVehicle} from '../logic/index'
// import {unregisterUser} from '../logic/index'
// import {updateUserPassword} from '../logic/index'


function App() {
    const [view, setView] = useState(sessionStorage.token ? '' : 'landing')
    const [name, setName] = useState(null)

    useEffect(() => {

        const { token } = sessionStorage

        if (token) {
            try {
                retrieveUser(token, (error, user) => {
                    if (error) {
                        alert(error.message)

                        resetTokenAndGoToLanding()

                        return
                    }

                    var name = user.name

                    setView('home')
                    setName(name)
                })
            } catch (error) {
                alert(error.message)

                resetTokenAndGoToLanding()

                return
            }
        }
    }, [])

    const resetTokenAndGoToLanding = () => {
        delete sessionStorage.token

        setView('landing')
    }
    const goToSignIn = () => setView("signin")
    const goToSignUp = () => setView("signup")
    const goToHome = () => setView("home")
    // const openModal = ( message ) => setView( { modal: { status: true, message } } )

    const signUp = (name, username, password) => {
        try {
            signupUser(name, username, password, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                setView('post-signup')
    
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const signIn = (username, password) => {
        try {
            signinUser(username, password, (error, token) => {
                if (error) {
                    alert(error.message)

                    return
                }

                sessionStorage.token = token

                try {
                    retrieveUser(token, (error, user) => {
                        if (error) {
                            alert(error.message)


                            return
                        }

                        const { name } = user

                        setView('home')
                        setName(name)
            
                    })
                } catch (error) {
                    alert(error.message)

                }
            })
        } catch (error) {
            alert(error.message)
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

            </>
        )
    }

export default App;
