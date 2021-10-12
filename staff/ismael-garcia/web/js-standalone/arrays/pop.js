function pop(array) {
    // El método pop() elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.
    // Devuelve undefined si el array está vacío.

    var res = array[array.length - 1];

    array.length = array.length - 1;

    return res;
}