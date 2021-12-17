function ResultDetails({ item :{
    id,
    name, 
    image, 
    description,
     year, 
     price, 
     color, 
     style, 
     collection,
    maker,
    url,
    isFav
}, onBack, onToggleFav, onAddToCart }) {
    return (
        <div className="home__detail container container--vertical">
            <button className="button button-medium button" onClick={() => onBack()}>Back</button>
            <h2>{name}</h2>
            <button className="button" onClick={() => onAddToCart(id)}>🛒</button>
            <button className="button"onClick={() =>   onToggleFav (id)}>{isFav ? '💜' : '🤍'}</button>
            <img className="home__detail-image" src={image} alt="" width="500px" />
            <p>{description}</p>
            <time>{year}</time>
            <span>${price}</span>
            <span>{color}</span>
            <span>{style}</span>
            <span>{collection}</span>
            <span>{maker}</span>
            <a href={url}>Web</a>
        </div>
    )
}


export default ResultDetails