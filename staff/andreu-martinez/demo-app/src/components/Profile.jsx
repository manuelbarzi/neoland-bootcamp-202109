import { useState } from 'react'
import Unregister from './Unregister'


function Profile({ onPasswordUpdate, onBack, onUnregister }) {
   
    const [view, setView] = useState('update-password')

    const goToUnregister = () => setView('unregister')

    const goToUpdatePassword = () => setView('update-password')

    return <>
        {
            view === 'update-password' &&
            <form className="container container--vertical" onSubmit={event => {
                event.preventDefault()

                const { target: { oldPassword: { value: oldPassword }, password: { value: password } } } = event

                onPasswordUpdate(oldPassword, password)

            }}>
                <input className="field" type="password" name="oldPassword" id="oldPassword" placeholder="old password" />
                <input className="field" type="password" name="password" id="password" placeholder="new password" />
                <div className="container">
                    <button className="button" onClick={event => onBack()}>Close</button>
                    <button className="button" >Update</button>
                    <button className="button" onClick={event => goToUnregister()}>Unregister</button>
                </div>
            </form>
        }
        {view === 'unregister' && <Unregister onBack={goToUpdatePassword} onUnregister={onUnregister} />}

        
    </>

}

export default Profile