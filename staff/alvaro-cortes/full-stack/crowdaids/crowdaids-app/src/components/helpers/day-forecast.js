const dayForecast = (arraySwell, arrayWind, arrayWeather, icon, time) => {
    let time1 = time
    let swellMax;
    let swellMin;
    let primarySwell;
    let secondarySwell;
    let wind;
    let windText;
    let weather;
    let iconWeather;
    let date = time1 * 1000
    date = new Date(date)
    date = date.toString()
    let hour = date.slice(16, 18)

    for (let i = 0; i < arraySwell.length; i++) {   
        if (arraySwell[i].timestamp == time1) {
            swellMax = arraySwell[i].surf.max.toString()
            swellMin = arraySwell[i].surf.min.toString()
            swellMax = swellMax.slice(0, 3)
            swellMin = swellMin.slice(0, 3)

            primarySwell = arraySwell[i].swells[0]
            secondarySwell = arraySwell[i].swells[1]
            
        }
    }
    for (let a = 0; a < arrayWind.length; a++) {
        if (arrayWind[a].timestamp == time1) {
            wind = arrayWind[a].speed.toString()
            wind = wind.slice(0, 2)

            windText = arrayWind[a].directionType
        }
    }
    for (let j = 0; j < arrayWeather.length; j++) {
        if (arrayWeather[j].timestamp == time1) {
            weather = arrayWeather[j].temperature.toString()
            weather = weather.slice(0, 2)
            iconWeather = arrayWeather[j].condition
        }
    }

    return (
        <tr>
            <td>{hour}</td>
            <td>{swellMin} - {swellMax}m</td>
            <td>{primarySwell}</td>
            <td>{secondarySwell}</td>
            <td>{wind}kph {windText}</td>
            <td><img src={`${icon}/${iconWeather}.svg`} />{weather} °c</td>
        </tr>
    )
}

export default dayForecast