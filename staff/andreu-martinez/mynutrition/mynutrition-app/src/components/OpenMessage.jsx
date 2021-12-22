import { useState, useContext, useEffect } from 'react'
import AppContext from './AppContext'
import logger from '../logger'
import './NewMessage.sass'
import './OpenMessage.sass'
import { retrieveUsers, retrieveMessagesChain } from '../logic'
import NewMessage from './NewMessage'

/// MUI
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import MailIcon from '@mui/icons-material/Mail'
import Stack from '@mui/material/Stack';

function OpenMessage({ messageToRead, users, setViewInbox }) {

    const { id, parent, from, body, subject, sentDate } = messageToRead

    const [view, setView] = useState('inbox')
    const [backButton, setBackButton] = useState()
    const goToNewMessage = () => {
        setBackButton('invisible')
        setView('new-message')
    }
    const hideNewMessage = () => setView('')

    const { goToProfile, onFlowStart, onFlowEnd, onFeedback } = useContext(AppContext)

    const [messageChain, setMessageChain] = useState([])

    useEffect(async () => {
        logger.debug('Results -> useEffect (componentDidMount)')

        try {

            onFlowStart()

            debugger
            const res2 = await retrieveMessagesChain(sessionStorage.token, id)
            setMessageChain(res2)

            onFlowEnd()

        } catch ({ message }) {
            onFlowEnd()

            onFeedback(message, 'warn')
        }

    }, [])

    return messageChain && messageChain.length ? <>
        <div className='chain--container'>
            <div className='chain-header'>
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" onClick={goToNewMessage} endIcon={<MailIcon />}>
                        Answer
                    </Button>
                    <Button variant="contained" onClick={goToProfile} >
                        Back
                    </Button>
                    {view === 'new-message' &&
                        <Button variant="contained" variant="contained"
                        sx={{ mt: 3, mb: 2 }} onClick={hideNewMessage}>
                            Hide
                        </Button>
                    }
                </Stack>
            </div>
            <div>
                {
                    view === 'new-message' &&
                    <NewMessage sendParent={id}/>
                }
            </div>
            <div>
                {
                    messageChain.slice(0).reverse().map(({ id, from, subject, body, sentDate, read }) =>

                        <div className="message--container">
                            <div>
                                <div className="message--topbar" >
                                    {users.find(element => element.id === from).name}
                                </div>
                                <div className="message--from-date">
                                    <div>{subject}</div>
                                    <div>{sentDate.split("T")[0].split('-').reverse().join('-')} / {sentDate.split("T")[1].split(".")[0].replace(/:[^:]*$/, '')}</div>
                                </div>
                                <div className="message--body">
                                    {body}
                                </div>

                            </div>
                        </div>
                    )}
            </div>
        </div>





    </> : null
}

export default OpenMessage