// Styles
import '../sass/styles.sass'

// Logic
import { unregisterUser } from '../logic'

// React
import { useContext } from 'react'
import AppContext from './AppContext'

const UnRegister = ({ unRegistered, onGoBack }) => {
    const { onFlowStart, onFlowEnd, onFeedback } = useContext(AppContext)

    return <div className='deleteAccount'>
        <h1 className='deleteAccount__title'>Delete Account</h1>
        <p className='deleteAccount__description'>Deleting your account is irreversible. Enter your account password to confirm you want to delete your account and all associated user data</p>
        <form className="deleteAccountForm" onSubmit={async event => {
            event.preventDefault()

            const password = event.target.password.value
            try {
                onFlowStart()
                await unregisterUser(sessionStorage.token, password)
                onFeedback('User deleted 😭', 'success')
                onFlowEnd()
                unRegistered()
            } catch ({ message }) {
                onFlowEnd()
                onFeedback(message, 'warn')
            }
        }}>
            <input className="input deleteAccountForm__input" type="password" name="password" id="password" placeholder="Password" />
            <div className="deleteAccountForm__btns">
                <button type='submit' className="btn deleteAccountForm__btn">Delete account</button>
                <button type='button' className="btn btn--dark deleteAccountForm__btn" onClick={() => onGoBack()}>Cancel</button>
            </div>
        </form>
    </div>
}

export default UnRegister