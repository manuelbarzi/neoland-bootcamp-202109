import React from "react"
import { useState, useEffect } from "react"
import {
    addToCart,
    retrieveCartVehicles,
    removeFromCart
} from '../logic'
import "./Cart.css"

function Cart({ closeCart, onItem, showSpinner, hideSpinner, showModal }) {

    const [vehicles, setVehicles] = useState()

    useEffect(() => {
        showSpinner()

        try {
            retrieveCartVehicles(sessionStorage.token, (error, vehicles) => {
                if (error) {
                    hideSpinner()

                    showModal(error.message)

                    return
                }

                hideSpinner()

                setVehicles(vehicles)

            })

        } catch ({ message }) {
            hideSpinner()

            showModal(message)
        }
    }, [])

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

                setVehicles(vehicles.map(vehicle => {
                    if (vehicle.id === id)
                        return { ...vehicle, quantity: vehicle.quantity + 1 }

                    return vehicle
                }))
            })

        } catch ({ message }) {
           hideSpinner()

            showModal(message)
        }
    }

    const onRemoveFromCart = id => {
        showSpinner()

        try {
            removeFromCart(sessionStorage.token, id, error => {
                if (error) {
                    hideSpinner()

                    showModal(error.message)

                    return
                }

                setVehicles(vehicles.reduce((accum, vehicle) => {
                    if (vehicle.id === id) {
                        if (vehicle.quantity < 2)
                            return accum

                        vehicle = { ...vehicle, quantity: vehicle.quantity - 1 }
                    }

                    accum.push(vehicle)

                    return accum
                }, []))

                hideSpinner()
            })
        } catch ({ message }) {
            hideSpinner()

            showModal(message)
        }
    }

    return <> 
        {vehicles && vehicles.length ?
        <div className="content--cart">
            <div className="pop--up--cart">
                <h1 className="cart__title" id="cart-title">Tu carrito <span className="x" onClick={() => closeCart()}>X</span></h1>
                <ul  className="cart__detail">
                    {
                        vehicles.map(({ id, quantity, name, thumbnail, image, price }) => 
                        <li key={id} onClick={() => {onItem(id)}}>
                            <div>
                                <h3>{name}</h3>
                                <img src={thumbnail || image} alt="" width="150px" /><br />
                                <span>Unidades: {quantity}</span><br />
                                <span>Precio: $ {price}</span><br />
                                <button className="button--cart" onClick={event => {
                                    event.stopPropagation()

                                    addVehicleToCart(id)
                                }}>Agregar</button>
                                <button className="button--cart" onClick={event => {
                                    event.stopPropagation()

                                    onRemoveFromCart(id)
                                }}>Quitar</button>
                            </div>
                        </li>)
                    }
                    <br />
                    <hr />
                    <span>Total: ${vehicles.reduce((accum, { price, quantity }) => accum + price * quantity, 0)}</span><br />
                    <button className="button--cart--check" onClick={() => showModal("Éxito", "Tu compra fue realizada.")}>Procede con el pago</button>
                </ul>
            </div>
        </div>
        :
        <div className="content--cart">
            <div className="pop--up--cart">
                <h1 className="cart__title">Tu carrito está vacio<span className="x2" onClick={() => closeCart()}>X</span></h1>
            </div>
        </div>}
    
    </>
}

export default Cart