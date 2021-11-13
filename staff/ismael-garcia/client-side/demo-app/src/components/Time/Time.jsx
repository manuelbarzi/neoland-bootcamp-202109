import { useState, useEffect } from 'react'
import logger from '../../utils/logger'
import './Time.css'

function Time() {
    logger.debug('Time -> render')

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        logger.debug('Time -> useEffect')
        
        setInterval(() => setTime({ time: new Date() }), 1000)
        // this.setState({ time: new Date })
    }, [])

    return <>
        <time className="time container">{time.toLocaleTimeString()}</time>
    </>
    
}

export default Time