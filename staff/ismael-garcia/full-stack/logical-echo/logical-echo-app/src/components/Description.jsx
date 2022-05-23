import logger from '../utils/logger'
import './Description.css'

function Description() {
    logger.debug('Description -> render')
    
    return <div className="description">
        <h1 className='description__motto'>Be conscious! Be committed! Join sustainable life!</h1>
        <h2 className='description__text'>Discover the sustainable collections of your beloved brands.</h2>
    </div>
}

export default Description