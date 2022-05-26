import logger from '../utils/logger'
import './Logo.css'

function Logo() {
    logger.debug('Logo -> render')
    
    return <div className="logo clickable" >
        <h1 className='logo__text logical'>Logical</h1>
        <h1 className='logo__text echo'>Echo</h1>
    </div>
}

export default Logo