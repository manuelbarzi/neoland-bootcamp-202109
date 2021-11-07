import React, { Component } from 'react'
import logger from '../logger'
import { 
    registerUser, 
    retrieveUser, 
    loginUser, 
    updateUserData, 
    updateUserPassword ,
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

class App extends Component {
    constructor() {
        super()
        logger.info("App -> constructor")
        this.state = {
            view: sessionStorage.token ? "" : "landing",
            name: null,
            spinner: sessionStorage.token ? true : false,
            modalCont: {
                modal: false,
                title: "",
                text: ""
            }
        };
    }

    componentDidMount() {
        logger.info("App -> componentDidMount")

        const { token } = sessionStorage
        const { showModal, resetTokenAndGoToLogin } = this // Destructuring

        if (token) {
            try {
                retrieveUser(token, (error, user) => {
                    if (error) {
                        showModal("Error", error.message)

                        resetTokenAndGoToLogin()

                        return

                    } else {

                        const name = user.name

                        this.setState({
                            name,
                            view: "home",
                            spinner: false
                        })
                    }
                })
            } catch ({ message }) {

                showModal("Error", message)

                resetTokenAndGoToLogin()

                return
            }
        }
    }

    resetTokenAndGoToLogin = () => {
        delete sessionStorage.token

        this.setState({
            view: "landing",
            name: null,
            spinner: false
        })
    }

    showModal = (title, text) => this.setState({ modal: true, title, text })

    closeModal = () => this.setState({ modal: false })

    onModal = () => this.setState({ view: "modal" })

    showSpinner = () => this.setState({ spinner: true })

    hideSpinner = () => this.setState({ spinner: false })
    
    onProfile = () => this.setState({ view: "profile" })
    
    signOut = () => this.setState({ view: !(sessionStorage.token ? sessionStorage.token = "" : sessionStorage.token = "") ? "landing" : "home", name: null })
    
    goToSignUp = () => this.setState({ view: "register" })

    signUp = (user) => {
        const { showModal, showSpinner, hideSpinner, goToSignUp, goToSignIn } = this

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

    goToSignIn = () => this.setState({ view: "login" })
    
    postSignIn = () => this.setState({ view: "home", name: this.state.name })

    signIn = (user) => {

        const { showModal, showSpinner, hideSpinner, goToSignIn, postSignIn } = this

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

                    postSignIn()

                    hideSpinner()

                    sessionStorage.token = token
                }
            })
        } catch ({ message }) {

            showModal("Error", message)

            hideSpinner()
        }
    }

    goToChangeData = () => this.setState({ view: "modify" })

    changeData = user => {

        const { showModal, hideSpinner, showSpinner, goToChangeData } = this

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

    goToChangePassword = () => this.setState({ view: "change--password" })

    changePassword = user => {

        const { showSpinner, showModal, hideSpinner, goToChangePassword } = this

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

    goToUnregister = () => this.setState({ view: "unregister" })

    unregister = user => {

        const { showSpinner, showModal, hideSpinner, onUnregister, resetTokenAndGoToLogin } = this

        showSpinner()

        try {
            unregisterUser(sessionStorage.token, user, (error) => {
                if (error) {

                    showModal("Error", error.message)

                    hideSpinner()

                    onUnregister()

                    return
                }

                showModal("Éxito", "Has eliminado tu cuenta.")
                
                hideSpinner()
                
                resetTokenAndGoToLogin()
            })
        } catch ({ message }) {

            showModal("Error", message)
            
            hideSpinner()

            onUnregister()
        }
    }

    render() {
        logger.info("App -> render")

        const { goToSignIn,
                goToSignUp,
                signUp,
                signIn,
                onProfile,
                goToUnregister,
                unregister,
                goToChangeData,
                changeData,
                goToChangePassword,
                changePassword,
                signOut,
                showSpinner,
                showModal,
                hideSpinner,
                postSignIn,
                resetTokenAndGoToLogin,
                closeModal,
            state: { view, name, spinner, modal, title, text }
        } = this

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
                    postSignIn={postSignIn}
                    resetTokenAndGoToLogin={resetTokenAndGoToLogin}
                    showSpinner={showSpinner}
                    hideSpinner={hideSpinner}
                    showModal={showModal}
                ></SignIn>}

            {view === "home" &&
                <Home name={name}
                    title={title} text={text}
                    postSignIn={postSignIn}
                    onProfile={onProfile}
                    signOut={signOut}
                    showSpinner={showSpinner}
                    hideSpinner={hideSpinner}
                    showModal={showModal}
                ></Home>}

            {view === "profile" && <Profile
                postSignIn={postSignIn}
                onUnregister={goToUnregister}
                onChangePassword={goToChangePassword}
                onChangeData={goToChangeData}
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

        </React.Fragment>
    }
}

export default App

