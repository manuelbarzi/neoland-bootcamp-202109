import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { retrieveVehicle, addComent, retrieveComment, toggleFavoriteVehicle, addToCart, removeComment } from '../logic';
import { useDispatch, useSelector } from 'react-redux'
import { createNote, initNotes, removeNote } from './../reducers/noteReducer'
import './Home.css'
import AddedToCart from './Added-to-cart';

import logger from '../logger'

function Detail({ onGoBack, showSpinner, showModal, hideSpinner }) {
    logger.info('Detail -> render')

    const notes = useSelector(state => state)
    const dispatch = useDispatch()

    const [added, setAdded] = useState(false)
    const [vehicle, setVehicle] = useState()
    const { id } = useParams()

    const addedTo = () => setAdded(true)

    useEffect(() => {
        dispatch(initNotes(sessionStorage.token, id))
    }, [dispatch])

    useEffect(() => {
        showSpinner()

        try {
            retrieveVehicle(sessionStorage.token, id, (error, vehicle) => {
                if (error) {
                    hideSpinner()

                    showModal("Error", error.message)

                    return
                }
                hideSpinner()

                setVehicle(vehicle)
            })
        } catch ({ message }) {

            showModal("Error", message)

            hideSpinner()
        }
    }, [id])

    const toggleFavorite = id => {

        showSpinner()

        try {
            toggleFavoriteVehicle(sessionStorage.token, id, error => {
                if (error) {
                    hideSpinner()

                    showModal(error.message)

                    return
                }
                setVehicle({ ...vehicle, isFav: !vehicle.isFav })

                hideSpinner()
            })
        } catch ({ message }) {
            hideSpinner()

            showModal(message)
        }
    }

    const addVehicleToCart = id => {
        showSpinner()
        try {
            addToCart(sessionStorage.token, id, error => {
                if (error) {

                    hideSpinner()

                    showModal(error.message)

                    return
                }
                hideSpinner()
            })
        } catch ({ message }) {
            hideSpinner()

            showModal(message)
        }
    }

    const addNote = async (id, text) => {
        showSpinner()
        try {
            hideSpinner()

            dispatch(createNote(text, id, sessionStorage.token))

        } catch ({ message }) {
            hideSpinner()

            showModal(message)
        }
    }

    const deleteNote = async (id, text, indice) => {
        showSpinner()
        try {

            hideSpinner()

            dispatch(removeNote(text, id, indice, sessionStorage.token))

        } catch ({ message }) {
            showModal(message)

            hideSpinner()
        }
    }

    const list = (notes) => {
        const texts = notes.text
        const id = notes.id

        const list = []

        for (let i = 0; i < texts.length; i++) {
            list.push(
                <div className="container container--vertical container--comment">
                    <li>
                        <h5>Comentario # {i + 1}
                            <span className="button--comment">
                                <button className="button--cart" onClick={() => deleteNote(id, texts[i], i)}>Eliminar</button>
                            </span>
                        </h5> <hr className="hr--comment" />
                        <p className="container--comment--p">{texts[i]}</p>
                    </li>
                </div>)
        }

        return (
            <div>{list}</div>
        )
    }

    return <div className="welcome__details container container--vertical">
        {vehicle && <>
            <button className="button" onClick={onGoBack}> Volver atrás</button>
            <button className="button button--red" onClick={() => {
                addVehicleToCart(id);
                addedTo();
            }}> Agregar al carrito <span>{added && <AddedToCart />}</span></button>
            <span onClick={() => toggleFavorite(id)}>{vehicle.isFav ? '❤️' : '🤍'}</span>
            <h2>{vehicle.name}</h2>
            <img src={vehicle.image} alt="" width="300px" />
            <p>{vehicle.description}</p>
            <time>{vehicle.year}</time>
            <span>{vehicle.price}</span>
            <span>{vehicle.color}</span>
            <span>{vehicle.style}</span>
            <span>{vehicle.collection}</span>
            <span>{vehicle.maker}</span>
            <a href={vehicle.url}>Original</a>

            <form className="welcome__details container container--vertical" onSubmit={event => {
                event.preventDefault()

                const textarea = event.target.textarea.value

                addNote(id, textarea)

                event.target.reset()
            }}>
                <textarea name="textarea" id="textarea" rows="10" cols="50" placeholder="Deja tu comentario aquí."></textarea>
                <button className="button button--red">Enviar</button>
            </form>
            {notes?.text && notes?.text.length ?
                <ul className="welcome__results--ul ">
                    {
                        list(notes)
                    }
                </ul>
                :
                null
            }
        </>}
    </div>
}

export default Detail