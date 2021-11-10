function Detail( { item, goSearch } ) {
    return <>
        <div className="container container--gapped">
            <button className="button" onClick={() => goSearch()}>Go back</button>
            <button className="button" >❤️</button>
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