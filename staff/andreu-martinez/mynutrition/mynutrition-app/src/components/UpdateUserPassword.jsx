import { useContext } from 'react'
import { updatePassword } from '../logic'
import AppContext from './AppContext'
import '../style.sass'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function UpdateUserPassword({onBack}) {

    const { onFlowStart, onFlowEnd, onFeedback } = useContext(AppContext)

    return <>
        <div className="container">
            <form onSubmit={event => {
                event.preventDefault()

                const { target: { oldPassword: { value: oldPassword }, password: { value: password } } } = event

                updatePassword(sessionStorage.token, oldPassword, password)
                debugger
            }}>
            
                <div><TextField
                    margin="normal"
                    fullWidth
                    type="password"
                    id="oldPassword"
                    label="Old Password"
                    name="oldPassword"
                    autoComplete="old-password"
                    autoFocus
                /></div>
                <div><TextField
                    margin="normal"
                    fullWidth
                    name="password"
                    label="New Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                /></div>
                    <div><Button type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >Update Password</Button>
                    </div>
                    <div><Button  onClick={onBack} fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        >Back</Button></div>
            </form>
        </div>
            
    </>
        
}

export default UpdateUserPassword