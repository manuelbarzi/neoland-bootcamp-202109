class Profile extends React.Component {
    constructor() {
        logger.info('Profile -> constructor')

        super()

        this.state = { view: 'update-password' }
    }
    
    goToUnregister = () => this.setState({ view: 'unregister' })
    
    goToUpdatePassword = () => this.setState({ view: 'update-password' })

    render() {
        logger.info('Profile -> render')

        return <>
            {this.state.view === 'update-password' && <div className="profile container container--vertical" id="profile">
                <form className="container container--vertical" onSubmit={event => {
                    event.preventDefault()

                    const oldPassword = event.target.oldPassword.value
                    const password = event.target.password.value

                    this.props.onPasswordUpdate(oldPassword, password)
                }}>
                    <input className="field" type="password" name="old-password" id="old-password" placeholder="Old Password" required />
                    <input className="field" type="password" name="new-password" id="new-password" placeholder="New Password" required />

                    <div className="container">
                        <button type="button" className="button button--medium" onClick={event => {
                            event.preventDefault()

                            this.props.onBack()
                        }}>Go Back</button>
                        <button type="submit" className="button button--medium button--dark">Update</button>
                    </div>
                </form>

                <button className="button button--medium button--warning" onClick={this.goToUnregister}>Unregister</button>
            </div>}

            {this.state.view === 'unregister' && <Unregister onBack={this.goToUpdatePassword} onUnregister={this.props.onUnregister} />}
        </>
    }
}