import { useState, useContext } from "react";
import logger from '../logger'
import Unregister from './Unregister'
import UpdatePassword from './UpdatePassword'
import { updateUserPassword, unregisterUser } from '../logic'
import AppContext from './AppContext'

function Profile({ onBack, onSignOut}) {
    logger.debug('Profile -> render')

    const { onFlowStart, onFlowEnd, onFeedback } = useContext(AppContext)

    const [view, setView] = useState('profile')

    const gotounregister = () => setView('unregister')

    const gotoupdatepassword = () => setView('update-password')

    const gotoprofile = () => setView('profile')
    
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
    <button className="button" onClick={onBack}>Go back</button>
    <button className='button'onClick={gotoupdatepassword}>Update password</button>
    <button className='button' onClick={gotounregister}>Unregister</button>
    <button className="button button-medium button" onClick={onSignOut}> Sign out </button>
   
    {view === 'update-password' && <UpdatePassword onBack={gotoprofile} onUpdatePassword={updatePassword}/>}
    
    {view === 'unregister' && <Unregister onBack={gotoprofile} onUnregister={unregister} />}
        
    </>
}

export default Profile