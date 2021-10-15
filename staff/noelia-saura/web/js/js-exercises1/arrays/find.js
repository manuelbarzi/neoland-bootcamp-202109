//devuelve el valor del primer elemento dela rray que cumple la funcion de prueba proporcionada

function find(array, callback) {
    // TODO
    var result;  //<= para que de undefined, porque no hay nada definido

    for (var i = 0; i < array.length; i++) {
        var element = array[i];

        if (callback(element, i) === true) {
            result = element
            return result
        }
        
    }
    return result
}