import React from 'react';
import { Link, Outlet, Navigate } from 'react-router-dom';
import './Home.css';

function Home() {

    if (sessionStorage.token === undefined)
        return <Navigate to="/" />

    return <>
        <div className='title'></div>
        <nav className="nav__buttons">
            <ul>
                <li><Link to="/home/profile"><button className='button piquito' type="button"><img src="http://localhost:3000/veterinario(4).png" />Mi perfil</button></Link></li>
                <li> <Link to="/home/clientPet"><button className="button piquito" type="button"><img src="http://localhost:3000/veterinario(3).png" />Gestor de Clientes y Mascotas</button></Link></li>
                <li><Link to="../login"><button className='button' type="button"><img src="http://localhost:3000/cerrar-sesion.png" />Cerrar sesión</button></Link></li>

            </ul>
        </nav>
        <div>
            <Outlet />
        </div>

    </>
}


export default Home
