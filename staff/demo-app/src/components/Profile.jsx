import './Profile.css'

function Profile({ onUnRegister, onDeleteAccount, onGoBack }) {
    return (
        <div className="profile">
            <button className="btn btn--white profile__btn" onClick={() => onUnRegister()}>Update Password</button>
            <button className="btn btn--white profile__btn" onClick={() => onDeleteAccount()}>Delete Account</button>
            <button className="btn btn--white profile__btn" onClick={() => onGoBack()}>Back</button>
        </div>
    )
}

export default Profile