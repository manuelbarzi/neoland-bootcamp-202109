import logger from '../logger'

function UpdatePassword({ onUpdatePassword }) {
    logger.debug('UpdatePassword -> render')

    return <div className="updatepassword container container--vertical">
        <h3 className='updatepassword__title'>Update Password</h3>
        <form className="container container--vertical" onSubmit={event => {
                event.preventDefault()

                const { target: { oldPassword: { value: oldPassword }, password: { value: password } } } = event

                onUpdatePassword(oldPassword, password)
            }}>
                <input className="field" type="password" name="oldPassword" id="oldPassword" placeholder="old password" />
                <input className="field" type="password" name="password" id="password" placeholder="new password" />
                
                <div className="container">
                    <button className="button button--medium button--dark">Update</button>
                </div>
            
        </form>
        
    </div>
}

export default UpdatePassword