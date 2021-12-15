import logger from '../logger.js'
import './Feedback.sass'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Feedback({ level, message, onAccept }) {
    logger.debug('Feedback -> render')

    if (level === 'success')
        logger.info(message)
    else if (level === 'warn')
        logger.warn(message)
    else if (level === 'error')
        logger.error(message)

    const className = `feedback__text ${level ? `feedback__text--${level}` : ''}`

    return <div className="feedback">
        <div className="panel">
            <p className={className}>{message}</p>
            <Button type="submit" onClick={onAccept}
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >Accept</Button>
            {/* <button className="button button--dark" onClick={onAccept}>Accept</button> */}
        </div>
    </div>
}

export default Feedback