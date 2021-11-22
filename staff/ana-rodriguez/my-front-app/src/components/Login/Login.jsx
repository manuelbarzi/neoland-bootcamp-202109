import React from 'react';
import {Link} from 'react-router-dom';
import './Login.css';

function Login(){

return <>
    <form className="Login_container">
        <h1 className="title">Login</h1>

        <div className="login_inputs">
            <input className="login_input" type="text" placeholder="Username" />
            <input className="login_input" type="password" placeholder="Password" />
        </div>
        <div className="buttons">
            <button className="Login__button" type="submit">Login</button>
        <Link to="/register"><button className="Register__button" type="button">Register</button></Link>
        <Link to="/home"><button className="Home__button" type="button">Home</button></Link>
        </div>

    </form>

</>
}

export default Login