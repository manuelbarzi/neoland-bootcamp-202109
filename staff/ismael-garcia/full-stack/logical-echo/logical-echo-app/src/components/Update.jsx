import logger from '../utils/logger'

function Update({ onUpdate, onBack }) {
    logger.debug('SignIn -> render')

    return <form className="update container container--vertical container--gapped" onSubmit={event => {
        event.preventDefault()

        const { target: { newEmail: { value: newEmail }, password: { value: password }, newPassword: { value: newPassword } } } = event

        const data = { password, newEmail, newPassword }

        onUpdate(data)
    }}>
        <input className="field" type="email" name="newEmail" id="register-email" placeholder="New Email" />
        <input className="field" type="password" name="newPassword" id="register-newPassword" placeholder="New Password" />
        <input className="field" type="password" name="password" id="register-password" placeholder="Password" required />

        <div className="container">
            <button type="button" className="button button--medium" onClick={(event) => {
                event.preventDefault()
                
                onBack()
            }}>Go Back</button>
            <button type="submit" className="button button--medium button--dark">Update</button>
        </div>
    </form>
}

export default Update