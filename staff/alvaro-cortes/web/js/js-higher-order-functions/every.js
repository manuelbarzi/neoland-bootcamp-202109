function every(array, callback) {
    var bool = true;

    for (let i = 0; (i < array.length && bool); i++) {
        var element = array[i]

        bool = (callback(element, i)) ? true : false
    }
    return bool
}