import logger from '../logger'

function Logo({ image, text }) {
    logger.info('Logo -> render')
    
    return <div className="logo container">
        <img className="logo__image" src={image} alt='logo: a ladybug' />
        <h1 className="logo__text">{text}</h1>
    </div>
}

export default Logo