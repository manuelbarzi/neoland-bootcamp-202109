import './Home.css'
import logger from '../logger'

function Detail({ item: { name, image, description, year, price, color, style,collection, maker }, backResultList }) {
    logger.info("Detail -> render")


    return <div className="welcome__details container container--vertical">
    <button className="button" onClick={backResultList}> Volver atrás</button>
    <h2>{name}</h2>
    <img src={image} alt="" width="300px" />
    <p>{description}</p>
    <time>{year}</time>
    <span>{price}</span>
    <span>{color}</span>
    <span>{style}</span>
    <span>{collection}</span>
    <span>{maker}</span>
    <a href="">Original</a>
</div>
}

export default Detail