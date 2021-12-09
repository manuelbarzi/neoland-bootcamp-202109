import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Landing.css'


function Landing({onRegister, onLogin}){

return <>
    <div className="landing_container">
        <div className="title_landing">
            <h1>Bienvenido a NeoPet!!</h1>
           </div>
     <div className="landing_buttons">
           <Link to="/register"><button className="register__button">Registro</button></Link>
           <Link to="/login"><button className="button__login">Acceso</button></Link>
        </div>
             <div>
                <Outlet />
            </div>
    </div>

</>
}
export default Landing

