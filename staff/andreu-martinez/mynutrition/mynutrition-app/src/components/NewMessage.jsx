import { useState, useContext, useEffect } from 'react'
import logger from '../logger'
import './Emails.sass'
import AppContext from './AppContext'
import { sendMessage, retrieveUsers } from '../logic'

///MUI
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send';


function NewMessage({onBack}) {

    const { onFlowStart, onFlowEnd, onFeedback } = useContext(AppContext)

    const [users, setUsers] = useState()



    useEffect( async () => {
        logger.debug('Results -> useEffect (componentDidMount)')
        
        const res = await retrieveUsers(sessionStorage.token)
        setUsers(res)
    }, [])



    const newMessage = async (subject, body, userToId) => {
     
        try {

            onFlowStart()
            await sendMessage(sessionStorage.token, userToId, subject, body)
            onFlowEnd()
            
        }
        catch (error) {

            alert(error.message)
        }
    }
    
    return users && users.length ? <>
        <div className='messages--container'>
            <form onSubmit={async event => {
                event.preventDefault()
                
                const { target: { subject: { value: subject }, body: {value: body} } } = event
                let userTo = users.find(element => element.name === document.getElementById("to").value)
                // userTo = userTo.split(" ")[1]
                const userToId = userTo.id

                await newMessage(subject, body, userToId)
            }
            } >
            <div className='messages--write'>
                <div>
                    <input type="text" id="to" name="to" placeholder="Para" autoComplete="off"
                        onChange={event => {

                            const { target, target: { value } } = event

                            value.length >= 3 && target.setAttribute('list', 'client')
                            value.length < 3 && target.removeAttribute('list', 'client')

                        }}
                    />
                    <datalist id="client" >
                        {
                            users.map(({name, username, id}) => <option value={id}>{`${name} (${username})`}</option>)
                        }
                    </datalist>
                <div>
                </div>
            </div>
                <div>
                    <input type="text" id="subject" name="subject" placeholder="Asunto" />
                </div>
            </div>
        <div>
            <div><textarea placeholder='Mensaje' name='body' id='body' /></div> 
        </div>
        <div className='messages--write'>
            <div><Button variant="contained" type="submit" endIcon={<SendIcon />}>
                            Send
                        </Button></div>

                        <div><Button  onClick={onBack} fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >Back</Button></div>
        </div>
        </form>
        </div>
    </>: null
}

export default NewMessage