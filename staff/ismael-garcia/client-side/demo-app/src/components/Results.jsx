import logger from '../logger'

function Results({ items, onItem }) {
    logger.info('Results -> render')

    return items.length ?
        <ul className="home__results container container--vertical">
            {
                items.map(({ id, name, thumbnail, price }) => <li className="home__results-item" onClick={() => onItem(id)}>
                    <h2>{name}</h2>
                    <img src={thumbnail} alt='' />
                    <span>{price}</span>
                </li>)
            }
        </ul>
        :
        null
}

export default Results