import React from 'react';
import{Link} from 'react-router-dom';
import './ChangePass.css'

function ChangePass() {

    return <>
        <form className="changePass_container">
            <div className="changepass_inputs">
                <input className="changepass" type="password" placeholder="password" name="oldpassword" />
                <input className="changepass" type="password" placeholder="newpassword" name="newpassword" />
            </div>

            <div className="buttons">
                <button className="change_button" type="submit">Change Password</button> 
                <Link to="../../profile"><button className="go_button" type="button">Go Back</button></Link>    
            </div>
        </form>
    </>
}

export default ChangePass