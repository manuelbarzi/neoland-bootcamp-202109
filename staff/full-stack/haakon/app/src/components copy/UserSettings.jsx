// Styles
import '../sass/styles.sass'

// Logic
import modifyUser from '../logic/modify-user'

// React
import { useContext } from 'react'
import AppContext from './AppContext'

const UserSettings = ({ onDeleteAccount, onMyPassword }) => {
    const { onFlowStart, onFlowEnd, onFeedback } = useContext(AppContext)

    return <div className='userSettings'>
        <h1 className='userSettings__title'>Settings</h1>
        <div className='bar userSettings__bar'>
            <div className='bar__item'>Profile</div>
            <div className='bar__item' onClick={() => onMyPassword()}>My Password</div>
        </div>
        <form onSubmit={async event => {
            event.preventDefault()

            const name = event.target.name.value
            const username = event.target.username.value

            try {
                onFlowStart()
                await modifyUser(sessionStorage.token, name, username)
                onFlowEnd()
                onFeedback('User update succsessfully', 'success')
            } catch ({ message }) {
                onFlowEnd()
                onFeedback(message, 'warn')
            }
        }}>
            <input className='input userSettings__input' type='text' name='name' placeholder='Name' />
            <input className='input userSettings__input' type='text' name='username' placeholder='Username' />
            {/* <input className='input userSettings__input' type='text' placeholder='Bio' /> */}
            <button className='btn userSettings__btn' type='submit'>Save Changes</button>
        </form>
        <p className='userSettings__delete' onClick={() => onDeleteAccount()}>Delete your account</p>
    </div>
}

export default UserSettings


// TO-DO
    // Comprobar que el name y el username no sean el mismo