const weatherNow = (array=[], time='') => {
    let weather
    let differentIcon
    let response = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].timestamp == time) {
            weather = array[i].temperature.toString()

            weather = weather.slice(0, 1)
            response.push(weather)
            differentIcon = array[i].condition
            response.push(differentIcon)
            
            return <span><img src={`https://wa.cdn-surfline.com/quiver/0.19.6/weathericons/${differentIcon}.svg`} />{weather} °c</span>
        } else {
            weather = array[i].temperature.toString()

            weather = weather.slice(0, 1)
            response.push(weather)
            differentIcon = array[i].condition
            response.push(differentIcon)

            return <span><img src={`https://wa.cdn-surfline.com/quiver/0.19.6/weathericons/${differentIcon}.svg`} />{weather} °c</span>
        }
    }
}

export default weatherNow