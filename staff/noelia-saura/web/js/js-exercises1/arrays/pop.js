// TODO implement the standalone version of Array.prototype.pop()
//la funcion .pop () extrae el ultimo elemento de la variable
/*function popThings(things) {
    var pop = things.pop()
    return pop
}*/

function pop(array) {
    var last = array[array.length -1]
    array.length--
    return last
}