
function getMaxValue(arr) {
    let maxValue = 0

    for (let i = 0; i < arr.length; i++) {
        let arrValue = arr[i]

        if (arrValue > maxValue) {
            maxValue = arrValue
        }
    }

    return maxValue
}