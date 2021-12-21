// TODO implement the standalone version of String.prototype.concat()
// .concat junta varios string por ejemplo para formar una frase
// ...strN es para que se formen cadenas que se concatenan en el string
// function concat(string, ...strN) {
// var sentence = string.concat (...strN)
// return sentence
// }
//arguments : es un objeto similar a Array accesible dentro de funciones que contiene los valores de los argumentos pasados a esa función.

function concat() {
    var result= '';
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
        
    }
    return result
}