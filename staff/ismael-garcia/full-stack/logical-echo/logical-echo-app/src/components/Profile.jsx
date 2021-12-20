import { useState, useContext } from 'react'
import { updateUserProfile, unregisterUser } from '../logic'
import AppContext from './AppContext'
import logger from '../utils/logger'
import Unregister from './Unregister'
import Update from './Update'

function Profile({ onBack, onSignOut }) {
    logger.debug('Profile -> render')

    const { onFlowStart, onFlowEnd, onModal } = useContext(AppContext)

    const [view, setView] = useState(null)
    
    const goToUnregister = () => setView('unregister')
    
    const goToUpdate = () => setView('update')

    const update = async (data) => {
        try {
            onFlowStart()

            await updateUserProfile(sessionStorage.token, data)

            onFlowEnd()

            onModal('Profile updated', 'success')
        } catch ({ message }) {
            onFlowEnd()

            onModal(message, 'warn')
        }
    }

    const unregister = async (password) => {
        try {
            onFlowStart()

            await unregisterUser(sessionStorage.token, password)

            logger.info('User unregistered')

            onFlowEnd()

            onModal('User unregistered', 'success')

            onSignOut()
        } catch ({ message }) {
            onFlowEnd()

            onModal(message, 'warn')
        }
    }

    return <>
        {!view && <div className="profile container container--vertical" id="profile">
            <button type="button" className="button button--medium" onClick={onBack}>Go Back</button>
            <button type="button" className="button button--medium button--warning" onClick={goToUpdate}>Update</button>
            <button type="button" className="button button--medium button--warning" onClick={goToUnregister}>Unregister</button>
            <button type="button" className="button button--medium" onClick={onSignOut}>Sign out</button>
        </div>}

        {view === 'update' && <Update onBack={onBack} onUpdate={update} />}

        {view === 'unregister' && <Unregister onBack={onBack} onUnregister={unregister} />}
    </>
}

export default Profile