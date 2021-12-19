import React from 'react';
import{Link} from 'react-router-dom';
import './styles/ChangePass.css'

function ChangePass(props) {

    const {changePassVisual} = props
    return <>
        <form className="changePass_container" onSubmit={event => {
            event.preventDefault()
        
            const oldpassword = event.target.oldpassword.value
            const password = event.target.password.value

            changePassVisual(oldpassword,password)
  
        }}>
            <h1>Cambio de contraseña</h1>
            <div className="changepass_inputs">
                <input className="changepass" type="password" placeholder="password" name="oldpassword" />
                <input className="changepass" type="password" placeholder="newpassword" name="password" />
            </div>

            <div className="buttons">
                <button className="change_button" type="submit">Change Password</button> 
                <Link to="../../profile"><button className="go_button" type="button">Go Back</button></Link>    
            </div>
        </form>
    </>
}

export default ChangePass