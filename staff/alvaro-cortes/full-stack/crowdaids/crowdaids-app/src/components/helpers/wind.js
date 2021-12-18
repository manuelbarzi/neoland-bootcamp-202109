const windNow = (array=[], time='') => {
    let wind
    let windText
    let direction
    let response = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].timestamp == time) {
            wind = array[i].speed.toString()
            wind = wind.slice(0, 3)
            response.push(wind)
            windText = array[i].directionType
            response.push(windText)
            direction = array[i].direction.toString()
            direction = direction.slice(0, 6)

            return <><span>{wind} kph - {windText}</span><br /><span>{direction}°</span></>
        } else {
            wind = array[0].speed.toString()
            wind = wind.slice(0, 3)
            response.push(wind)
            windText = array[0].directionType
            response.push(windText)
            direction = array[0].direction.toString()
            direction = direction.slice(0, 6)

            return <><span>{wind} kph - {windText}</span><br /><span className="color--wind">{direction}°</span></>
        }
    }
}

export default windNow