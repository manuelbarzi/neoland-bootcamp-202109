import logger from '../../utils/logger'
import './Detail.css'

function Detail({ onBack, item: { name, image, year, price, color, style, collection, maker, url } }) {
    logger.debug('Detail -> render')
    
    return <div className="home__detail container container--vertical">
        <button className="button button-medium button" onClick={onBack}>Back to Results</button>
        <h2>{name}</h2>
        <img className="home__detail-image" src={image} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quas sapiente veritatis, magni natus necessitatibus velit aliquam enim iste? Beatae velit explicabo temporibus et blanditiis! Deleniti nemo voluptatem cumque nam.</p>
        <time>{year}</time>
        <span>{price}</span>
        <span>{color}</span>
        <span>{style}</span>
        <span>{collection}</span>
        <span>{maker}</span>
        <a href={url}>original</a>
    </div>
}

export default Detail