function Detail(props){
    return <>
        <button className="button" onClick ={() => props.goSearch()}>Go back</button>
        <div className="container container--vertical" >
        <h1>{props.item.name}</h1>
        <img src= {props.item.image}/>
        <time>{props.item.year}</time>
        <p>{props.item.description}</p>
        <span>{props.item.price} $</span>
        </div>
    </>

}

export default Detail