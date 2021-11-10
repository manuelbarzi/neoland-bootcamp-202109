import React from "react"
import { useState } from "react"
import { addToCart } from "../logic"
import "./Cart.css"

function Cart({ closeCart, items, onAddToCart }) {

    const [total, setTotal] = useState(null)

    return ( 
        <div className="content--cart">
            <div className="pop--up--cart">
                <h1 className="cart__title" id="cart-title">Tu carrito <span className="x" onClick={() => closeCart()}>X</span></h1>
                <ul  className="cart__detail">
                    {
                        items.map(({ id, quantity, name, thumbnail, image, price }) => 
                        <li>
                            <div>
                                <h3>{name}</h3>
                                <img src={thumbnail || image} alt="" width="150px" /><br />
                                <span>Unidades: {quantity}</span><br />
                                <span>Precio: ${price}</span><br />
                                <button className="button--cart" onClick={event => {
                                    event.stopPropagation()

                                    onAddToCart(id)
                                }}>Agregar</button>
                                <button className="button--cart">Quitar</button>
                            </div>
                        </li>)
                    }
                    <br />
                    <hr />
                    <span>Total: ${items.reduce((accum, { price, quantity }) => accum + price * quantity, 0)}</span>
                </ul>
            </div>
        </div>

    )
}

export default Cart