//devuelve el valor del primer elemento de la array que cumple la funcion de prueba proporcionada
Biblio.prototype.find = function(callback){
    // TODO
    var result;//<= para que dé undefined, porque no hay nada definido

    for (var i = 0; i < this.length; i++) {
        var element = this[i];

        if (callback(element, i) === true) {
            result = element
            return result
        }
        
    }
    return result
}