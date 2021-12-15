import React from 'react';
import { useParams } from 'react-router-dom';
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
    dayForecast
}
    from './helpers';
import { IconContext } from "react-icons";
import { ImArrowDown } from "react-icons/im";
import { TiArrowDownOutline } from "react-icons/ti";
import './Home.sass';
import { useContext } from 'react';
import AppContext from './AppContext';
import InformationNow from './InformationNow';

import logger from '../logger'


function Detail({ onGoBack, beach }) {

    logger.info("Detail -> render")

    const { showSpinner, hideSpinner, showModal } = useContext(AppContext)
    const { name, breadCrumbs } = beach

    const [beachInfo, setBeachInfo] = useState([])
    const { id } = useParams()

    useEffect(async () => {

        const { token } = sessionStorage

        if (token) {
            try {

                showSpinner()

                const beachInformation = await retrieveBeach(token, id)

                setBeachInfo(beachInformation)

                hideSpinner()

            } catch ({ message }) {

                hideSpinner()
                showModal('Error', message)
            }
        }
    }, [id])

    const utcActual = () => getUtcBeach(beachInfo[0]?.data?.wave[0]?.utcOffset)
    
    const maxMin = () => heigthMaxMin(beachInfo[0]?.data?.wave, utcActual)
    
    const tide = () => tideNow(beachInfo[3]?.data?.tides, utcActual)

    const wind = () => windNow(beachInfo[4]?.data?.wind, utcActual)

    const weather = () => weatherNow(beachInfo[2]?.data?.weather, utcActual)

    const swellDir = () => swellDirections(beachInfo[0]?.data?.wave, utcActual)

    //const coordMap = toxy('coord.lon', 'coord.lat')

    //const arrS = arrowSwell('arrayUTC', 'utcActual')

    //const arrW = arroWind('arrayWind', 'utcActual')

    return <>
        <div className="container__results--title">
            <h3>{breadCrumbs}</h3>
            <h1 id="title__beach">Informe actual de surf de {name}</h1>
        </div>
        <div className="">
            <InformationNow
                maxMin={maxMin}
                tide={tide}
                wind={wind}
                weather={weather}
                swellDir={swellDir} />

            {/*MEtes el otro compo con lo que te falta*/}
        </div>
    </>
}

export default Detail