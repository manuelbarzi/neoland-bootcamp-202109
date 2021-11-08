import logger from '../../utils/logger'
import './Results.css'

function Results({ items, onItem, onToggleFav }) {
    logger.debug('Results -> render')

    return items.length ?
        <ul className="home__results container container--vertical">
            {
                items.map(({ id, name, thumbnail, image, price, isFav }) => <li className="home__results-item" onClick={() => onItem(id)}>
                    <h2>{name}</h2>
                    <button className="button" onClick={event => {
                            event.stopPropagation()

                            onToggleFav(id)
                        }}>{isFav ? '🧡' : '🤍'}</button>
                    <img src={thumbnail || image} alt='' />
                    <span>{price}</span>
                </li>)
            }
        </ul>
        :
        null
}

export default Results