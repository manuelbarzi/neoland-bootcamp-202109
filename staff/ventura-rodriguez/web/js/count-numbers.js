function countNumbers(values) { // values es de tipo array

    var copyValues = values;
    var totalPositives = 0;
    var totalNegatives = 0;
    var balance = 0;

    for (let i = 0; i < copyValues.length; i++) {
        var element = copyValues[i];
        if (element > 0)
            totalPositives += element;
        else
            totalNegatives += element;
    }

    balance = totalPositives + totalNegatives;
    
    var arrCount = [totalPositives, totalNegatives, balance];
    return arrCount;
}

// La función debe devolver un array con 3 posiciones.

// La primera posición debe ser la suma de los números positivos

// La segunda posición debe ser la suma de los números negativos

// La tercera posición debe ser el resultado de positivos - negativos