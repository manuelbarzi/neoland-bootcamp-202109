function forEach(array, callback) {
    for (var i = 0; i < array.length; i++) {
        var element = array[i]

        callback(element, i)        
    }
}



// El método forEach() ejecuta la función indicada una vez por cada elemento del array.
// Sintaxis: 
// arr.forEach(function callback(currentValue, index, array) {
      // tu iterador
// }[, thisArg]);
// callback: Función a ejecutar por cada elemento, que recibe tres argumentos:
// currentValue: El elemento actual siendo procesado en el array.
// index (optional): El índice del elemento actual siendo procesado en el array.
// array (optional): El vector en el que forEach() esta siendo aplicado.
// thisArg (optional): Valor que se usará como this cuando se ejecute el callback.
// Valor de retorno: undefined.