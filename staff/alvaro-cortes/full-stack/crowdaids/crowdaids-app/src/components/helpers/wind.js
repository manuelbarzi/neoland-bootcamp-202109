const windNow = (array=[], time='') => {
    let wind
    let windText
    let response = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].timestamp == time) {
            wind = array[i].speed.toString()
            wind = wind.slice(0, 2)
            response.push(wind)
            windText = array[i].directionType
            response.push(windText)

            return <span>{wind} kph - {windText}</span>
        } else {
            wind = array[0].speed.toString()
            wind = wind.slice(0, 2)
            response.push(wind)
            windText = array[0].directionType
            response.push(windText)

            return <span>{wind} kph - {windText}</span>
        }
    }
}

export default windNow