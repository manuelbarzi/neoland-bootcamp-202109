import React from 'react';
import './Home.sass'
import logger from '../logger'
import { useQuery } from '../hooks'
import { useState, useEffect } from 'react'
import { searchBeaches, toggleFavoriteBeach } from '../logic'
import { useContext } from 'react'
import { IconContext } from "react-icons";
import { BiStar } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";
import AppContext from './AppContext'

function Results({ onItem, onToggleFavorite }) {
    logger.info("Results -> render")

    const { showSpinner, hideSpinner, showModal } = useContext(AppContext)

    const [beaches, setBeaches] = useState({})

    const _query = useQuery()

    const query = _query.getParam('q')

    useEffect(async () => {

        const { token } = sessionStorage

        if (token) {
            try {
                showSpinner()

                const beaches = await searchBeaches(token, query)

                hideSpinner()

                setBeaches(beaches)

            } catch ({ message }) {
                hideSpinner()

                showModal("Error", message)
            }
        }
    }, [query])

    const toggleFavorite = async (id) => {

        try {
            showSpinner()

            await toggleFavoriteBeach(sessionStorage.token, id)

            hideSpinner()

            /*beaches.map((beach) => {
                beach.isFav = !beach.isFav
            })
            setBeaches({ ...beaches, beaches: beaches})*/


        } catch ({ message }) {
            hideSpinner()

            showModal(message)
        }
    }

    return beaches && beaches.length ?
        <div className="container__results">
            <ul className="container__results--ul">
                <h1>Resultados de busqueda</h1><hr id="hr--busqueda" />
                {
                    beaches.map(({ _id, _source: { name, breadCrumbs }, isFav }) => <li key={_id} onClick={() => { onItem({ name, breadCrumbs }, _id) }}>
                        <div>
                            <IconContext.Provider value={{ color: '#d8a600', size: "1em", style: { verticalAlign: 'middle' } }}>
                                <h2 className="title--search"><span onClick={event => {
                                    event.stopPropagation()

                                    toggleFavorite(_id)
                                }}>{isFav ? <BsStarFill /> : <BiStar />}</span>{name} | <span className="location--name"> {breadCrumbs} </span> </h2>
                            </IconContext.Provider>
                        </div>
                    </li>)
                }
            </ul>
        </div>
        :
        null
}

export default Results