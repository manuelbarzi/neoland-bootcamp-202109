function Cart({ items, onItem, OnClickFav, OnAdd, OnRemove, name, OnBackHome }) {
    return items.length ?
        <div className="pagelayout">
            <div className="title layout__title">
                <h1>YOUR CART</h1>
            </div>
            <div className="layout__subtitle">
                <p><strong className="name">{name ? name : 'Name'}</strong> you are only one step
                </p>
            </div>
            <div className='home__results-list'>
                {
                    items.map(item => <div key={item.id} className='home__result' onClick={() => onItem(item.id)}>
                        <h2 className='home__result-title'>{item.name}</h2>
                        <img className='home__result-img' src={item.thumbnail || item.image} ></img>
                        <span className='home__result-price'>{item.qty} x {item.price} $</span>
                        <div>
                            <button className='button--small' onClick={event => {
                                event.stopPropagation()

                                OnAdd(item.id)
                            }}>Add</button>

                            <button className='button--small' onClick={event => {
                                event.stopPropagation()

                                OnRemove(item.id)
                            }}>Remove</button>

                            {/* <button className='button--small' onClick={event => {
                        event.stopPropagation()

                        OnClickFav(item.id)
                    }}>{item.isFav ? '🧡' : '🤍'}</button> */}
                        </div>
                    </div>)
                }
            </div>
            <div className="total-cart">
                <span>TOTAL Items: {items.reduce((acum, {qty} ) => acum + qty, 0)}</span>
                <span>TOTAL Price: {items.reduce((acum, { price, qty }) => acum + price * qty, 0)} $</span>
            </div>
            <div className="layout__buttons--home-low layout__buttons">
                <button className='button' type='button' onClick={() => OnBackHome()}>BACK HOME</button>
            </div>
        </div>
        :
        null
}
export default Cart