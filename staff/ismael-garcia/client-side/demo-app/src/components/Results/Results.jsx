import logger from '../../utils/logger'
import './Results.css'

function Results({ items, onItem, onToggleFav }) {
    logger.debug('Results -> render')

    return items.length ?
        <ul className="home__results container container--vertical">
            {
                items.map(({ id, name, thumbnail, image, price, isFav }) => <li key={id}className="home__results-item" onClick={() => onItem(id)}>
                    <h2>{name}</h2>
                    <span>{price}$</span>
                    <img src={thumbnail || image} alt='' />
                    <button className="button" onClick={event => {
                            event.stopPropagation()

                            onToggleFav(id)
                        }}>{isFav ? '🧡' : '🤍'}</button>
                </li>)
            }
        </ul>
        :
        null
}

export default Results