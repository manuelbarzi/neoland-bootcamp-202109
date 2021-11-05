import { Component } from 'react'
import logger from '../utils/logger'
import Unregister from './Unregister'

class Profile extends Component {
    constructor() {
        logger.debug('Profile -> constructor')

        super()

        this.state = { view: 'update-password' }
    }
    
    goToUnregister = () => this.setState({ view: 'unregister' })
    
    goToUpdatePassword = () => this.setState({ view: 'update-password' })

    render() {
        logger.debug('Profile -> render')

        const { 
            props: { onPasswordUpdate, onBack, onUnregister }, 
            state: { view }, 
            goToUnregister, 
            goToUpdatePassword 
        } = this

        return <>
            {view === 'update-password' && <div className="profile container container--vertical" id="profile">
                <form className="container container--vertical" onSubmit={event => {
                    event.preventDefault()

                    const { target: { oldPassword: { value: oldPassword }, password: { value: password } } } = event
                    
                    onPasswordUpdate(oldPassword, password)
                }}>
                    <input className="field" type="password" name="oldPassword" id="oldPassword" placeholder="Old Password" required />
                    <input className="field" type="password" name="password" id="password" placeholder="New Password" required />

                    <div className="container">
                        <button type="button" className="button button--medium" onClick={event => {
                            event.preventDefault()

                            onBack()
                        }}>Go Back</button>
                        <button type="submit" className="button button--medium button--dark">Update</button>
                    </div>
                </form>

                <button className="button button--medium button--warning" onClick={goToUnregister}>Unregister</button>
            </div>}

            {view === 'unregister' && <Unregister onBack={goToUpdatePassword} onUnregister={onUnregister} />}
        </>
    }
}

export default Profile