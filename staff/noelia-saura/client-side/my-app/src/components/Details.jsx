
function Detail({
    item: {
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
    },
    onBack,
    favSelect
}) {
    
    return <div className="home__detail container container--vertical ">
        <h2>{name}</h2>
        <div className='container'>
            <button className="button button-medium button" onClick={onBack}>Back</button>
            <button className="button button-medium button" onClick={() => favSelect(id)}>{isFav ?'❤️' : '🤍'}</button>
        </div>
        <img className="home__detail-image" src={image} alt="" />
        <p>{description}</p>
        <time>{year}</time>
        <span>{price}</span>
        <span>{color}</span>
        <span>{style}</span>
        <span>{collection}</span>
        <span>{maker}</span>
        <a href={url} target='_blank' rel="noreferrer">original</a>
    </div>
}

export default Detail

