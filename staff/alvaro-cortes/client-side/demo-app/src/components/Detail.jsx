import logger from '../logger'

function Detail(props) {
    logger.info("Detail -> render")
    return <div className="welcome__details container container--vertical">
    <button className="button" onClick={() => props.backResultList()}> Volver atrás</button>
    <h2>{props.item.name}</h2>
    <img src={props.item.image} alt="" width="300px" />
    <p>{props.item.description}</p>
    <time>{props.item.year}</time>
    <span>{props.item.price}</span>
    <span>{props.item.color}</span>
    <span>{props.item.style}</span>
    <span>{props.item.collection}</span>
    <span>{props.item.maker}</span>
    <a href="">Original</a>
</div>
}

export default Detail