import logger from '../../utils/logger'
import './Spinner.css'

function Spinner() {
    logger.debug('Spinner -> render')
    
    return <div className='spinner container container--vertical container--full'>
        <img className="spinner__image" src="https://www.ithink.co/images/lg.ajax-spinner-preloader.gif" alt="spinner" />
    </div>
}

export default Spinner