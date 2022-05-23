import logger from '../utils/logger'
import './BrandFooter.css'

function BrandFooter() {
    logger.debug('BrandFooter -> render')
    
    return <div className="brand-footer">
        <h1 className='brand-footer__text'>Mango</h1>
    </div>
}

export default BrandFooter