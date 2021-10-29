// TODO implement the standalone version of String.prototype.concat()

function concat() {
    var newStr = ''
    for (let i = 0; i < arguments.length; i++) {
        newStr += arguments[i]
    }
    return newStr
}