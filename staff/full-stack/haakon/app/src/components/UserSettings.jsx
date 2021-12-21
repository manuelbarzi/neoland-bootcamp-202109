// Styles
import '../sass/styles.sass'

const UserSettings = ({ onDeleteAccount }) => {
    return <div className='userSettings'>
        <h1 className='userSettings__title'>Settings</h1>
        <div className='bar userSettings__bar'>
            <div className='bar__item'>Profile</div>
            <div className='bar__item'>My Password</div>
        </div>
        <form>
            <input className='input userSettings__input' type="text" placeholder='Name' />
            <input className='input userSettings__input' type="text" placeholder='Username' />
            <input className='input userSettings__input' type="text" placeholder='Bio' />
            <button className='btn userSettings__btn' type='button'>Save Changes</button>
        </form>
        <p className='userSettings__delete' onClick={() => onDeleteAccount()}>Delete your account</p>
    </div>
}

export default UserSettings