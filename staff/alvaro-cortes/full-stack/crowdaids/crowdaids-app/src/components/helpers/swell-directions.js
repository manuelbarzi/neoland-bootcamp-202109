const swellDirections = (array=[], time='') => {
    let direction
    let directionMin
    let response = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].timestamp == time) {
            direction = array[i].swells[0].direction.toString()
            directionMin = array[i].swells[0].directionMin.toString()

            direction = direction.slice(0, 6)
            response.push(direction)
            directionMin = directionMin.slice(0, 6)
            response.push(direction)

            return (<><span>Oleaje primario: {direction}°</span><br /><span className="color--swell">Oleaje secundario: {directionMin}°</span></>)
        } else {
            direction = array[0].swells[0].direction.toString()
            directionMin = array[0].swells[0].directionMin.toString()

            direction = direction.slice(0, 6)
            response.push(direction)
            directionMin = directionMin.slice(0, 6)
            response.push(direction)

            return (<><span>Oleaje primario: {direction}°</span><br /><span className="color--swell">Oleaje secundario: {directionMin}°</span></>)
        }
    }
}

export default swellDirections