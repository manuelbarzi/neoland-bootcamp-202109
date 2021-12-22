import logger from '../logger'
import '../style.sass'
import { useContext } from 'react'
import { unregisterUser } from '../logic';
import AppContext from './AppContext'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Unregister({ onBack }) {
    logger.debug('Unregister -> render')

    const { onFeedback, onFlowStart, onFlowEnd, resetTokenAndGoToLogin } = useContext(AppContext)

    return <div className="wrap">

        <form onSubmit={ async event => {
            event.preventDefault()

            const { target: { password: { value: password } } } = event 
debugger
            // TODO poner el spinner y todo lo que tengas que hacer antes
            onFlowStart()
            try{
                const res = await unregisterUser (sessionStorage.token,password)
                onFlowEnd()
                resetTokenAndGoToLogin()
            } catch ({ message }) {
                onFlowEnd()
                onFeedback(message,'error')
            }

        }}>
            <div><TextField
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="password"
                    /></div>

            <div><Button type="submit" fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >Unregister</Button></div>
                <div><Button  onClick={onBack} fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >Back</Button></div>
        </form>
    </div>
}

export default Unregister