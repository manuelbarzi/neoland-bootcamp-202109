import AppContext from './AppContext'
import logger from '../logger'
import './Inbox.sass'
import { useState, useContext, useEffect } from 'react'
import NewMessage from './NewMessage'
import OpenMessage from './OpenMessage'
import MyListedMessages from './MyListedMessages'
import { retrieveMessages, retrieveMessage, retrieveUsers } from '../logic'

////MUI
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete';
import MailIcon from '@mui/icons-material/Mail'
import Stack from '@mui/material/Stack';

function Inbox() {


    const { onFlowStart, onFlowEnd, onFeedback } = useContext(AppContext)

    const [view, setView] = useState('my-inbox')
    const goToNewMessage = () => setView('new-message')
    // const goToMessageToRead = () => setView('open-message')
    
    const [messages, setMessages] = useState()
    const [users, setUsers] = useState()
    const [messageToRead, setMessageToRead] = useState([])

    useEffect(async () => {
        logger.debug('Results -> useEffect (componentDidMount)')

        try {
            onFlowStart()

            const res = await retrieveMessages(sessionStorage.token)
            const res2 = await retrieveUsers(sessionStorage.token)

            setUsers(res2)
            setMessages(res)

            onFlowEnd()

        } catch ({ message }) {
            onFlowEnd()

            onFeedback(message, 'warn')
        }
    }, [])

    
    const goToInbox = async() => {
        try {
            onFlowStart()

            const res = await retrieveMessages(sessionStorage.token)
            const res2 = await retrieveUsers(sessionStorage.token)

            setUsers(res2)
            setMessages(res)

            onFlowEnd()

        } catch ({ message }) {
            onFlowEnd()

            onFeedback(message, 'warn')
        }
        setView('my-inbox')
    } 


    const goToMessageToRead = async (id)=>{
debugger
        try{

            const messageToRead = await retrieveMessage(sessionStorage.token, id)
            setMessageToRead(messageToRead)

            setView('open-message')
        } catch ({ message }) {
            onFlowEnd()
            onFeedback(message, 'warn')
        }
        
    }


    return <>
        {view === 'my-inbox' &&
            <div className='inbox-container'>
                <div className='inbox-topbar'>
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" onClick={goToNewMessage} endIcon={<MailIcon />}>
                            New
                        </Button>
                    </Stack>
                </div>
                <div>
                    <MyListedMessages messages={messages} users={users} goToMessageToRead={goToMessageToRead} />
                </div>
            </div>
        }

        {view === 'new-message' &&
            <NewMessage onBack={goToInbox}/>
        }

        {view === 'open-message' &&
            <OpenMessage messageToRead={messageToRead} users={users} setViewInbox={setView}/>
        }
    </>

}

export default Inbox