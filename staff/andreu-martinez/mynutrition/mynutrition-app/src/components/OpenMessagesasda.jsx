import { useState, useContext, useEffect } from 'react'
import logger from '../logger'
import './OpenMessage.sass'
import { retrieveUserById, retrieveMessagesChain } from '../logic'
import AppContext from './AppContext'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import MessagesChain from './MessagesChain'


function OpenMessage({ messageToRead }) {

    const { id, parent , from, body, subject, sentDate} = messageToRead
    

    const { onFlowStart, onFlowEnd, onFeedback } = useContext(AppContext)
    const [user, setUser] = useState()
    const [forwarded, setForwarded] = useState([])

    useEffect(async () => {
        logger.debug('Results -> useEffect (componentDidMount)')

        try {
            onFlowStart()
            
            const res2 = await retrieveMessagesChain(sessionStorage.token, from)
            const res = await retrieveUserById(sessionStorage.token, from)
            setUser(res)

            setForwarded(res2)
                      
            onFlowEnd()

        } catch ({ message }) {
            onFlowEnd()

            onFeedback(message, 'warn')
        }
        
    }, [])

    return forwarded && forwarded.length ? <>

        {/* {forwarded.slice(0).reverse().map(( message ) => <Message message={ message }/>)} */}
        {forwarded.map(( message ) => <MessagesChain message={ message }/>)}

    </> : null
    
    // return <>
    //     <div className="message--container">
    //         <div className="message--topbar">
    //             {subject}
    //         </div>
    //         <div className="message--from-date">
    //             <div>{user}</div>
    //             <div>{sentDate.split("T")[0].split('-').reverse().join('-')} / {sentDate.split("T")[1].split(".")[0].replace(/:[^:]*$/,'')}</div>
    //         </div>
    //         <div className='message--body'>
    //             {id}
    //         </div>
    //     </div>
        
    // </>
        
}

export default OpenMessage