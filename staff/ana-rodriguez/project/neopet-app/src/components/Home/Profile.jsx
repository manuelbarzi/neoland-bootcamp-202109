import React from 'react';
import { Link, Outlet, Navigate } from 'react-router-dom';
import './Home.css';


function Profile() {

    //Comprobar si hay token

    return <>
        <nav className="nav__buttons">
            <ul>
           <li><Link to='/home/profile/changepass'> <button className="button"><img src="http://localhost:3000/changePass.png" />Cambio contraseña</button></Link></li>
           <li><Link to='/home/profile/unregister' ><button className="button"><img src="http://localhost:3000/emoji-sad.png"/>Unregister</button></Link></li>
            </ul>
        </nav>
        <div>
            <Outlet />
        </div>
    </>
}
export default Profile