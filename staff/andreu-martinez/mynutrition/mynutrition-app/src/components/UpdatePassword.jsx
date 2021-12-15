import { useState, useContext } from 'react'
import logger from '../logger'
import Unregister from './Unregister'
import { updateUserPassword, unregisterUser } from '../logic'
import AppContext from './AppContext'
import '../style.sass'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function updatePassword({onBack}) {


    return <>
        <div className="container">
            <form onSubmit={event => {
                event.preventDefault()

                const { target: { oldPassword: { value: oldPassword }, password: { value: password } } } = event

                updatePassword(oldPassword, password)
            }}>
                <div><TextField
                    margin="normal"
                    fullWidth
                    id="oldpassword"
                    label="Old Password"
                    name="oldpassword"
                    autoComplete="old-password"
                    autoFocus
                /></div>
                <div><TextField
                    margin="normal"
                    fullWidth
                    name="newpassword"
                    label="New Password"
                    type="newpassword"
                    id="newpassword"
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

export default updatePassword