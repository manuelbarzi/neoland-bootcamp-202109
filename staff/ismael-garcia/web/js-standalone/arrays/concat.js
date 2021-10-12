function concat() { 
    // Recibe dos o más arrays. Devuelve un nuevo array que es la suma de todos los arrays que ha recibido.
    var result = [];

    for (var i = 0; i < arguments.length; i++) {
        var array = arguments[i];

        for (var j = 0; j < array.length; j++) { 
            
            result[result.length] = array[j];
        }
    }
        
    return result;

}