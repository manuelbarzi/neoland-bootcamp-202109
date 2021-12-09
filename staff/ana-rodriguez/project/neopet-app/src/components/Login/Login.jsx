import React from 'react';
import {Link} from 'react-router-dom';
import './Login.css';

function Login(props){

    const {loginVisual} = props

return <>
    <form className="Login_container" onSubmit={event => {
        event.preventDefault()
        const username = event.target.username.value
        const password = event.target.password.value

        loginVisual(username, password)
    }}>
        <h1 className="title">Login</h1>

        <div className="login_inputs">
            <input className="login_input" type="text" placeholder="Username" name="username"/>
            <input className="login_input" type="password" placeholder="Password" name="password"/>
        </div>
        <div className="buttons">
            <button className="Login__button" type="submit">Login</button>
        <Link to="/register"><button className="Register__button" type="button">Register</button></Link>
        </div>

    </form>

</>
}

export default Login