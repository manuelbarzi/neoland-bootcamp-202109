// TODO implement the standalone version of Array.prototype.concat()

function concat(array0, array1, array2, ...arg) {
    var arrays = [array0, array1, array2, ...arg]
    var conc = ""

    for (let i = 0; i < arrays.length; i++) {
        arrays[i] += conc
    }

    return arrays
}