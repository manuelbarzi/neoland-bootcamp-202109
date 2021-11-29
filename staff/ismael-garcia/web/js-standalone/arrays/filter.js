function filter(array, callback) {
    var filtered = [];

    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        
        if (callback(element, i)) {
            filtered[filtered.length] = element;
        }
    }

    return filtered;
}



// El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
// Sintaxis: 
// var newArray = arr.filter(callback(currentValue[, index[, array]])[, thisArg])
// callback:
// Función que comprueba cada elemento del array para ver si cumple la condición (también llamada predicado).  Retorna true si el elemento la cumple o en caso contrario retornará false. 
// Acepta tres parámetros:
// currentValue:
// El elemento actual del array que está siendo procesado.
// index:
// Optional. El índice del elemento actual del array que está siendo procesado.
// array: 
// Optional. El array sobre el que se ha llamado filter.
// thisArg:
// Opcional. Valor a utilizar como this cuando se ejecuta callback.