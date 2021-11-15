import { useState, useEffect } from 'react'
import Home from './components/Home';
import Landing from './components/Landing';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import PostSignUp from './components/PostSignUp';
import Spinner from './components/Spinner'
import { retrieveUser, signinUser, signupUser } from './logic';
import Logo from './components/Logo';
import Modal from './components/Modal';
import logger from './logger';
import Image from './components/Image';

function App() {
    logger.debug('App ->render')
    const [view, setView] = useState(sessionStorage.token ? '' : 'landing')
    const [name, setName] = useState(null)
    const [spinner,setSpinner]=useState(sessionStorage.token?true:false)
    const[modal,setModal]=useState(null)
    const[level,setLevel]=useState(null)
    useEffect(() => {
        logger.debug('App -> useEffect (componentDidMount)')
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
                    setSpinner(false)
                })
            } catch ({ message }) {
                showModal(message, 'warn')

                resetTokenAndGoToLanding()

                return
            }
        }
    }, [])

    const goToSignIn = () => setView('signin')
    const goToSignUp = () => setView('signup')
    const goToPostSignUp = () => setView('postsignup')
    const goToHome = () => setView('home')
    const showSpinner=()=> setSpinner(true)
    const hideSpinner=()=> setSpinner(false)

    const sendSignUp = (name, username, password) => {
        showSpinner()
        try {
            signupUser(name, username, password, (error) => {
                if (error) {
                    showModal(error.message)
                    hideSpinner()
                    return
                    
                }
                goToPostSignUp()
                setSpinner(false)
            })
        } catch ({message}) {
            showModal(message,'warn')
            hideSpinner()
        }
    }

    const sendSignIn = (username, password) => {
        showSpinner()
        try {
            signinUser(username, password, (error, token) => {
                if (error) {
                    showModal(error.message)
                    hideSpinner()
                    return
                    
                }
                sessionStorage.token = token

                getRetrieveUser(token)

            })
        }
        catch (error) {
            hideSpinner()
            showModal(error.message)
        }
    }
    const getRetrieveUser = (token) => {
        showSpinner()
        try {
            retrieveUser(token, (error, user) => {
                if (error) {
                    showModal(error.message)
                    hideSpinner()
                    return
                }
                const { name } = user
                setName(name)
                setView('home')
                setSpinner(false)

            })
        } catch ({message}) {
            hideSpinner()
            showModal(message,'warn')
        }
    }

    const resetTokenAndGoToLanding = () => {
        delete sessionStorage.token
        setSpinner(false)
        setView('landing')
        
    }

    const toLanding = () => { setView('landing') }
    const showModal=(message,level='error')=>{
        setModal(message)
        setLevel(level)
    }
    const acceptModal=()=>setModal(null)

    return <div>
        
        <Logo image= 'https://static.wikia.nocookie.net/logopedia/images/3/33/Hot_Wheels_2005_logo.png' text='Best Hot Wheels'/>
        {view === 'landing' && <Landing onSignIn={goToSignIn} onSignUp={goToSignUp} />}
        {view === 'signin' && <SignIn onSignUp={goToSignUp} onSignIn={sendSignIn} />}
        {view === 'signup' && <SignUp onSignIn={goToSignIn} onSignUp={sendSignUp} />}
        {view === 'postsignup' && <PostSignUp onSignIn={goToSignIn} />}
        {view === 'home' && <Home 
        name={name} 
        goToHome={goToHome} 
        onSignOut={resetTokenAndGoToLanding}
        goToLanding={toLanding} 
        startSpinner={showSpinner}
        endSpinner={hideSpinner}
        onModal={showModal}
        />}
        {spinner && <Spinner />}
        {modal && <Modal level={level}message={modal}onAccept={acceptModal}/>}
        <Image img='https://play.hotwheels.com/es-mx/Images/HomepagePromos_CollectCars_bkgd_tcm1014-123730.jpg'/>
    </div>
}

export default App