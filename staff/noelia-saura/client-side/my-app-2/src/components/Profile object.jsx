import React from "react"
import UnRegister from "./UnRegister"
class Profile extends React.Component {
    constructor(){
        super()

        this.state={view:'profile'}
    }
    goToUnregister=()=>{this.setState({view:'unregister'})}
    goBack=()=>{this.setState({view:'profile'})}
    
    render() {
        return <>

            <div className="profile container container--vertical container--gapped container--off">
                {this.state.view === 'profile'&& 
                <div>
                <form className="container container--vertical" onSubmit={event =>{
                event.preventDefault()

                const oldPassword = event.target.oldPassword.value
                const password = event.target.password.value

                this.props.onPasswordUpdate (oldPassword,password)
                }
                }>
                    <input className="field" type="password" name="oldPassword" id="oldPassword" placeholder="old password" />
                    <input className="field" type="password" name="password" id="password" placeholder="new password" />

                    <div className="container">
                        <button className="button button--medium" onClick= {this.props.goToHome}>Go back</button>
                        <button className="button button--medium button--dark" type='submit'>Update</button>
                    </div>
                    <div className='container'>
                    <button className="button button--medium button--dark" onClick={this.goToUnregister} >Unregister</button>
                    </div>
                </form>
                </div>
                }
                {this.state.view === 'unregister'&& <UnRegister goToProfile={this.goBack} />}
            </div>
        </>
    }
}

export default Profile