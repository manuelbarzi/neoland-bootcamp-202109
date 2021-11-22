import React from 'react';
import {Link} from 'react-router-dom';
import './Register.css';

function Register(){

return <>
    <form className="Register_container">
        <h1 className="title">Register</h1>
        <div className="register_inputs">
            <input className="register_input" type="text" placeholder="name" />
            <input className="register_input" type="text" placeholder="username" />
            <input className="register_input" type="text" placeholder="e-mail" />
            <input className="register_input" type="password" placeholder="password" />
        </div>

        <div className="buttons">
          <button className="Register_button" type="submit">Register</button>
          <Link to="/login"><button className="Login_button" type="button">Login</button></Link>

        </div>

    </form>
    
</>
}

export default Register