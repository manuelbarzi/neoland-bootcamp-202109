function Detail( { item, goSearch, onToggleFav, onAddToCart } ) {
    return <>
        <div className="container container--gapped">
            <button className="button" onClick={goSearch}>Go back</button>
            <button className="button button--dark" type="button"onClick={() => onAddToCart(item.id)}>Add to cart</button>
            <button className="button" type="button" onClick={()=>onToggleFav (item.id)}>{item.isFav? '❤️' : '🤍'}</button>
        </div>
        <div className="container container--vertical" >
            <h1>{item.name}</h1>
            <img src={item.image} />
            <time>{item.year}</time>
            <p>{item.description}</p>
            <span>{item.price} $</span>
        </div>
    </>

}

export default Detail