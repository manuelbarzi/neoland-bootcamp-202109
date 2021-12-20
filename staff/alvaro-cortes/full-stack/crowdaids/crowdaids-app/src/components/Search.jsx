import React from 'react';
import logger from '../logger'
import { IconContext } from "react-icons";
import { BsPersonCircle } from "react-icons/bs";
import { Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react'
import AppContext from './AppContext'
import ModalProfile from './ModalProfile';
import cablack from '../assets/cablack.png'

function Search({ onSearch, goToProfile, user }) {
    logger.info("Search -> render")

    const { goToHome } = useContext(AppContext)

    const [modalProfile, setModalProfile] = useState(false)
    const navigate = useNavigate()

    const showModalProfile = () => setModalProfile(true)

    const closeModalProfile = () => setModalProfile(false)

    const goToFavorites = () => navigate('/favs')

    return <>
        <IconContext.Provider value={{ color: "black", size: "1.2em", style: { verticalAlign: 'middle' }, className: "iconP" }}>
            <form className="container container--search" onSubmit={event => {
                event.preventDefault()
                const query = event.target.query.value

                onSearch(query)
                event.target.reset()
            }}>
                <button id="logoNav" onClick={() => goToHome()}><img src={cablack} style={{width: "35px"}}/></button>
                <span><input id="input--search" type="text" placeholder="Busca una playa" name="query" />
                <button className="button button--grey">Buscar</button></span> 
                <span className="container--name"> Bienvenido, {user} <BsPersonCircle onMouseOver={showModalProfile} /></span>
            </form>
            <div className="welcome container container--vertical">

            </div>

            {modalProfile && <ModalProfile 
            closeProfile={closeModalProfile}
            goToFavorites={goToFavorites}
            goToProfile={goToProfile} />}
            <Outlet />
        </IconContext.Provider>
    </>
}

export default Search