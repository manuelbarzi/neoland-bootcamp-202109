import { useState, useContext } from 'react'
import logger from '../logger'
import Unregister from './Unregister'
import UpdatePassword from './UpdatePassword'
import { updateUserPassword, unregisterUser } from '../logic'
import AppContext from './AppContext'
import '../style.sass'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Profile({ onSignOut, onBack }) {
    logger.debug('Profile -> render')

    const { onFlowStart, onFlowEnd, onFeedback } = useContext(AppContext)

    const [view, setView] = useState('profile')

    const goToProfile = () => setView('profile')

    const goToUnregister = () => setView('unregister')

    const goToUpdatePassword = () => setView('update-password')

    const updatePassword = (oldPassword, password) => {
        onFlowStart()

        try {
            updateUserPassword(sessionStorage.token, oldPassword, password, error => {
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

    const unregister = password => {
        onFlowStart()

        try {
            unregisterUser(sessionStorage.token, password, error => {
                if (error) {
                    onFlowEnd()

                    onFeedback(error.message)

                    return
                }

                logger.info('User unregistered')

                onFlowEnd()

                onFeedback('User unregistered', 'success')

                onSignOut()
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

            {view === 'update-password' && <UpdatePassword onBack={goToProfile}/> }

            {view === 'unregister' && <Unregister onBack={goToProfile}/>}
            </>
}

        export default Profile