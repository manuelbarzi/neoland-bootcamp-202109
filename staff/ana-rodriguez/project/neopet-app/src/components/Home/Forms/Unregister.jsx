import React from "react";
import{Link} from "react-router-dom";
import './styles/Unregister.css';

function Unregister(props){
  
  const {unregisterVisual} = props

    return<>
    <form className="Unregister_container" onSubmit={event =>{
        event.preventDefault()

        const password = event.target.password.value
        
        unregisterVisual(password)

       
    }}>
        <div className="input">
            <h1>Unregister</h1>
        <input className="Unregister" type="password" placeholder="password" name="password"/>
        </div>
        <div className="buttons">
                <button className="unregister_button" type="submit">Unregister</button> 
                <Link to="../../profile"><button className="go_button" type="button">Go Back</button></Link>    
            </div>
    </form>
    </>
}

export default Unregister