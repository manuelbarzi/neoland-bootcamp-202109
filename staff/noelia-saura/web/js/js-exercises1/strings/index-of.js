// TODO implement the standalone version of String.prototype.indexOf()

// devuelve el indice, dentro del objeto string que realiza la llamada
// de la primera ocurrencia del valor especificado, 
//comenzando la busqueda desde indexOf , sino el valor es -1

/*function index(stringindex,element) {
    var cadena = stringindex.indexOf(element);
    return cadena;
}*/
//Desglose del indexOf

function indexOf(string,value) {
    var j=0
    for (var i = 0; i < string.length; i++) {
        var character = string[i];
        if(character === value[j]){
           j++
           if(j===value.length){
               return i - j +1
           }
        }
    }
    return -1
}
