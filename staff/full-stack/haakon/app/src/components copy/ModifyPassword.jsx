// Styles
import '../sass/styles.sass'

// Logic
import { modifyUserPassword } from '../logic'

// React
import { useContext } from 'react'
import AppContext from './AppContext'

const ModifyPassword = ({ onGoBack }) => {
    const { onFlowStart, onFlowEnd, onFeedback } = useContext(AppContext)

    return <div className='deleteAccount'>
        <h1 className='deleteAccount__title'>My Password</h1>
        <form className="deleteAccountForm" onSubmit={async event => {
            event.preventDefault()

            const oldPassword = event.target.oldPassword.value
            const password = event.target.password.value

            try {
                onFlowStart()
                await modifyUserPassword(sessionStorage.token, oldPassword, password)
                onFlowEnd()
                onFeedback('User modify successfully', 'success')
            } catch ({ message }) {
                onFlowEnd()
                onFeedback(message, 'warn')
            }
        }}>
            <input className="input deleteAccountForm__input" type="password" name="password" id="password" placeholder="Create New Password" />
            <input className="input deleteAccountForm__input" type="password" name="oldPassword" id="oldPassword" placeholder="Old Password" />
            <div className="deleteAccountForm__btns">
                <button type='submit' className="btn deleteAccountForm__btn">Save Changes</button>
                <button type='button' className="btn btn--dark deleteAccountForm__btn" onClick={() => onGoBack()}>Cancel</button>
            </div>
        </form>
    </div>
}

export default ModifyPassword