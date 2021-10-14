function slice(string, init, end) {

    var newSlice = ""

    var start = init < 0 ? string.length + init : init
    var finish = end ? (end < 0 ? string.length + end : end) : string.length


    for (let i = start; i < finish; i++) {
        var char = string[i]

        slice += char
    }

    return newSlice
}