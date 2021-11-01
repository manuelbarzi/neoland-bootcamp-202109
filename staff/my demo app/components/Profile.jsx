function Profile(props) {
    return <div className="pagelayout">
        <div className="title layout__title">
            <h1>PROFILE</h1>
        </div>
        <div className="layout__subtitle">
            <p><strong className="name">Name</strong> What do you whant to do with your profile?
            </p>
        </div>
        <div className="layout__buttons--home-hi layout__buttons ">
            <button className='button'>UPDATE PROFILE</button>
            <button className='button'onClick={() => props.OnChangePassword()}>CHANGE PASSWORD</button>
            <button className='button'onClick={() => props.OnDeleteAccount()}>DELETE ACCOUNT</button>
        </div>
        <div className="layout__buttons--home-low layout__buttons">
            <button className='button' onClick={() => props.OnBackHome()}>BACK HOME</button>
            <button className='button' onClick={() => props.OnSignOut()}>SIGN OUT</button>
        </div>
    </div>
}