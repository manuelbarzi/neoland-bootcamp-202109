function ChangePassword(props) {
    return <div className="pagelayout">
    <div className="title title--font-height layout__title">
        <h1>Change Password</h1>
    </div>
    <div className="layout__subtitle">
        <p><strong className="name">Name</strong>, to update your Password, you need to know your
            Old Password
        </p>
    </div>
    <form action="" className="layout__main" onSubmit={(event)=> {
        event.preventDefault()
        const oldpassword = event.target.oldPassword.value
        const password = event.target.newPassword.value

        props.OnUpdate(oldpassword, password)
    }}>
        <div className="layout__inputs">
            <input type="password" className="input" name="oldPassword" placeholder="Old Password"></input>
            <input type="password" className="input" name="newPassword" placeholder="New Password"></input>
        </div>
        <div className="layout__buttons layout__buttons--change-pswd">
            <button type="submit" className='button'>UPDATE</button>
            <button className='button' onClick={()=> props.OnBackProfile()}>BACK PROFILE</button>
        </div>
    </form>
</div>
}