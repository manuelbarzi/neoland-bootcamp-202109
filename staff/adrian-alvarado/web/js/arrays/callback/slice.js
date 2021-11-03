
function slice(array, start, end) {
    var sliced = []
    var start = start < 0
        ? array.length + start
        : start
    var end = end
        ? (end < 0
            ? array.length + end
            : end)
        : array.length

    for (var i = start; i < end; i++) {
        sliced[sliced.length] = array[i]
    }

    return sliced
}