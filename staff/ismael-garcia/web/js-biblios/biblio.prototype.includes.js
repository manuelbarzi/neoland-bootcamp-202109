function includes(string, searchElement, position) {
    var res = false;
    var position = position ? position : 0;
    var j = 0;

    for (var i = position; (i < string.length && j < searchElement.length); i++) {
        var char = string[i];

        if (char === searchElement[j]) {
            j++;

            res = true;
        } else {
            j = 0;

            res = false;
        }
    }

    return res;
}

// El método includes() determina si una cadena de texto puede ser encontrada dentro de otra cadena de texto, devolviendo true o false según corresponda.
// sintaxis: str.includes(searchString[, position])
// searchString: Una cadena a buscar en el texto str.
// position Optional: La posición dentro de la cadena en la cual empieza la búsqueda de searchString (Por defecto este valor es 0).