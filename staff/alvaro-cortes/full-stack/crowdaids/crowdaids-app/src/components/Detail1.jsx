import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { retrieveBeach } from '../logic';
import { 
    toxy, 
    heigthMaxMin, 
    tideNow, 
    windNow, 
    weatherNow, 
    getUtcBeach, 
    arrowSwell,
    arroWind, 
    swellDirections, 
    mapBeach, 
    dayForecast } 
    from './helpers'
import { IconContext } from "react-icons";
import { ImArrowDown } from "react-icons/im";
import { TiArrowDownOutline } from "react-icons/ti";
import './Home.sass'
import { useContext } from 'react'
import AppContext from './AppContext'

import logger from '../logger'

function Detail({ onGoBack }, beach) {
    logger.info("Detail -> render")

    const { showSpinner, hideSpinner, showModal } = useContext(AppContext)
    const { name, breadCrumbs } = beach

    const [beachInfo, setBeachInfo] = useState({})
    const { id } = useParams()
    //const [firstHour, setFirstHour] = useState(null)
    //const [utcApi, setUtcApi] = useState(null)
    //const [arrayUTC, setArrayUTC] = useState({})
    //const [arrayTides, setArrayTides] = useState({})
    //const [arrayWind, setArrayWind] = useState({})
    //const [arrayWeather, setArrayWeather] = useState({})
    //const [iconWeather, setIconWeather] = useState(null)
    //const [coord, setCoord] = useState({})

    useEffect(async () => {

        const { token } = sessionStorage

        if (token) {
            try {
                showSpinner()

                const beachInformation = await retrieveBeach(token, id)

                hideSpinner()
                
                setBeachInfo(beachInformation)
                //setFirstHour(beach[0].data.wave[0].timestamp)
                //setCoord(beach[0].associated.location)
                //setUtcApi(beach[0].data.wave[0].utcOffset)
                //setArrayUTC(beach[0].data.wave)
                //setArrayTides(beach[3].data.tides)
                //setArrayWind(beach[4].data.wind)
                //setArrayWeather(beach[2].data.weather)
                //setIconWeather(beach[2].associated.weatherIconPath)
            } catch ({ message }) {
                hideSpinner()

                showModal('Error', message)
            }
        }
    }, [id])

    let region;

    //for (let i = 0; i < breadCrumbs.length; i++) {
    //    if (i === 0) region = breadCrumbs[i] + " / "
    //    else region += breadCrumbs[i] + " / "
    //}

    const utcActual = getUtcBeach(utcApi)

    const coordMap = toxy('coord.lon', 'coord.lat')

    const arrS = arrowSwell('arrayUTC', 'utcActual')

    const arrW = arroWind('arrayWind', 'utcActual')

    const time1 = 'firstHour'
    const time2 = time1 + 10800
    const time3 = time2 + 10800
    const time4 = time3 + 10800
    const time5 = time4 + 10800
    const time6 = time5 + 10800
    const time7 = time6 + 10800
    const time8 = time7 + 10800

    return <>
        <div className="container__results--title">
            <h3>{breadCrumbs}</h3>
            <h1 id="title__beach">Informe actual de surf de {name}</h1>
        </div>
        <div className="container__results">
            <div className="container  container--vertical result--beach">
                <table className="table container--vertical">
                    <tbody>
                        <tr>
                            <td className="table--title">Surf altura</td>
                            <td className="table--title">Marea</td>
                            <td className="table--title">Viento</td>
                        </tr>
                        <tr>
                            <td className="table--result">{heigthMaxMin('arrayUTC', 'utcActual')}</td>
                            <td className="table--result">{tideNow('arrayTides', 'utcActual')}</td>
                            <td className="table--result">{windNow('arrayWind', 'utcActual')}</td>
                        </tr><br />
                        <tr>
                            <td className="table--title">Clima</td>
                            <td className="table--title">Oleaje</td>
                        </tr>
                        <tr>
                            <td className="table--result">{weatherNow('arrayWeather', 'utcActual', 'iconWeather')}</td>
                            <td className="table--result">{swellDirections('arrayUTC', 'utcActual')}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="map" style={{ backgroundImage: `url(${`https://api.maptiler.com/maps/basic/256/9/${coordMap[0]}/${coordMap[1]}.png?key=7aiwCGhglRXo4QbAr4RI`})` }} >
                    {mapBeach()}
                    <IconContext.Provider value={{ color: "orange", size: "2rem", className: "iconS" }} >
                        <div className="arrow--swell" style={{ transform: ` rotate(${arrS}deg)` }}>
                            <ImArrowDown className="iconS" />
                        </div>
                    </IconContext.Provider >
                    <IconContext.Provider value={{ color: "black", size: "2rem", className: "iconW" }} >
                        <div className="arrow--wind" style={{ transform: ` rotate(${arrW}deg)` }}>
                            <TiArrowDownOutline className="iconW" />
                        </div>
                    </IconContext.Provider >
                </div><br /><br />
            </div>
            <div className="surf--graph">
                <h1>Pronóstico próximos 7 días</h1>
                <div>
                    <table className="table table--forecast container--vertical">
                        <thead>
                            <th>Martes 14/12</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>Surf</td>
                                <td>Oleaje primario</td>
                                <td>Oleaje secundario</td>
                                <td>Viento</td>
                                <td>Tiempo</td>
                            </tr>
                            {dayForecast('arrayUTC', 'arrayWind', 'arrayWeather', 'iconWeather', 'time1')}
                            {dayForecast('arrayUTC', 'arrayWind', 'arrayWeather', 'iconWeather', 'time2')}
                            {dayForecast('arrayUTC', 'arrayWind', 'arrayWeather', 'iconWeather', 'time3')}
                            {dayForecast('arrayUTC', 'arrayWind', 'arrayWeather', 'iconWeather', 'time4')}
                            {dayForecast('arrayUTC', 'arrayWind', 'arrayWeather', 'iconWeather', 'time5')}
                            {dayForecast('arrayUTC', 'arrayWind', 'arrayWeather', 'iconWeather', 'time6')}
                            {dayForecast('arrayUTC', 'arrayWind', 'arrayWeather', 'iconWeather', 'time7')}
                            {dayForecast('arrayUTC', 'arrayWind', 'arrayWeather', 'iconWeather', 'time8')}          
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
}

export default Detail