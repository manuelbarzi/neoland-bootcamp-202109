import React from 'react';
import { Link, Outlet,Navigate } from 'react-router-dom';


function ClientPet() {
 
    //   if(typeof sessionStorage.token === 'string')
    //   return<Navigate to ="/home"/>

    
    return <>
        <nav className="buttons">
            <Link to='/home/clientPet/registerClientPet'> <button className="button">Registro de Cliente y Mascota</button></Link>
            <Link to='/home/clientPet/search'><button className="button">Buscar</button></Link>
            <Link to='/home/clientPet/ficha' ><button className="button">Ficha</button></Link>
            <Link to='/home'> <button className="button">Salir</button></Link>
        </nav>
        <div>
            <Outlet />
        </div>
    </>
}
export default ClientPet