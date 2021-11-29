function slice(string, init) {
    // for loop
    // var aux (new string)
    // return aux
    var res = '';

    var start = init < 0 ? string.length + init : init;
    var finish = end ? (end < 0 ? string.length + end : end) : string.length;

    for (var i = start; i < finish; i++) {
        var char = string[i];

        res += char;
    }

    /* Otra manera menos eficiente de hacerlo, por requerir mayor cálculo en cada iteración del for loop, sería:
    for (var i = init < 0 ? string.length + init : init; i < (end ? (end < 0 ? string.length + end : end) : string.length); i++) {
        var char = string[i];

        res += char;
    }*/
    
    return res;
}

// El método slice() extrae una sección de una cadena y devuelve una cadena nueva.
    // cadena.slice(inicioTrozo[, finTrozo])
    // inicioTrozo: El índice basado en cero en el cual empieza la extracción.  Si es negativo, se trata como longCadena + inicioTrozo donde longCadena es la longitud de la cadena (por ejemplo, si inicioTrozo es -3 se trata como longCadena - 3)
    // finTrozo: Opcional. El índice basado en cero en el que termina la extracción. Si se omite, slice extrae hasta el final de la cadena.  Si es negativo, se trata como longCadena + finTrozo donde longCadena es la longitud de la cadena (por ejemplo, si finTrozo es -3 se trata como longCadena - 3)