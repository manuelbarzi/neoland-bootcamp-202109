
function indexOf(arr, element, fromIndex) {
    for (let i = fromIndex ? fromIndex : 0; i < arr.length; i++) {
        let item = arr[i]

        if (item === element)
            return i
    }

    return -1
}