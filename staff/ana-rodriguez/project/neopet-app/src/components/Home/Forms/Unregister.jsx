import React from "react";
import{Link,Navigate} from "react-router-dom";
import './Unregister.css';

function Unregister(props){
    if(typeof sessionStorage.token === 'string')
    return<Navigate to ="/profile"/>

  const {unregisterVisual} = props

    return<>
    <form className="Unregister_container" onSubmit={event =>{
        event.preventDefault()

        const password = event.target.password.value
        
        unregisterVisual(password)

       
    }}>
        <div className="input">
        <input className="Unregister" type="password" placeholder="password" name="password"/>
        </div>
        <div className="buttons">
                <button className="unregister_button" type="submit">Unregister</button> 
                <Link to="../../profile"><button className="button" type="button">Go Back</button></Link>    
            </div>
    </form>
    </>
}

export default Unregister