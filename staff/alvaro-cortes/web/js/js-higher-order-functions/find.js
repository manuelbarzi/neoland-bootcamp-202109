function find(array, callback) {
    var result;

    for (let i = 0; (i < array.length && !result); i++) {
        var element = array[i]

        if (callback(element, i)) {
            result = element
        }
    }
    return result
}