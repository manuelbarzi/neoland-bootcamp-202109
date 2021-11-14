function Cart ({items, onItem, onBack, onAdd, onRemove}){
        return items.length ?
        <div className="cart container container--vertical">
            <button className="button" onClick={onBack}>Go back</button>
            <ul>
                {
                    items.map(({id, name, thumbnail, image, price, qty}) => <li key={id} className="home__result" onClick={() => onItem(id)}>
                        <div className="container container--vertical">
                            <h2 className="basic-text">{name}</h2>
                        </div>
                        <img className="cart__image" src={thumbnail || image} />
                        <span className="basic-text">{qty}x{price} €</span>
                        <button className="button" onClick={event => {
                            event.stopPropagation()
                            onAdd(id)
                        }}>Add</button>
                        <button className="button" onClick={event => {
                            event.stopPropagation()
                            onRemove(id)
                        }}>Remove</button>
                         </li>)
                }
            </ul>
            {/* <span className="basic-text">Total</span> */}
         </div>
        :
        <p>No vehicles to show</p>

}
 export default Cart