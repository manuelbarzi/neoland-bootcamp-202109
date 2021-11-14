import React from 'react';
import { useState, useEffect } from 'react'
import logger from '../logger'
import {
    registerUser,
    retrieveUser,
    loginUser,
    updateUserData,
    updateUserPassword,
    unregisterUser
} from '../logic'
import ChangeData from './Change-data'
import Home from './Home'
import Landing from './Landing'
import ChangePassword from './Change-password'
import Profile from './Profile'
import SignUp from './SignUp'
import SignIn from './SignIn'
import Unregister from './Unregister'
import Modal from './Modal'
import Spinner from './Spinner'
import Checkout from './Checkout-payment';

function App() {
    logger.info("App -> constructor")

    const [view, setView] = useState(sessionStorage.token ? "" : "landing")
    const [name, setName] = useState(null)
    const [spinner, setSpinner] = useState(sessionStorage.token ? true : false)
    const [modal, setModal] = useState(false)
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    useEffect(() => {
        logger.info("App -> componentDidMount")

        const { token } = sessionStorage

        if (token) {
            try {
                retrieveUser(token, (error, user) => {
                    if (error) {

                        resetTokenAndGoToLogin()

                        return

                    } else {

                        const name = user.name

                        setName(name)
                        setView("home")
                        setSpinner(false)
                    }
                })
            } catch ({ message }) {

                showModal("Error", message)

                resetTokenAndGoToLogin()

                return
            }
        }
    }, [])

    const resetTokenAndGoToLogin = () => {
        delete sessionStorage.token

        setView("landing")
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

    const toCheckout = () => setView("checkout")

    const onProfile = () => setView("profile")

    const goHome = () => setView("home")

    const goToSignUp = () => setView("register")

    const signUp = (user) => {

        showSpinner()

        try {
            registerUser(user, (error) => {
                if (error) {

                    showModal("Error", error.message)

                    hideSpinner()

                    goToSignUp()
                } else {
                    showModal("Éxito", "Tu cuenta se ha creado correctamente.")

                    hideSpinner()

                    goToSignIn()
                }
            })
        } catch ({ message }) {

            showModal("Error", message)

            hideSpinner()

            goToSignUp()
        }
    }

    const goToSignIn = () => setView("login")

    const signIn = (user) => {

        showSpinner()

        try {
            loginUser(user, (error, token) => {
                if (error) {
                    var error = error.message

                    showModal("Error", error)

                    hideSpinner()

                    goToSignIn()

                    return
                } else {

                    sessionStorage.token = token
                }
                try {
                    retrieveUser(token, (error, user) => {
                        if (error) {
                            hideSpinner()

                            showModal("Error", error.message)

                            resetTokenAndGoToLogin()

                            return

                        } else {

                            const { name } = user

                            setView("home")
                            setName(name)
                            setSpinner(false)
                        }
                    })
                } catch ({ message }) {
                    hideSpinner()

                    showModal("Error", message)

                    resetTokenAndGoToLogin()

                    return
                }
            })
        } catch ({ message }) {

            showModal("Error", message)

            hideSpinner()
        }
    }

    const goToChangeData = () => setView("modify")

    const changeData = user => {

        showSpinner()

        try {
            updateUserData(sessionStorage.token, user, function (error) {
                if (error) {

                    showModal("Error", error.message)

                    hideSpinner()

                    return
                }

                showModal("Éxito", "Tus datos fueron actualizados.")

                hideSpinner()

                goToChangeData()
            })
        } catch ({ message }) {

            showModal("Error", message)

            hideSpinner()

            goToChangeData()
        }
    }

    const goToChangePassword = () => setView("change--password")

    const changePassword = user => {

        showSpinner()

        try {
            updateUserPassword(sessionStorage.token, user, (error) => {
                if (error) {

                    showModal("Error", error.message)

                    hideSpinner()

                    goToChangePassword()

                    return
                }

                showModal("Éxito", "Tu contraseña fue actualizada.")

                hideSpinner()

                goToChangePassword()
            })
        } catch ({ message }) {

            showModal("Error", message)

            hideSpinner()

            goToChangePassword()

        }
    }

    const goToUnregister = () => setView("unregister")

    const unregister = user => {

        showSpinner()

        try {
            unregisterUser(sessionStorage.token, user, (error) => {
                if (error) {

                    showModal("Error", error.message)

                    hideSpinner()

                    return
                }

                showModal("Éxito", "Has eliminado tu cuenta.")

                hideSpinner()

                resetTokenAndGoToLogin()
            })
        } catch ({ message }) {

            showModal("Error", message)

            hideSpinner()

        }
    }

    return <React.Fragment>

        {view === "landing" &&
            <Landing
                onSignIn={goToSignIn}
                onSignUp={goToSignUp}
            ></Landing>}

        {view === "register" && <SignUp
            title={title} text={text}
            onSignIn={goToSignIn}
            onSignUp={signUp}
            showSpinner={showSpinner}
            hideSpinner={hideSpinner}
            showModal={showModal}
        ></SignUp>}

        {view === "login" &&
            <SignIn view={view}
                title={title} text={text}
                onSignIn={signIn}
                onSignUp={goToSignUp}
                resetTokenAndGoToLogin={resetTokenAndGoToLogin}
                showSpinner={showSpinner}
                hideSpinner={hideSpinner}
                showModal={showModal}
            ></SignIn>}

        {view === "home" &&
            <Home name={name}
                title={title} text={text}
                onProfile={onProfile}
                onSignOut={resetTokenAndGoToLogin}
                showSpinner={showSpinner}
                hideSpinner={hideSpinner}
                showModal={showModal}
                toCheckout={toCheckout}
            ></Home>}

        {view === "profile" && <Profile
            onUnregister={goToUnregister}
            onChangePassword={goToChangePassword}
            onChangeData={goToChangeData}
            goHome={goHome}
        ></Profile>}

        {view === "unregister" && <Unregister
            title={title} text={text}
            onProfile={onProfile}
            showSpinner={showSpinner}
            hideSpinner={hideSpinner}
            onUnregister={unregister}
            showModal={showModal}
            resetTokenAndGoToLogin={resetTokenAndGoToLogin}
        ></Unregister>}

        {view === "change--password" && <ChangePassword
            title={title} text={text}
            onChangePassword={changePassword}
            onProfile={onProfile}
            showSpinner={showSpinner}
            hideSpinner={hideSpinner}
            showModal={showModal}
        ></ChangePassword>}

        {view === "modify" && <ChangeData
            title={title} text={text}
            onProfile={onProfile}
            showSpinner={showSpinner}
            hideSpinner={hideSpinner}
            onChangeData={changeData}
            showModal={showModal}
        ></ChangeData>}

        {spinner && <Spinner></Spinner>}

        {modal && <Modal title={title} text={text}
            closeModal={closeModal}
            showModal={showModal}
        ></Modal>}

        {view === "checkout" && <Checkout
            onBack={goHome}
        />}
    </React.Fragment>
}

export default App

