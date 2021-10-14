// TODO implement the standalone version of String.prototype.concat()

// TODO implement the standalone version of String.prototype.concat()

function concat() { // concat(hola, [' ', 'mundo'])
    // Recibe dos o más strings. Devuelve un nuevo string que es la suma de todos los strings que ha recibido.
    var result = "";
    // var args = [...arguments]; // [' ', 'mundo']

    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }

    return result;

}