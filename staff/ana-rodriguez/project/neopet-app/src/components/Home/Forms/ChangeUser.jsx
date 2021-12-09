import React from 'react';
import './ChangeUser.css';
import{Link,Navigate} from 'react-router-dom';

function ChangeUser(props,token){

    if(typeof sessionStorage.token === 'string')
    return<Navigate to ="/profile"/>

    const {changeUserVisual} = props

    if(sessionStorage.token === token)
    return<Navigate to ="/home"/>

    return<>
    <form className="changeUser_container"onSubmit={event => {
        event.preventDefault()
        
        const user  = event.target.user.value
        const username = event.target.username.value
        const email = event.target.email.value

        changeUserVisual(user, username, email )

      

    }}>
        <div className="input">
        <input className="changeUser" type="text" placeholder="user" name="user"/>
            <input className="changeUser" type="text" placeholder="username"name="username"/>
            <input className="changeUser" type="text" placeholder="e-mail" name="email"/>
        </div>

        <div className="buttons">
            <button className="Change_button" type="submit">Change User</button>
            <Link to="../../profile"><button className="go_button" type="button">Go Back</button></Link> 
        </div>
    </form>
     
    </>

}

export default ChangeUser