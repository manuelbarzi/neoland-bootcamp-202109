import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css'


function Landing({onRegister, onLogin}){

return <>
    <div className="landing_container">
        <div className="title_landing">
            <h1>Welcome!!</h1>
           </div>
           <div className="parrafo">
            <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit netus ac euismod aliquet, quisque eu condimentum urna proin. Consequat feugiat vivamus eu himenaeos curae platea, diam lacinia tristique lacus per imperdiet integer, habitasse convallis curabitur ligula a.</p>
        </div>

        <div className="landing_buttons">
           <Link to="/register"><button className="register__button">Register</button></Link>
           <Link to="/login"><button className="button__login">Login</button></Link>
        </div>
    </div>

</>
}
export default Landing

