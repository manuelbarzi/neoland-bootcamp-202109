function Detail (props) {
    logger.info ('Detail -> render')

    return <div className ="home__detail container container--vertical">
         <h2>{props.item.name}</h2> <button className="button button-medium button" onClick={() => props.backResults()}>Back</button>
        <img className="home__detail-image" src={props.item.image} alt ="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, qui!</p>
        <time>2021</time>
        <span>100 $</span>
        <span>color</span>
        <span>style</span>
        <span>collection</span>
        <span>maker</span>
        <a href="http://">original</a>
    </div>
}