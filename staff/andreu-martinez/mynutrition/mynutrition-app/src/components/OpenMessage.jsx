import { useState, useContext, useEffect } from 'react'
import logger from '../logger'
import './OpenMessage.sass'
import { sendMessage, retrieveUsers } from '../logic'
import AppContext from './AppContext'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function OpenMessage({ messageToRead }) {

    const { id, from, body, subject, sentDate} = messageToRead

    const { onFlowStart, onFlowEnd, onFeedback } = useContext(AppContext)
    const [user, setUser] = useState()

    useEffect(() => {
        logger.debug('Results -> useEffect (componentDidMount)')
        debugger
        setUser(retrieveUsers(sessionStorage.token, messageToRead.from))
        
    }, [])

    return <>
        <div className="message--container">
            <div className="message--topbar">
                {subject}
            </div>
            <div className="message--from-date">
                <div>{from}</div>
                <div>{sentDate}</div>
            </div>
            <div className='message--body'>
                {body}
            </div>
        </div>

    </>
        
}

export default OpenMessage