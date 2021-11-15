import { useState, useEffect } from 'react'
import ChangePassword from './ChangePassword'
import DeleteAccount from './DeleteAccount'

function Profile({
    name,
    OnBackHome,
    OnSignOut,
    // OnChangePassword, 
    // OnDeleteAccount, 
    OnUpdate,
    OnDelete
}) {
    const [view, setView] = useState('mainButtons')
    // const [view, setView] = useState('home')

    const backtoprofile = () => setView('mainButtons')


    return <div className="pagelayout">
        <div className="title layout__title">
            <h1>PROFILE</h1>
        </div>
        <div className="layout__subtitle">
            <p><strong className="name">{name ? name : 'Name'}</strong> What do you whant to do with your profile?
            </p>
        </div>

        {view === 'mainButtons' && <>
            <div className="layout__buttons--home-hi layout__buttons ">
                <button className='button'>UPDATE PROFILE</button>
                <button className='button' onClick={()=> setView('changePassword')}>CHANGE PASSWORD</button>
                <button className='button' onClick={()=> setView('deleteAccount')}>DELETE ACCOUNT</button>
            </div>

            <div className="layout__buttons--home-low layout__buttons">
                <button className='button' onClick={OnSignOut}>SIGN OUT</button>
                <button className='button' onClick={OnBackHome}>BACK HOME</button>
            </div>
        </>}

        {view === 'changePassword' &&
            <ChangePassword
                OnBackProfile={backtoprofile}
                OnUpdatePassword={OnUpdate}
            ></ChangePassword>}

        {view === 'deleteAccount' &&
            <DeleteAccount
                OnBackProfile={backtoprofile}
                OnDeleteAccount={OnDelete}
            ></DeleteAccount>}
    </div>
}

export default Profile