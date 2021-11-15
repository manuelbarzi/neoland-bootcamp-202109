import { useState, useEffect } from 'react'
import {
    addVehicleToCart,
    retrieveVehiclesCart,
    removeVehicleFromCart
} from '../logic'
function Cart({onItem, startSpinner, endSpinner, onModal,onBack}){
    const [vehicles, setVehicles] = useState()
    useEffect(() => {
        startSpinner()

        try {
            retrieveVehiclesCart(sessionStorage.token, (error, vehicles) => {
                if (error) {
                    endSpinner()

                    onModal(error.message)

                    return
                }

                setVehicles(vehicles)

                endSpinner()
            })
        } catch ({ message }) {
            endSpinner()

            onModal(message, 'warn')
        }
    }, [])

    const addToCart = id => {
        startSpinner()

        try {
            addVehicleToCart(sessionStorage.token, id, error => {
                if (error) {
                    endSpinner()

                    onModal(error.message)

                    return
                }

                setVehicles(vehicles.map(vehicle => {
                    if (vehicle.id === id)
                        return { ...vehicle, qty: vehicle.qty + 1 }

                    return vehicle
                }))

                endSpinner()
            })
        } catch ({ message }) {
            endSpinner()

            onModal(message, 'warn')
        }
    }

    const removeFromCart = id => {
        startSpinner()

        try {
            removeVehicleFromCart(sessionStorage.token, id, error => {
                if (error) {
                    endSpinner()

                    onModal(error.message)

                    return
                }

                setVehicles(vehicles.reduce((accum, vehicle) => {
                    if (vehicle.id === id) {
                        if (vehicle.qty < 2)
                            return accum

                        vehicle = { ...vehicle, qty: vehicle.qty - 1 }
                    }

                    accum.push(vehicle)

                    return accum
                }, []))

                endSpinner()
            })
        } catch ({ message }) {
            endSpinner()

            onModal(message, 'warn')
        }
    }

return<div className='cart container container--vertical'>
    <button className='button' onClick={onBack}>Go Back</button>
    
    {vehicles && vehicles.length ?
            <div className="cart container container--vertical">
                <ul className="cart__list">
                    {
                        vehicles.map(({ id, name, thumbnail, image, price, qty }) => <li key={id} className="home__result" onClick={() => onItem(id)}>
                            <div className="container">
                                <h2>{name}</h2>
                            </div>
                            <img className="cart__image" src={thumbnail || image} />
                            <span>{qty} x {price} $</span>
                            <button className="button button--dark" onClick={event => {
                                event.stopPropagation()

                                addToCart(id)
                            }}>Add</button>
                            <button className="button button--dark" onClick={event => {
                                event.stopPropagation()

                                removeFromCart(id)
                            }}>Remove</button>
                        </li>)
                    }
                </ul>
                <span className="cart__total">Total {vehicles.reduce((accum, { price, qty }) => accum + price * qty, 0)} $</span>
                <button className="button button--dark">Proceed to checkout</button>
            </div>
            :
            null}
</div>


}
export default Cart