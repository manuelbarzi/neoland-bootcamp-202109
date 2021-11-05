import React from "react"
import ButtonsProfile from "./ButtonsProfile"
import Password from "./Password"
import Unregister from "./Unregister"

class Profile extends React.Component {
    constructor( props ) {
        super()
        this.state = {
            view: 'profile'
        }
    }
    render() {
        return <>
            <div className="container container--vertical">
                <h2>Your Profile</h2>
                <button className="button" onClick={() => this.props.goSearch()}>Back home</button>
            </div>
            {this.state.view === 'profile' && <ButtonsProfile
                goPassword={() => this.setState( { view: 'password' } )}
                goDeleteUser={() => this.setState( { view: 'delete' } )}
            ></ButtonsProfile>}

            {this.state.view === 'password' && <Password
                onChangePassword={this.props.onChangePassword}
                backProfile={() => this.setState( { view: 'profile' } )}
            />}


            {this.state.view === 'delete' && <Unregister
                onDeleteAccount={this.props.onDeleteAccount}
                backProfile={() => this.setState( { view: 'profile' } )}
            />}
        </>
    }
}

export default Profile