function Profile(props) {
    logger.info('Profile -> render')
    return <>

        <div className="profile container container--vertical container--gapped " onSubmit={event => {
        event.preventDefault() 
        
        const user = {oldPassword: event.target.oldPassword.value,
                        password: event.target.password.value}
    
        try {
            updateUserPassword(sessionStorage.token, user, (error) => {
                if (error) return alert(error.message)

                    event.target.reset()
    
                     })
                   alert ('Password updated')

                   event.target.reset()  
        } catch (error) {
            alert(error.message)
            
            event.target.reset()

        }
        }}>
            <form className="container container--vertical">
                <input className="field" type="password" name="oldPassword" id="oldPassword" placeholder="current password"></input>
                <input className="field" type="password" name="password" id="password" placeholder="new password"></input>
                <div className="container">
                    <button className="button button--medium" onClick ={() => props.goToHome() } >Home</button>
                    <button className="button button--medium button--dark">Update</button>
                </div>

            </form>
            <button className="button button--medium button--dark" onClick={() => props.toUnregister()}>Unregister</button>
        </div>
    </>
}


