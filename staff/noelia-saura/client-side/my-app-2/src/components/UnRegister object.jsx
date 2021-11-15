import React from "react"
import {unregisterUser} from './../logic';
class UnRegister extends React.Component {

    deleteUser= (password)=>{
        try{
        unregisterUser(sessionStorage.token,password, error => {
            if(error){
                alert(error.message)
                return error
            }
            alert('user is deleted')
            this.props.goToLanding()
        })}catch(error){
            alert(error.message)
            return error
        }
    }

    render() {
        return <>
            <div className="unregister container container--vertical container--gapped ">
                <form className="container container--vertical" onSubmit= {event =>{
                    event.preventDefault()

                    const password = event.target.password.value

                    this.deleteUser(password)
                }}>
                    <input className="field" type="password" name="password" id="password" placeholder="password" />

                    <div className="container">
                        <button className="button button--medium"onClick= {this.props.goToProfile}>Go back</button>
                        <button className="button button--medium button--dark" type='submit'>Unregister</button>
                    </div>
                </form>
                
            </div>
        </>
    }
}

export default UnRegister