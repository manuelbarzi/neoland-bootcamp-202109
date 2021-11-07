function ResultDetails({ detail, onBack }) {
    return (
        <div className="home__detail container container--vertical">
            <button className="button button-medium button" onClick={() => onBack()}>Back</button>
            <h2>{detail.name}</h2>
            <img className="home__detail-image" src={detail.image} alt="" />
            <p>{detail.description}</p>
            <time>{detail.year}</time>
            <span>{detail.price} $</span>
            <span>{detail.color}</span>
            <span>{detail.style}</span>
            <span>{detail.collection}</span>
            <span>{detail.maker}</span>
            <a href={detail.url}>Web</a>
        </div>
    )
}

export default ResultDetails