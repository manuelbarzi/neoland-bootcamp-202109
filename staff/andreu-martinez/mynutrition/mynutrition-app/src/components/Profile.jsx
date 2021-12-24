import { useState, useContext } from 'react'
import AppContext from './AppContext'
import logger from '../logger'
import UpdateUserPassword from './UpdateUserPassword'
import Unregister from './Unregister'
import { updatePassword, unregisterUser } from '../logic'

import '../style.sass'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Profile({ onSignOut }) {
    logger.debug('Profile -> render')

    const { onFlowStart, onFlowEnd, onFeedback } = useContext(AppContext)

    const [view, setView] = useState('profile')

    const goToProfile = () => setView('profile')

    const goToUnregister = () => setView('unregister')

    const goToUpdatePassword = () => setView('update-password')

    const UpdatePassword = (oldPassword, password) => {
        onFlowStart()

        try {
            updatePassword(sessionStorage.token, oldPassword, password, error => {
                if (error) {
                    onFlowEnd()

                    onFeedback(error.message)

                    return
                }

                onFlowEnd()

                onFeedback('Password updated', 'success')
            })
        } catch ({ message }) {
            onFlowEnd()

            onFeedback(message, 'warn')
        }
    }

    return <>
            {view === 'profile' &&
                <div><Button onClick={goToUnregister} fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >Unregister</Button>
                    <Button onClick={goToUpdatePassword} fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >Update Password</Button></div>
            }

            {view === 'update-password' && <UpdateUserPassword onBack={goToProfile}/> }

            {view === 'unregister' && <Unregister onBack={goToProfile}/>}
            </>
}

export default Profile