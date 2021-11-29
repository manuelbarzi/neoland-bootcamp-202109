function countValues(values) { // values es de tipo array
    var totalItems = values.length;
    var totalTrue = 0;
    var totalFalse = 0;
    var copyValues = values;
    
    for (var i = 0; i < copyValues.length; i++) {
        var item = copyValues[i];
        if (item === true) {
            totalTrue += 1;
        } else {
            totalFalse += 1;
        }
    }

    var arrCount = [totalItems, totalTrue, totalFalse];
    return arrCount;
}

// La función debe devolver un array con 3 posiciones.

// La primera posición debe ser el número total de elementos del array
// que nos pasa el usuario

// La segunda posición debe ser el número de elementos true que posee
// el array

// La tercera posición debe ser el número de elementos false que posee
// el array