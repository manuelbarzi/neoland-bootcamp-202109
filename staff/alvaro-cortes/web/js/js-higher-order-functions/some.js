function some(array, callback) {
    var result = false
    for (let i = 0; (i < array.length && !result); i++) {
        var element = array[i]

        /*if (callback(element, i)) {
            result = true
        }*/
        result = (callback(element, i)) ? true : false;

    }
    return result
}