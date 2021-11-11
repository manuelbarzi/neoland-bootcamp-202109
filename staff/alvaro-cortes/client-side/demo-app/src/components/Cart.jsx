import React from "react"
import "./Cart.css"

function Cart({ closeCart, items, addToCart, onRemove, toCheckout, onItem }) {

    return ( items.length ?
        <div className="content--cart">
            <div className="pop--up--cart">
                <h1 className="cart__title" id="cart-title">Tu carrito <span className="x" onClick={() => closeCart()}>X</span></h1>
                <ul  className="cart__detail">
                    {
                        items.map(({ id, quantity, name, thumbnail, image, price }) => 
                        <li key={id} onClick={() => {onItem(id)}}>
                            <div>
                                <h3>{name}</h3>
                                <img src={thumbnail || image} alt="" width="150px" /><br />
                                <span>Unidades: {quantity}</span><br />
                                <span>Precio: ${price}</span><br />
                                <button className="button--cart" onClick={event => {
                                    event.stopPropagation()

                                    addToCart(id)
                                }}>Agregar</button>
                                <button className="button--cart" onClick={event => {
                                    event.stopPropagation()

                                    onRemove(id)
                                }}>Quitar</button>
                            </div>
                        </li>)
                    }
                    <br />
                    <hr />
                    <span>Total: ${items.reduce((accum, { price, quantity }) => accum + price * quantity, 0)}</span><br />
                    <button className="button--cart--check" onClick={() => toCheckout()}>Procede con el pago</button>
                </ul>
            </div>
        </div>
        :
        <div className="content--cart">
            <div className="pop--up--cart">
                <h1 className="cart__title">Tu carrito está vacio<span className="x2" onClick={() => closeCart()}>X</span></h1>
            </div>
        </div>
    )
}

export default Cart