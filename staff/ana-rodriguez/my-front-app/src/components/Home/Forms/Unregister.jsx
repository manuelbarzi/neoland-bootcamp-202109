import React from "react";
import{Link} from "react-router-dom";
import './Unregister.css';

function Unregister(){

    return<>
    <form className="Unregister_container">
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