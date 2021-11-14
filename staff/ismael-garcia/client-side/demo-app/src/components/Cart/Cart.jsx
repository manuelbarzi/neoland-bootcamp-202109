import logger from '../../utils/logger.js'
import { useState, useEffect } from 'react'
import { 
    addVehicleToCart,
    retrieveVehiclesCart,
    removeVehicleFromCart
} from '../../logic'
import './Cart.css'

function Cart({ onItem, onBack, onFlowStart, onFlowEnd, onModal }) {
    logger.debug('Cart -> render')

    const [vehicles, setVehicles] = useState()

    useEffect(() => {
        onFlowStart()

        try {
            retrieveVehiclesCart(sessionStorage.token, (error, vehicles) => {
                if (error) {
                    onFlowEnd()

                    onModal(error.message)

                    return
                }

                setVehicles(vehicles)

                onFlowEnd()
            })
        } catch ({ message }) {
            onFlowEnd()

            onModal(message, 'warn')
        }
    }, [])

    const addToCart = id => {
        onFlowStart()

        try {
            addVehicleToCart(sessionStorage.token, id, error => {
                if (error) {
                    onFlowEnd()

                    onModal(error.message)

                    return
                }

                setVehicles(vehicles.map(vehicle => {
                    if (vehicle.id === id)
                        return { ...vehicle, qty: vehicle.qty + 1}

                    return vehicle 
                }))

                onFlowEnd()
            })
        } catch ({ message }) {
            onFlowEnd()

            onModal(message, 'warn')
        }
    }

    const removeFromCart = id => {
        onFlowStart()

        try {
            removeVehicleFromCart(sessionStorage.token, id, error => {
                if (error) {
                    onFlowEnd()

                    onModal(error.message)

                    return
                }

                setVehicles(vehicles.reduce((accum,vehicle) => {
                    if (vehicle.id === id) {
                        if (vehicle.qty < 2)
                            return accum

                        vehicle = { ...vehicle, qty: vehicle.qty - 1 }
                    } 
                    
                    accum.push(vehicle) // Estudiar esta lógica

                    return accum
                }, []))

                onFlowEnd()
            })
        } catch ({ message }) {
            onFlowEnd()

            onModal(message, 'warn')
        }
    }

    return <>
        <button type="button" className="button button--medium button--dark" onClick={onBack}>Go Back</button>

        {vehicles && vehicles.length ?
            <div className="cart container container--vertical">
                <ul className="cart__list">
                    {
                        vehicles.map(({ id, name, thumbnail, image, price, qty }) => <li key={id}className="home__results-item" onClick={() => onItem(id)}>
                            <div className="container">
                                <h2>{name}</h2>
                            </div>
                            <img src={thumbnail || image} alt='' />
                            <span>{qty} x {price}$</span>
                            <button className="button button--medium button--dark" onClick={event => {
                                    event.stopPropagation()

                                    addToCart(id)
                                }}>Add</button>
                            <button className="button button--medium button--warning" onClick={event => {
                                    event.stopPropagation()

                                    removeFromCart(id)
                                }}>Remove</button>
                        </li>)
                    }
                </ul>
                <span className="cart__total">Total:{vehicles.reduce((accum, { price, qty }) => accum + price * qty, 0)}$</span>
                <button type="button" className="button button--medium button--dark">Proceed to pay</button>
        </div>
        :
        null}
    </> 
}

export default Cart