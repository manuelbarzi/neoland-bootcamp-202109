import Home from './components/Home';
import Landing from './components/Landing';
import React from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import PostSignUp from './components/PostSignUp';
import { retrieveUser, signinUser, signupUser } from './logic';



class App extends React.Component {
    constructor() {
        super()
        this.state = { view: 'landing', name: null }
    }

    componentDidMount() {
        if (sessionStorage.token) {
            this.getRetrieveUser(sessionStorage.token)
        }
    }

    componentWillUnmount() { }

    goToSignIn = () => { this.setState({ view: 'signin' }) }
    goToSignUp = () => { this.setState({ view: 'signup' }) }
    goToPostSignUp = () => { this.setState({ view: 'postsignup' }) }
    goToHome = () => { this.setState({ view: 'home' }) }


    sendSignUp = (name, username, password) => {
        try{
        signupUser(name, username, password, (error) => {
            if (error) {
                alert(error.message)
                return
            }
            this.goToPostSignUp()
        })
    }catch(error){
        alert(error.message)
    }

    }
    sendSignIn = (username, password) => {
        try {
            signinUser(username, password, (error, token) => {
                if (error) {
                    alert(error.message)
                    return
                }
                sessionStorage.token = token

                this.getRetrieveUser(token)

            })
        }
        catch (error) {
            alert(error.message)
        }
    }

    getRetrieveUser = (token) => {
        try {
            retrieveUser(token, (error, user) => {
                if (error) {
                    alert(error.message)
                    return
                }
                const { name } = user

                this.setState({ name: name, view: 'home' })
            })
        } catch (error) {
            alert(error.message)
        }
    }
    goToSignOut = () => {
        delete sessionStorage.token
        this.setState({ view: 'landing' })
    }

    goToLanding = () => {
        this.setState({ view: 'landing' })
    }
    render() {
        return (
            <div>
                {this.state.view === 'landing' && <Landing onSignIn={this.goToSignIn} onSignUp={this.goToSignUp} />}
                {this.state.view === 'signin' && <SignIn onSignUp={this.goToSignUp} onSignIn={this.sendSignIn} />}
                {this.state.view === 'signup' && <SignUp onSignIn={this.goToSignIn} onSignUp={this.sendSignUp} />}
                {this.state.view === 'postsignup' && <PostSignUp onSignIn={this.goToSignIn} />}
                {this.state.view === 'home' && <Home name={this.state.name} goToSignOut={this.goToSignOut} goToLanding={this.goToLanding} />}
            </div>
        );
    }
}

export default App