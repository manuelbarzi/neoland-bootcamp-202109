function find(array, callback) {

    for (let i = 0; i < array.length; i++) {
        var element = array[i];
        
        if (callback(element, i)) {
            
            return element;
        }
    }
}



// El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
// Sintaxis: 
// arr.find(callback(element[, index[, array]])[, thisArg])
// callback:
// Función que se ejecuta sobre cada valor en el array, tomando tres argumentos:
// element:
// El elemento actual que se está procesando en el array.
// index: 
// Optional. El índice (posición) del elemento actual que se está procesando en el array.
// array: 
// Optional. El array desde el que se llama al método find.
// thisArg: 
// Optional. Objeto a usar como this cuando se ejecuta callback.