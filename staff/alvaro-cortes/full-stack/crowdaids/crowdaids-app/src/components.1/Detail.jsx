import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { retrieveVehicle, addComent, retrieveComment, toggleFavoriteVehicle, addToCart, removeComment } from '../logic';
import './Home.css'

import logger from '../logger'

function Detail({ onGoBack, showSpinner, showModal, hideSpinner }) {
    logger.info('Detail -> render')

    const [added, setAdded] = useState(false)
    const [vehicle, setVehicle] = useState()
    const [comments, setComments] = useState([])
    const { id } = useParams()

    const addedTo = () => setAdded(true)

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

                try {
                    retrieveComment(sessionStorage.token, id, (error, text) => {
                        if (error) {
                            showModal(error.message)

                            hideSpinner()

                            return
                        }
                        hideSpinner()

                        setComments(text)
                    })

                } catch ({ message }) {
                    showModal(message)

                    hideSpinner()
                }

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

    const addComentToVehicle = (id, text) => {
        showSpinner()

        try {
            addComent(sessionStorage.token, id, text, error => {
                if (error) {
                    hideSpinner()

                    showModal(error.message)

                    return
                }

                hideSpinner()

                setComments(comments.map(comments => {
                    if (comments.id === id)
                        return { ...comments, text: text.push(text) }

                    return comments
                }))
            })

        } catch ({ message }) {
            hideSpinner()

            showModal(message)
        }

    }

    const removeComments = (id, text) => {
        //showSpinner()

        try {
            removeComment(sessionStorage.token, id, text, error => {
                if (error) {
                    showModal(error.message)

                    hideSpinner()

                    return
                }

                hideSpinner()

                setComments(comments.map(comments => {
                    const comment = comments
                    if (comment === text) {

                        //const index = comment.indexOf(text)

                        return null
                    }

                    return comments
                }))

            })

        } catch ({ message }) {
            showModal(message)

            hideSpinner()
        }
    }

    function list(comments) {
        const texts = comments

        const list = []

        for (let i = 0; i < texts.length; i++) {
            list.push(
                <div className="container container--vertical container--comment">
                    <li>
                        <h5>Comentario # {i + 1}
                            <span className="button--comment">
                                <button className="button--cart" onClick={() => removeComments(id, texts[i])}>Eliminar</button>
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
            }}> Agregar al carrito </button>
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

                addComentToVehicle(id, textarea)
            }}>
                <textarea name="textarea" id="textarea" rows="10" cols="50" placeholder="Deja tu comentario aquí."></textarea>
                <button type="submit" className="button button--red">Enviar</button>
            </form>
            {comments && comments.length ?
            <ul className="welcome__results--ul ">
                {
                    list(comments)
                }
            </ul>
            : 
            null
            }
        </>}
    </div>
}

export default Detail