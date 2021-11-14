import logger from '../logger.js'
import "./style.css"

function FeedBack({level, message, onAccept}){
    if(level === 'success')
    logger.info(message)
    else if(level==='warn')
    logger.warn(message)
    else if (level === 'error')
    logger.error(message)

    const className = `feedback__text ${level ? `feedback__text--${level}` : ''}`

    return <div className="feedback container container--vertical container--full">
        <div className="panel container container--vertical container--gapped">
            <p className={className}>{message}</p>
            <button className="button" onClick={onAccept}>Accept</button>
        </div>
    </div>
}

export default FeedBack