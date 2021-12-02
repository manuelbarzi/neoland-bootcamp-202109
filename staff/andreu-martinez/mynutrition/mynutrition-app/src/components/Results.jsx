function Results({ items, onItem, onToggleFav }) {

    return items.length ?
        <ul className="home__results container test">
            {
                items.map(({ id, name, thumbnail, image, price, isFav }) => <li key={id} className="home__result" onClick={() => onItem(id)}>
                <div className="container test">
                    <h2 className="basic-text">{name}</h2>
                    <a className={isFav ? "like-green" : "like-yellow"} onClick={event => {
                        event.stopPropagation()

                        onToggleFav(id)
            
                    }}>{isFav ? '💛' : '💚'}</a>
                    
                </div>
                <img src={thumbnail || image} />
                <p>{price}</p>
            </li>)
            }   
        </ul>
        :
        null
}

export default Results