function Detail(props) {
    return <div className="home__detail">
        <button className='button'onClick={()=> props.OnBackList()}>Back</button>
        <h2>{props.item.name}</h2>
        <img className="home__detail-image" src={props.item.image} alt=""></img>

        {/* <div className="home__detail-main"> */}
            <span>{props.item.maker}</span>
            <time>{props.item.year}</time>
            <span>{props.item.price} $</span>
        {/* </div> */}

        {/* <div className="home__detail-second"> */}
            <span>{props.item.color}</span>
            <span>{props.item.style}</span>
            <span>{props.item.collection}</span>
        {/* </div> */}
        <p>{props.item.description}</p>
        <a href={props.item.url}>original</a>
    </div>

}