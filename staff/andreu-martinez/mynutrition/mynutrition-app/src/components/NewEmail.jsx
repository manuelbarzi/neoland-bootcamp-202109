import { useState, useContext, useEffect } from 'react'
import logger from '../logger'
import './Emails.sass'
import { sendEmail, retrieveUsersForEmail } from '../logic'
import UserList from './UserList'
import AppContext from './AppContext'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Select } from '@mui/material'

function NewEmail({reMessage}) {

    const { onFlowStart, onFlowEnd, onFeedback } = useContext(AppContext)

    const [users, setUsers] = useState()

    useEffect(() => {
        logger.debug('Results -> useEffect (componentDidMount)')

        try {
            onFlowStart()

            retrieveUsersForEmail(sessionStorage.token, (error, users) => {
                if (error) {
                    onFlowEnd()

                    onFeedback(error.message)

                    return
                }

                onFlowEnd()

                setUsers(users)

            })
        } catch ({ message }) {
            onFlowEnd()

            onFeedback(message, 'warn')
        }
    }, [])
    
    return users && users.length ? <>
        <div className='messages--container'>
            <form onSubmit={async event => {
                event.preventDefault()

                const { target: { to: { value: to }, subject: { value: subject }, body: {value: body} } } = event
                const date = Date.now
                try {
                    onFlowStart()
                    await sendEmail(to, subject, body, date)
                    onFlowEnd()
                } catch (error) {
                    return error
                }
            }
            } >
            <div className='messages--write'>
                <div>
                    <input type="text" id="to" name="to" autocomplete="off"
                        onChange={event => {

                            const { target, target: { value } } = event

                            value.length >= 3 && target.setAttribute('list', 'client')
                            value.length < 3 && target.removeAttribute('list', 'client')

                        }}
                    />
                    <datalist id="client" minlength="1">
                        {
                            users.map(({name}) => <option value={`${name}`}></option>)
                            
                        }
                    </datalist>
                <div>
                </div>
            </div>
                <div>
                    <TextField 
                                margin="normal"
                                fullWidth
                                id="subject"
                                label="Subject"
                                name="subject"
                                autoComplete="subject"
                                autoFocus
                    />
                </div>
            </div>
        <div>
            <div><textarea placeholder='Message' name='body' id='body' /></div> 
        </div>
        <div className='messages--write'>
            <div><Button type="submit" fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >Send</Button></div>
        </div>
        </form>
        </div>
    </>: null
}

export default NewEmail