// TODO implement the standalone version of Array.prototype.push()
// añade uno o mas elementos al final de un array y lo devuele con la nueva longitud de la array
/*function thingsPush(colors) {
    var pushing = colors.push(otherColors)
    return pushing
}*/

function push(array,element) {
    array[array.length]=element

    return array.length
}