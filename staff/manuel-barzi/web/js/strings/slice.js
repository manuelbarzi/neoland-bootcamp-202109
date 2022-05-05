// TODO implement the standalone version of String.prototype.slice()

function slice(string, init, end) {
    // for loop
    // var aux (new string)
    // return aux
    var slice = ''

    var start = init < 0? string.length + init : init
    var finish = end? (end < 0? string.length + end : end) : string.length

    for (var i = start; i < finish; i++) {
        var char = string[i]

        slice += char // slice = slice + char
    }

    return slice
}