function map(array, callback) {
    var result = []

    for (var i = 0; i < array.length; i++) {
        var element = array[i]

        result[i] = callback(element, i)        
    }

    return result
}


// El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
// Sintaxis:
// var nuevo_array = arr.map(function callback(currentValue, index, array) {
     // Elemento devuelto de nuevo_array
// }[, thisArg])
// callback:
// Función que producirá un elemento del nuevo array, recibe tres argumentos:
// currentValue:
// El elemento actual del array que se está procesando.
// index:
// El índice del elemento actual dentro del array.
// array:
// El array sobre el que se llama map.
// thisArg:
// Opcional. Valor a usar como this al ejecutar callback.