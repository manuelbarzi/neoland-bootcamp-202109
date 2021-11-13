import { useState } from 'react'
import logger from '../utils/logger'
import Unregister from './Unregister'
import { updateUserPassword, unregisterUser } from '../logic'

function Profile({ onBack, onFlowStart, onFlowEnd, onModal, onSignOut }) {
    logger.debug('Profile -> render')

    const [view, setView] = useState('update-password')
    
    const goToUnregister = () => setView('unregister')
    
    const goToUpdatePassword = () => setView('update-password')

    const updatePassword = (oldPassword, password) => {
        onFlowStart()
        
        try {
            updateUserPassword(sessionStorage.token, oldPassword, password, error => {
                if (error) {
                    onFlowEnd()

                    onModal(error.message)

                    return
                }

                onFlowEnd()

                onModal('Password updated', 'success')
            })
        } catch ({ message }) {
            onFlowEnd()

            onModal(message, 'warn')
        }
    }

    const unregister = password => {
        onFlowStart()

        try {
            unregisterUser(sessionStorage.token, password, error => {
                if (error) {
                    onFlowEnd()

                    onModal()

                    return
                }

                logger.info('User unregistered')

                onFlowEnd()

                onModal('User unregistered', 'success')

                onSignOut()
            })
        } catch ({ message }) {
            onFlowEnd()

            onModal(message, 'warn')
        }
    }

    return <>
        {view === 'update-password' && <div className="profile container container--vertical" id="profile">
            <form className="container container--vertical" onSubmit={event => {
                event.preventDefault()

                const { target: { oldPassword: { value: oldPassword }, password: { value: password } } } = event
                
                updatePassword(oldPassword, password)
            }}>
                <input className="field" type="password" name="oldPassword" id="oldPassword" placeholder="Old Password" required />
                <input className="field" type="password" name="password" id="password" placeholder="New Password" required />

                <div className="container">
                    <button type="submit" className="button button--medium button--dark">Update</button>
                </div>
            </form>

            <button type="button" className="button button--medium" onClick={onBack}>Go Back</button>
            <button className="button button--medium button--warning" onClick={goToUnregister}>Unregister</button>
        </div>}

        {view === 'unregister' && <Unregister onBack={goToUpdatePassword} onUnregister={unregister} />}
    </>
}

export default Profile



// VERSION WITH CLASS COMPONENTS:
// import { Component } from 'react'
// import logger from '../utils/logger'
// import Unregister from './Unregister'

// class Profile extends Component {
//     constructor() {
//         logger.debug('Profile -> constructor')

//         super()

//         this.state = { view: 'update-password' }
//     }
    
//     goToUnregister = () => this.setState({ view: 'unregister' })
    
//     goToUpdatePassword = () => this.setState({ view: 'update-password' })

//     render() {
//         logger.debug('Profile -> render')

//         const { 
//             props: { onPasswordUpdate, onBack, onUnregister }, 
//             state: { view }, 
//             goToUnregister, 
//             goToUpdatePassword 
//         } = this

//         return <>
//             {view === 'update-password' && <div className="profile container container--vertical" id="profile">
//                 <form className="container container--vertical" onSubmit={event => {
//                     event.preventDefault()

//                     const { target: { oldPassword: { value: oldPassword }, password: { value: password } } } = event
                    
//                     onPasswordUpdate(oldPassword, password)
//                 }}>
//                     <input className="field" type="password" name="oldPassword" id="oldPassword" placeholder="Old Password" required />
//                     <input className="field" type="password" name="password" id="password" placeholder="New Password" required />

//                     <div className="container">
//                         <button type="button" className="button button--medium" onClick={event => {
//                             event.preventDefault()

//                             onBack()
//                         }}>Go Back</button>
//                         <button type="submit" className="button button--medium button--dark">Update</button>
//                     </div>
//                 </form>

//                 <button className="button button--medium button--warning" onClick={goToUnregister}>Unregister</button>
//             </div>}

//             {view === 'unregister' && <Unregister onBack={goToUpdatePassword} onUnregister={onUnregister} />}
//         </>
//     }
// }

// export default Profile