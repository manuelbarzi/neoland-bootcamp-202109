import React from 'react';
import logger from '../logger'
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { FaStore } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function Search({ onSearch, name,  onProfile, goToFavorites, onSignOut, showModal, showSpinner, hideSpinner, onItem }) {
    logger.info("Search -> render")
    const [cartModal, setCartModal] = useState(false)

    const showCart = () => setCartModal(true)

    const closeCart = () => setCartModal(false)
    return <>
        <form className="welcome__search container container--search" onSubmit={event => {
            event.preventDefault()
            const query = event.target.query.value

            onSearch(query)
            event.target.reset()
        }}>
            <input type="text" placeholder="Escribe aquí" name="query" />
            <button className="button button--red">Buscar</button>
            <div className="container--search--heart">
                <span className="cart"> <FaStore onClick={showCart} /></span> <span> <FaHeart /> </span>
            </div>
        </form>
        <div className="welcome container container--vertical">
            <h2> Bienvenido a tu página de inicio <span className="name"> {name} </span></h2>
            <div className="container container--vertical">
                <button type="button" className="button button--red" onClick={onProfile}>Perfil</button>
                <button type="button" className="button button--red" onClick={goToFavorites}>Favoritos</button>
                <button type="button" className="button button--signout" onClick={onSignOut}>Cerrar Sesión</button>
            </div>
        </div>
        <Outlet />
    </>
}

export default Search