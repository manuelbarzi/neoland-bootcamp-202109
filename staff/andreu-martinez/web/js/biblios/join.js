function join(array){
    var cadena = ''

    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        cadena += element
    }
    return cadena
}