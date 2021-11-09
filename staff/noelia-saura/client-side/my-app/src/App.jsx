import { useState, useEffect } from 'react'
import Home from './components/Home';
import Landing from './components/Landing';
import React from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import PostSignUp from './components/PostSignUp';
import { retrieveUser, signinUser, signupUser } from './logic';

function App() {
    const [view, setView] = useState('landing')
    const [name, setName] = useState(null)

    useEffect(() => {
        if (sessionStorage.token) {
            getRetrieveUser(sessionStorage.token)
        }
    }, [])



    const goToSignIn = () => setView('signin')
    const goToSignUp = () => setView('signup')
    const goToPostSignUp = () => setView('postsignup')
    const goToHome = () => setView('home')
    const sendSignUp = (name, username, password) => {
        try {
            signupUser(name, username, password, (error) => {
                if (error) {
                    alert(error.message)
                    return
                }
                goToPostSignUp()
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const sendSignIn = (username, password) => {
        try {
            signinUser(username, password, (error, token) => {
                if (error) {
                    alert(error.message)
                    return
                }
                sessionStorage.token = token

                getRetrieveUser(token)

            })
        }
        catch (error) {
            alert(error.message)
        }
    }
    const getRetrieveUser = (token) => {
        try {
            retrieveUser(token, (error, user) => {
                if (error) {
                    alert(error.message)
                    return
                }
                
                setName('home')

            })
        } catch (error) {
            alert(error.message)
        }
    }

    const goToSignOut = () => {
        delete sessionStorage.token
        delete sessionStorage.fav
        setView('landing')
    }

    const goToLanding = () => { setView('landing') }

    return <div>
        {view === 'landing' && <Landing onSignIn={goToSignIn} onSignUp={goToSignUp} />}
        {view === 'signin' && <SignIn onSignUp={goToSignUp} onSignIn={sendSignIn} />}
        {view === 'signup' && <SignUp onSignIn={goToSignIn} onSignUp={sendSignUp} />}
        {view === 'postsignup' && <PostSignUp onSignIn={goToSignIn} />}
        {view === 'home' && <Home name={name} goToHome={goToHome} goToSignOut={goToSignOut} goToLanding={goToLanding} />}
    </div>
}

export default App