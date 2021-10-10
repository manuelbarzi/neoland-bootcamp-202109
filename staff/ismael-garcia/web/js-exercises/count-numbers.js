function numbers(values) { // values es de tipo array
    var totalPositives = 0;
    var totalNegatives = 0;
    var copyValues = values;

    for (var i = 0; i < copyValues.length; i++) {
        var item = copyValues[i];
        if (item >= 0) {
            totalPositives += item;
        } else {
            totalNegatives += item;
        }
    }

    var balance = totalPositives + totalNegatives;
    var arrCount = [totalPositives, totalNegatives, balance];
    return arrCount;
}

// La función debe devolver un array con 3 posiciones.

// La primera posición debe ser la suma de los números positivos

// La segunda posición debe ser la suma de los números negativos

// La tercera posición debe ser el resultado de positivos - negativos