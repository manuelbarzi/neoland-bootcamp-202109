import { Component } from 'react'
import logger from '../logger'
import { retrieveUser } from '../logic'
import { signupUser } from '../logic'
import { signinUser } from '../logic'
import Logo from './Logo'
import Time from './Time'
import Landing from './Landing'
import SignUp from './SignUp'
import PostSignUp from './PostSignUp'
import SignIn from './SignIn'
import Home from './Home'
import Spinner from './Spinner'
import Feedback from './Feedback'


class App extends Component {
    constructor() {
        logger.info('App -> constructor')

        super()

        this.state = {
            view: sessionStorage.token ? '' : 'landing',
            name: null,
            spinner: sessionStorage.token ? true : false
        }
    }


    componentDidMount() {
        logger.info("App ===> mount")

        if (sessionStorage.token) {
            try {
                retrieveUser(sessionStorage.token, (error, user) => {
                    if (error) {
                        alert(error.message)

                        this.resetTokenAndGoToLanding()

                        return
                    }

                    var name = user.name

                    this.setState({
                        view: 'home',
                        name,
                        spinner: false
                    })
                })
            } catch (error) {
                alert(error.message)

                this.resetTokenAndGoToLanding()

                return
            }
        }
    }


    resetTokenAndGoToLanding = () => {
        delete sessionStorage.token

        this.setState({
            view: 'landing'
        })

    }

    goToHome = () =>{
        this.setState({
            view: 'home'
        })
    }

    goToProfile = () =>{
        this.setState({
            view: 'profile'
        })
    }

    render() {
        logger.info("App ===> render")
        return <React.Fragment>
            {
                this.state.view === "landing" && <Landing goToLogin={() => this.setState({ view: "login" })}
                    goToRegister={() => this.setState({ view: "register" })}></Landing>
                // if(this.state === "landing") return Landing
            }

            {
                this.state.view === "register" && <SignUp goToLogin={() => this.setState({ view: "login" })}></SignUp>
            }

            {
                this.state.view === "login" && <SignIn goToSignUp={() => this.setState({ view: "register" })} goToHome={this.goToHome}></SignIn>
            }

            {
                this.state.view === "home" && <Home goToProfile={this.goToProfile}
                    name={this.state.name}
                    onSignOut={this.resetTokenAndGoToLanding}
                ></Home>
            }

            {
                this.state.view === "profile" && <UpdatePass ></UpdatePass>
            }
        </React.Fragment>
    }

    componentWillUnmount() {
        logger.info("App ===> unmount")
    }
}