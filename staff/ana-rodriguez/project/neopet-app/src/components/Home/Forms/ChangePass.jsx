import React from 'react';
import{Link, useNavigate} from 'react-router-dom';
import './styles/ChangePass.css'

function ChangePass({changePassVisual}) {

    const navigate = useNavigate()

    const goBack = (event) => {
        navigate("../../profile");
    }

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
                <button className="change_button" type="button" onClick={event=>goBack(event)}>Go Back</button>  
            </div>
        </form>
    </>
}

export default ChangePass