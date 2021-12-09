import React from 'react';
import { Link, Outlet, Navigate} from 'react-router-dom';
import './Home.css';

function Home() {

    if(sessionStorage.token === undefined)
        return <Navigate to = "/"/>

    return <>
        
            <nav className="nav__buttons">
                <Link to="/home/profile"><button className='button' type="button"><img src="veterinario(4).png"/>Mi Perfil</button></Link>
                <Link to="../login"><button className='button' type="button">Salir</button></Link>
               <Link to="/home/clientPet"><button className="button" type="button"><img src="veterinario(3).png"/>Clientes y Mascotas</button></Link>
                
            </nav>
            <div>
                <Outlet />
            </div>
    
    </>
}


export default Home
