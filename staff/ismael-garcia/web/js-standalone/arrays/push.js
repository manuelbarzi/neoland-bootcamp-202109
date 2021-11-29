function push(array, ...elements) {
    // El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
    var args = [...elements];
    
    for (var i = 0; i < args.length; i++) {
        array[array.length] = args[i];

    }

    return array.length;
}