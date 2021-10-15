function forEach(array, callback) {

    for (let i = 0; i < array.length; i++) {
        var element = array[i]

        callback(element, i)
    }
}