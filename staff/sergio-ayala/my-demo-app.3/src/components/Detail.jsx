function Detail({OnBackList, OnClickFav, item:{
    id,
    name,
    image,
    year,
    price,
    color,
    style,
    collection,
    maker,
    description,
    url,
    isFav

}}) {
    return <div className="home__detail">
        <div className="buttons-detail">
        <button type='button' className='button'onClick={OnBackList}>Back</button>
        <button type='button' className='button'onClick={()=> OnClickFav(id)}>{isFav ? '🧡' : '🤍'}</button>
        </div>
        <h2>{name}</h2>
        <img className="home__detail-image" src={image} alt=""></img>

        {/* <div className="home__detail-main"> */}
            <span>{maker}</span>
            <time>{year}</time>
            <span>{price} $</span>
        {/* </div> */}

        {/* <div className="home__detail-second"> */}
            <span>{color}</span>
            <span>{style}</span>
            <span>{collection}</span>
        {/* </div> */}
        <p>{description}</p>
        <a href={url}>original</a>
    </div>

}

export default Detail