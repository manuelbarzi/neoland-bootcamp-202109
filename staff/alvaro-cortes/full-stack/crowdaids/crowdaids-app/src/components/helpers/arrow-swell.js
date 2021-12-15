const arrowSwell = (array, time) => {
    let arrow;

    for (let i = 0; i < array.length; i++) {
        if (array[i].timestamp == time) {
            arrow = array[i].swells[0].direction

            return arrow
        } else {
            arrow = array[0].swells[0].direction

            return arrow
        }
    }
}

export default arrowSwell