import React from 'react';
import AppContext from './AppContext'
import './InformationNow.sass'

function InformationNow({ maxMin, tide, wind, weather, swellDir }) {

    return (
        <div className="grid__center">
            <aside className="grid__center-aside">

            </aside>
            <aside className="grid__center-aside1">
                <div className="head--information">
                    <div className="">
                        <h3>Surf altura</h3>
                        {maxMin()}
                    </div>
                    <div className="">
                        <h3>Marea</h3>
                        <span>{tide()}m</span>
                    </div>
                    <div className="">
                        <h3>Viento</h3>
                        {wind()}
                    </div>
                    <div className="">
                        <h3>Clima</h3>
                        {weather()}
                    </div>
                    <div className="">
                        <h3>Oleaje</h3>
                        {swellDir()}
                    </div>
                </div>
            </aside>
        </div>
    )

}

export default InformationNow