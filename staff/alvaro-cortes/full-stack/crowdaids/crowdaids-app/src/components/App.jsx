import React from 'react';
import { useState } from 'react'
import logger from '../logger'
import Modal from './Modal'
import Spinner from './Spinner'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Home from './Home'
import Profile from './Profile'
import AppContext from './AppContext'

function App() {
    logger.info("App -> constructor")

    const [view, setView] = useState(sessionStorage.token ? "home" : "login")
    const [name, setName] = useState(null)
    const [spinner, setSpinner] = useState(sessionStorage.token ? true : false)
    const [modal, setModal] = useState(false)
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    const resetTokenAndGoToLogin = () => {
        delete sessionStorage.token

        setView("login")
        setName(null)
        setSpinner(false)
    }

    const showModal = (title, text) => {
        setTitle(title)
        setText(text)
        setModal(true)
    }

    const closeModal = () => setModal(false)

    const showSpinner = () => setSpinner(true)

    const hideSpinner = () => setSpinner(false)

    const goToProfile = () => setView("profile")

    const goToHome = () => setView("home")

    const goToSignUp = () => setView("register")

    const goToSignIn = () => setView("login")

    const goToUnregister = () => setView("unregister")

    const goToChangePassword = () => setView("change--password")

    const goToChangeData = () => setView("modify")

    return <>
        <AppContext.Provider value={{
            showSpinner: showSpinner,
            hideSpinner: hideSpinner,
            showModal: showModal,
            goToHome: goToHome,
            goToSignIn: goToSignIn,
            goToSignUp: goToSignUp,
            resetTokenAndGoToLogin: resetTokenAndGoToLogin,
            goToProfile: goToProfile,
            goToUnregister: goToUnregister,
            goToChangePassword: goToChangePassword,
            goToChangeData: goToChangeData
        }}>

            {view === "register" && <SignUp></SignUp>}

            {view === "login" &&
                <SignIn view={view} ></SignIn>}

            {view === "home" &&
                <Home name={name} ></Home>}

            {view === "profile" && <Profile></Profile>}

            {spinner && <Spinner></Spinner>}

            {modal && <Modal title={title} text={text} closeModal={closeModal} ></Modal>}

        </AppContext.Provider>
    </>
}

export default App
