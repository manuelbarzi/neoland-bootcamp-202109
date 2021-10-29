// TODO implement the standalone version of String.prototype.repeat()

function repeat(string, count) {
    newStr = ''

    for (let i = 0 ; i < count; i++){
        newStr = newStr.concat(string)
    }

    return newStr
}