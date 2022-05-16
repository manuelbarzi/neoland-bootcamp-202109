import logger from '../utils/logger'
import './HamburgerLine.css'

function HamburgerLine() {
    logger.debug('HamburgerLine -> render')
    
    return <div className="hamburger-line">
        <label htmlFor="" className='hamburger-line__label'>
            <span>Scroll</span>
        </label>
    </div>
}

export default HamburgerLine