function indexOf(string, value) {
    //for to iterate string
    // when caracter ===>value => return index
    var j = 0
    for (var i = 0; i < string.length; i++) {
        var caracter = string[i]
        if (caracter === value[j]) {
            j++
            if (j === value.length) {
                return i - j + 1
            } else {
                j = 0
            }
        }
    }
    return -1
}

