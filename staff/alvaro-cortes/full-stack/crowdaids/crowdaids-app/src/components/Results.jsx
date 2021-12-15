import React from 'react';
import './Home.sass'
import logger from '../logger'
import { useQuery } from '../hooks'
import { useState, useEffect } from 'react'
import { searchBeaches } from '../logic'
import { useContext } from 'react'
import AppContext from './AppContext'

function Results({ onItem, onToggleFavorite, nameBeach }) {
    logger.info("Results -> render")

    const { showSpinner, hideSpinner, showModal, goToItem } = useContext(AppContext)

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

    return beaches && beaches.length ?
        <div className="container__results">
            <ul className="container__results--ul">
                <h1>Resultados de busqueda</h1><hr id="hr--busqueda" />
                {
                    beaches.map(({ _id, _source: { name, breadCrumbs }, isFav }) => <li key={_id} onClick={() => { onItem({name, breadCrumbs}, _id) }}>
                        <div>
                            <h2 className="title--search"><span onClick={event => {
                                event.stopPropagation()

                                onToggleFavorite(_id)
                            }}>{isFav ? '❤️' : '🤍'}</span>{name} | <span className="location--name"> {breadCrumbs} </span> </h2>
                        </div>
                    </li>)
                }
            </ul>
        </div>
        :
        null
}

export default Results