import React from 'react'
import './Spinner.css';


function Spinner({state=false}) {

    return <>
    {
        state && <div className="locker">
            <img src="http://localhost:3001/spinner.gif" alt="" />
        </div>
    }
    </>
}

export default Spinner