function some(array, callback) {
    var found = false
    for (let i = 0; i < array.length && !found; i++) {
        var element = array[i];
        if (callback(element, i)) found = true
    }
    return found
}