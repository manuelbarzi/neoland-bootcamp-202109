
function Cart ({items, onVehicle, onAdd, onRemove, onBack}) {

    return items.length ?
    <div className="cart container container--vertical">
        <button className="button" onClick={onBack}>↩</button>
        <ul className="cart__list">
            {
                items.map(({id, name, thumbnail, image, price, qty}) => <li key={id} className="home__result" onClick={() => onVehicle(id)}>
                    <div className="container">
                        <h2>{name}</h2>
                        </div>
                        <img alt='car_image' width="500" className="cart__image" src={thumbnail || image} />
                        <span>{qty} x {price} $</span>
                        <button className='button' onClick={event => {
                            event.stopPropagation()

                            onAdd(id)
                        }}>Add</button>
                        <button className='button' onClick ={event => {
                            event.stopPropagation()

                            onRemove(id)
                        }}>Remove</button>
                        </li> )
            }
        </ul>
        <span className="cart__total">Total {items.reduce((accum, {price, qty}) => accum + price * qty, 0)} $</span>
        <button className='button'>Proceed to checkout</button>
    </div>
    :
    <p>No items to show</p>
}

export default Cart