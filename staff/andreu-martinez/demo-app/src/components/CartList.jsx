function CartList({ items, onItem }) {

    return items.length ?
        <ul className="home__results container container--vertical">
            {
                items.map(({ id, name, thumbnail, image, price }) => <li key={id} className="home__result" onClick={() => onItem(id)}>
                <div className="container">
                    <h2 className="basic-text">{name}</h2>
                </div>
                <img src={thumbnail || image} />
                <p>{price}</p>
            </li>)
            }   
        </ul>
        :
        null
}

export default CartList