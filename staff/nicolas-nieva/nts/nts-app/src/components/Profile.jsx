import { useState, useContext } from 'react'
import Unregister from './Unregister'
import { updateUserPassword, unregisterUser} from '../logic'
import AppContext from './AppContext'

function Profile ({ onGoBack, onSignOut}) {

    const { onFlowStart, onFlowEnd, onModal } = useContext(AppContext)

    const [view, setView] = useState('update-password')

    const goToUnregister = () => setView('unregister')

    const goToUpdatePassword = () => setView('update-password')

    const updatePassword = async (oldPassword, password) => {
        onFlowStart()

        const user = { oldPassword, password }

        try {
            debugger
          await updateUserPassword(sessionStorage.token, user) 
             
            onFlowEnd()

            onModal('Password updated')
        
    } catch ({ message }) {
        onFlowEnd()

        onModal(message)
    }
}

const unregister = password => {
    onFlowStart()

    try {
        unregisterUser(sessionStorage.token, password, error => {
            if (error) {
                onFlowEnd()

                onModal(error.message)

                return
            }

            onFlowEnd()

            onModal('User unregistered')

            onSignOut()
        })
    } catch ({ message }) {
        onFlowEnd()

        onModal(message)
    }
}
    
        return <>
        {view === 'update-password' && <div className="profile container container--vertical">
        <button className="button" onClick={onGoBack}>Go back</button>
        
        <form className="container container--vertical" onSubmit={event => {
                event.preventDefault()

                const { target: { oldPassword: { value: oldPassword }, password: { value: password } } } = event

                updatePassword(oldPassword, password)
            }}>
                <input className="field" type="password" name="oldPassword" id="oldPassword" placeholder="old password" />
                <input className="field" type="password" name="password" id="password" placeholder="new password" />

                <div className="container">
                    <button className="button button--medium button--dark">Update</button>
                </div>
            </form>

                    <button className="button button--medium button--dark" onClick={goToUnregister}>Unregister</button>
                    
                </div>}
                    
                    
            {view === 'unregister' && <Unregister onBack={goToUpdatePassword} onUnregister={unregister} />}

        </>
    }


export default Profile