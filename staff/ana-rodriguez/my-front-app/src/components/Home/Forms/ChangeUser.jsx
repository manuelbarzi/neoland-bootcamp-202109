import React from 'react';
import './ChangeUser.css';
import{Link} from 'react-router-dom';

function ChangeUser(){

    return<>
    <form className="changeUser_container">
        <div className="input">
            <input className="changeUser" type="text" placeholder="username"/>
            <input className="changeUser" type="text" placeholder="e-mail"/>
        </div>

        <div className="buttons">
            <button className="Change_button" type="submit">Change User</button>
            <Link to="../../profile"><button className="go_button" type="button">Go Back</button></Link> 
        </div>
    </form>
     
    </>

}

export default ChangeUser