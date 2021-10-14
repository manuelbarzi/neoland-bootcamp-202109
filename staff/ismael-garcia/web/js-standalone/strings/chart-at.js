function charAt(str, index = 0) {
    
    var res = '';

    if (index >= 0 && index <= str.length - 1) { 
        res = str[index];
        
    }
    
    return res;
}


// El método charAt() de String devuelve en un nuevo String el carácter UTF-16 de una cadena.
// sintaxis: str.charAt(índice)
// índice: Un entero entre 0 y 1 menos que la longitud de la cadena. Si no se proporciona ningún índice charAt() utilizará 0.
// Si el indice que usted proporciona está fuera del rango, JavaScript devuelve una cadena vacía.