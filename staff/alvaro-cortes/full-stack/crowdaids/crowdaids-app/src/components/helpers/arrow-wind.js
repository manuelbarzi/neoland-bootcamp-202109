const arroWind = (array, time) => {
    let arrow;

    for (let i = 0; i < array.length; i++) {
        if (array[i].timestamp == time) {
            arrow = array[i].direction

            return arrow
        } else {
            arrow = array[0].direction

            return arrow
        }
    }
}

export default arroWind