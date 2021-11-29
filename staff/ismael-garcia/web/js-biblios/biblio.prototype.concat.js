Biblio.prototype.concat = function() { 
    
    var result = new Biblio;

    for (var i = 0; i < this.length; i++) {
        var thisElem = this[i];
        result[result.length] = thisElem;
        result.length++;
    }

    for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];

        for (var j = 0; j < arg.length; j++) { 
            result[result.length] = arg[j];
            result.length++;
        }

    }
        
    return result;

}


// Recibe dos o más arrays. Devuelve un nuevo array que es la suma de todos los arrays que ha recibido.