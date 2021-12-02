function Detail({
    item: {
        id,
        name,
        image,
        year,
        price,
        color,
        style,
        collection,
        maker,
        url,
        isFav
    },
    onBack,
    onToggleFav,
    onBuyItem

}) {

    return <>
        <div className="home__detail container container--vertical">
            <h2 className="basic-text">{name}</h2>
            <div className="container">
                <button className="button" onClick={onBack}>Go Back</button>
                <a className={isFav ? "like-green" : "like-yellow"} onClick={() => onToggleFav(id)}>{isFav ? '💛' : '💚'}</a>
                <a className="" onClick={event =>{
                        event.stopPropagation()
                        onBuyItem(id)}}>🛒</a>
            </div>
            <img className="home__detail-image" src={image} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Nostrum quas sapiente veritatis, magni natus necessitatibus velit aliquam enim iste?Beatae velit explicabo temporibus et blanditiis!Deleniti nemo voluptatem cumque nam.</p>
            <time className="basic-text">{year}</time>
            <span className="basic-text">{price} $</span>
            <span className="basic-text">{color}</span>
            <span className="basic-text">{style}</span>
            <span className="basic-text">{collection}</span>
            <span className="basic-text">{maker}</span>
            <a href={url}>original</a>
        </div>
    </>
}

export default Detail