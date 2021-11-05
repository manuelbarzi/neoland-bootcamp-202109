import React, { Component } from 'react'
import logger from '../logger'
import { retrieveUser } from '../logic'
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
        const { props: { showModal }, resetTokenAndGoToLogin } = this // Destructuring
        
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
            spinner: false
        })
    }

    showModal = (title, text) => this.setState({ modal: true, title, text })

    closeModal = () => this.setState({ modal: false })

    showSpinner = () => this.setState({ spinner: true })

    hideSpinner = () => this.setState({ spinner: false })

    onSignIn = () => this.setState({ view: "login" })

    onSignUp = () => this.setState({ view: "register" })

    postSignIn = () => this.setState({ view: "home", name: this.state.name })

    onProfile = () => this.setState({ view: "profile" })

    signOut = () => this.setState({ view: !(sessionStorage.token ? sessionStorage.token = "" : sessionStorage.token = "") ? "landing" : "home" })

    onUnregister = () => this.setState({ view: "unregister" })

    onChangePassword = () => this.setState({ view: "change--password" })

    onChangeData = () => this.setState({ view: "modify" })

    onModal = () => this.setState({ view: "modal" })

    render() {
        //logger.info("App -> render")

        const { onSignIn, onSignUp, onProfile, onUnregister, onChangeData, onChangePassword, signOut, showSpinner, showModal, hideSpinner, postSignIn, resetTokenAndGoToLogin, closeModal, state: { view, name, spinner, modal, title, text} } = this

        return <React.Fragment>

            {view === "landing" &&
                <Landing
                    onSignIn={onSignIn}
                    onSignUp={onSignUp}
                ></Landing>}

            {view === "register" && <SignUp
                title={title} text={text}
                onSignIn={onSignIn}
                onSignUp={onSignUp}
                showSpinner={showSpinner}
                hideSpinner={hideSpinner}
                showModal={showModal}
            ></SignUp>}

            {view === "login" &&
                <SignIn view={view}
                    title={title} text={text}
                    onSignIn={onSignIn}
                    onSignUp={onSignUp}
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
                onUnregister={onUnregister}
                onChangePassword={onChangePassword}
                onChangeData={onChangeData}
            ></Profile>}

            {view === "unregister" && <Unregister
                title={title} text={text}
                onProfile={onProfile}
                showSpinner={showSpinner}
                hideSpinner={hideSpinner}
                onUnregister={onUnregister}
                showModal={showModal}
                resetTokenAndGoToLogin={resetTokenAndGoToLogin}
            ></Unregister>}

            {view === "change--password" && <ChangePassword
                title={title} text={text}
                onProfile={onProfile}
                showSpinner={showSpinner}
                hideSpinner={hideSpinner}
                onChangePassword={onChangePassword}
                showModal={showModal}
            ></ChangePassword>}

            {view === "modify" && <ChangeData
                title={title} text={text}
                onProfile={onProfile}
                showSpinner={showSpinner}
                hideSpinner={hideSpinner}
                onChangeData={onChangeData}
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

