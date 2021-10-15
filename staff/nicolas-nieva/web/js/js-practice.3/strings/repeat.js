// TODO implement the standalone version of String.prototype.repeat()

function repeat(string, count) {
    var copyString = string
    var finalLenght = count * string.length - string.length
    
    if (count === 0)
    return ''
    if (count < 0)
    console.log ('Range Error')
    if (count === 1)
    return string

    for (let i = 0; i < finalLenght; i++) {
        copyString += copyString[i]

        
    }
    return copyString
}