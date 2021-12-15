const tideNow = (array=[], time='') => {
    let tide
    for (let i = 0; i < array.length; i++) {
        if (array[i].timestamp == time) {
            tide = array[i].height.toString()
            tide = tide.slice(0, 3)

            return tide
        } else {
            tide = array[0].height.toString()
            tide = tide.slice(0, 3)

            return tide
        }
    }
}

export default tideNow