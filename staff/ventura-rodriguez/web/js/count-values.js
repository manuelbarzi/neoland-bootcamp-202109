function countValues(values) { // values es de tipo array

    var copyValues = values;
    var totalItems = copyValues.length;
    var totalTrue = 0;
    var totalFalse = 0;

    for (let i = 0; i < copyValues.length; i++) {
        var element = copyValues[i];
        if (element)
            totalTrue++;
        else 
            totalFalse++;
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