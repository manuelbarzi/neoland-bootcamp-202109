const heigthMaxMin = (array = [], time='') => {
    let swellMax
    let swellMin
    let response = []
    
    for (let i = 0; i < array.length; i++) {
        if (array[i].timestamp == time) {
            swellMax = array[i].surf.max.toString()
            swellMin = array[i].surf.min.toString()

            swellMax = swellMax.slice(0, 3)
            response.push(swellMax)
            swellMin = swellMin.slice(0, 3)
            response.push(swellMin)

            return <span>{swellMax} - {swellMin} m</span>
        } else {
            swellMax = array[0].surf.max.toString()
            swellMin = array[0].surf.min.toString()

            swellMax = swellMax.slice(0, 3)
            response.push(swellMax)
            swellMin = swellMin.slice(0, 3)
            response.push(swellMin)

            return <span>{swellMax} - {swellMin} m</span>
        }
    }
}

export default heigthMaxMin