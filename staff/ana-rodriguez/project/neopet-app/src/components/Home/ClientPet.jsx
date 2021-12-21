import React from 'react';
import { Link, Outlet, Navigate } from 'react-router-dom';


function ClientPet() {

    //   if(typeof sessionStorage.token === 'string')
    //   return<Navigate to ="/home"/>


    return <>
        <nav className="nav__buttons">
            <ul>
                <li><Link to='/home/clientPet/registerClientPet'><button className="button"><img src="http://localhost:3000/registro.png" />Registro de Cliente y Mascota</button></Link></li>
                <li><Link to='/home/clientPet/search'><button className="button"><img src="http://localhost:3000/buscar.png" />Buscar cliente o mascota</button></Link></li>
                <li><Link to='/home'> <button className="button"><img src="http://localhost:3000/atras.png" />Volver</button></Link></li>
            </ul>
        </nav>
        <div id='search__container'>
            <Outlet />
        </div>
    </>
}
export default ClientPet