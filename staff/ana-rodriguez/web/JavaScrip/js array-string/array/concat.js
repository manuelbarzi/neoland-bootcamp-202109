function concat() {
    var result = [];
    for (var i = 0; i < arguments.length; i++) {
        for (var j = 0; j < arguments.length; j++) {
            result[result.length] = arguments[i][j];
        }
    }
    return result;
}