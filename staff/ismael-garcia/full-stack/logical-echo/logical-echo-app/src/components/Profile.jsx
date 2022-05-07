import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { modifyUser, unregisterUser } from '../logic'
import AppContext from './AppContext'
import logger from '../utils/logger'
import Unregister from './Unregister'
import Update from './Update'
import ThemeSwitch from './ThemeSwitch'

function Profile() {
    logger.debug('Profile -> render')

    const { onFlowStart, onFlowEnd, onModal } = useContext(AppContext)

    const [view, setView] = useState(null)

    const navigate = useNavigate()
    
    const goToUnregister = () => setView('unregister')
    
    const goToUpdate = () => setView('update')

    const signOut = () => {
        delete sessionStorage.token

        navigate('/')
    }

    const update = async (data) => {
        try {
            onFlowStart()

            const { token } = sessionStorage

            await modifyUser(token, data)

            onFlowEnd()

            onModal('Profile updated', 'success')
        } catch ({ message }) {
            onFlowEnd()

            onModal(message, 'error')
        }
    }

    const unregister = async (password) => {
        try {
            onFlowStart()

            const { token } = sessionStorage

            await unregisterUser(token, password)

            logger.info('User unregistered')

            onFlowEnd()

            onModal('User unregistered', 'success')

            signOut()
        } catch ({ message }) {
            onFlowEnd()

            onModal(message, 'error')
        }
    }

    return <>
        {!view && <>
            <div className="profile container" id="profile">
                <button type="button" className="button button--medium button--emphasized clickable" onClick={goToUpdate}>Update</button>
                <button type="button" className="button button--medium button--warning clickable" onClick={goToUnregister}>Unregister</button>
                <button type="button" className="button button--medium clickable" onClick={signOut}>Sign out</button>
            </div>

            {/* <ThemeSwitch /> */}
        </>
        }

        {view === 'update' && <Update onUpdate={update} />}

        {view === 'unregister' && <Unregister onUnregister={unregister} />}
    </>
}

export default Profile