// TODO implement the standalone version of String.prototype.concat()

function concat() {
    var result = ''

    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }

    return result
}