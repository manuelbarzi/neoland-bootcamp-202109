function getValue(arr, target) {
    let copyArr = arr
    let valueReturn = copyArr[0]
    let avgValue = 0

    if (target === 'max') {
        for (let i = 0; i < arr.length; i++) {

            if (valueReturn < copyArr[i]) {
                valueReturn = copyArr[i]
            }
        }

    } else if (target === 'min') {
        for (let i = 0; i < arr.length; i++) {

            if (valueReturn > copyArr[i]) {
                valueReturn = copyArr[i]
            }
        }

    } else if (target === 'avg') {
        for (let i = 0; i < arr.length; i++) {
            avgValue += (copyArr[i] / copyArr.length)
            valueReturn = avgValue
        }
    }

    return valueReturn
}