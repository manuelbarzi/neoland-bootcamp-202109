import React from 'react';
import {Link} from 'react-router-dom';
import { registerUser } from '../../logic';
import './Register.css';

function Register(props){

    const {registerVisual} = props
    
return <>
    <form className="Register_container" onSubmit={event => { 
        event.preventDefault() 
        
        const name = event.target.name.value
        const username = event.target.username.value
        const email = event.target.email.value
        const password = event.target.password.value


        registerVisual(name, username, email, password)
    }}>
        <h1 className="title_register">Registro</h1>
        <div className="register_inputs">
            <input className="register_input" type="text" placeholder="user" name="name"/>
            <input className="register_input" type="text" placeholder="username" name="username"/>
            <input className="register_input" type="text" placeholder="e-mail" name="email"/>
            <input className="register_input" type="password" placeholder="password" name="password"/>
        </div>

        <div className="buttons">
          <button className="Register_button" type="submit" >Register</button>
          <Link to="/login"><button className="Login_button" type="button">Login</button></Link>

        </div>

    </form>
    
</>
}

export default Register