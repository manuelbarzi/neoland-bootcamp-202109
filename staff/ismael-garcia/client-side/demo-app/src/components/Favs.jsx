import Results from './Results/Results'
import logger from '../utils/logger.js'

function Favs({ items, onBack, onItem, onToggleFav }) {
    logger.debug('Favs -> render')

    return <>
        <button className='button button--medium' onClick={event => {
            event.preventDefault()

            onBack()
        }}>Go back</button>

        <Results items={items} onItem={onItem} onToggleFav={onToggleFav} />
    </>
}

export default Favs
