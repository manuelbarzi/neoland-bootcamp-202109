function filter(array, callback) {
    var result = []

    for (let i = 0; i < array.length; i++) {
        var element = array[i]

        if(callback(element, i)) {
            result.push(element)
        }

    }
    return result
}