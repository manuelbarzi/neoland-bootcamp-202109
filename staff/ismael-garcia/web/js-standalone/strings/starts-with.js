function startsWith(str, search, position = 0) {
    
    var res = false;
    var j = 0;

    for (var i = position; j < search.length; i++) {
        if (str[i] === search[j]) {
            res = true;
            j++;
        } else {
            res = false;
            break;
        }
    }

    return res;
}



// El método startsWith() indica si una cadena de texto comienza con los caracteres de una cadena de texto concreta, devolviendo true o false según corresponda.
// str.startsWith(stringBuscada[, posicion])
// stringBuscada: Los caracteres a ser buscados al inicio de la cadena de texto.
// posicion (optional): La posición de str en la cual debe comenzar la búsqueda de stringBuscada. El valor por defecto es 0.