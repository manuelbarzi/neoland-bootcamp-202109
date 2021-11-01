function DeleteAccount(props) {
    return <div className="pagelayout">
    <div className="title layout__title">
        <h1>Delete Account</h1>
    </div>
    <div className="layout__subtitle">
        <p><strong className="name">Name</strong>, to delete your account, you need to know your
            Password
        </p>
    </div>
    <form action="" className="layout__main" onSubmit={(event)=> {
        event.preventDefault()
        const password = event.target.password.value
        props.OnDelete(password)
    }}>
        <div className="layout__inputs">
            <input type="password" className="input" name="password" placeholder="Password"></input>
        </div>
        <div className="layout__buttons--delete-account layout__buttons">
            <button type="submit" className='button'>DELETE</button>
            <button className='button' onClick={()=> props.OnBackProfile()}>BACK PROFILE</button>
        </div>
    </form>
</div>
}