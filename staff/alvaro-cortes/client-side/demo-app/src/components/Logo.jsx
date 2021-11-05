import logger from '../logger'

function Logo({ image }) {
    logger.info('Logo -> render')

    return <div className="logo container">
        <img className="logo__image" src={image} />
    </div>
}

export default Logo