Biblio.prototype.includes = function(searchElement, position) {
    
    var res = false;
    var position = position ? position : 0;

    for (var i = position; (i < this.length && res === false); i++) {
        var char = this[i];

        if (char === searchElement) {
            res = true;
        }

    }

    return res;
}

// El método includes() determina si una cadena de texto puede ser encontrada dentro de otra cadena de texto, devolviendo true o false según corresponda.
// sintaxis: str.includes(searchString[, position])
// searchString: Una cadena a buscar en el texto str.
// position Optional: La posición dentro de la cadena en la cual empieza la búsqueda de searchString (Por defecto este valor es 0).