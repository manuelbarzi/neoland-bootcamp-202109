import logger from '../utils/logger'
// import './Logo.css'

function Logo({ image, text }) {
    logger.debug('Logo -> render')
    
    return <div className="logo container">
        <img className="logo__image" src={image} alt='logo: a natural cotton plant' />
        <h1 className="logo__text">{text}</h1>
    </div>
}

export default Logo