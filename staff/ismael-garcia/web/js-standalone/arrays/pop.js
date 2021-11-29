function pop(array) {
    // El método pop() elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.
    // Devuelve undefined si el array está vacío.
    if (array.length === 0) {
        return;
    }
    
    var res = array[array.length - 1];

    array.length--;

    return res;
}