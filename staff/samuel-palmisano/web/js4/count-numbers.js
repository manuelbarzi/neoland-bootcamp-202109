function countNumbers(values) { // values es de tipo array

    var positives = 0;
    var negatives = 0;
    var balance = 0;

    for (var i = 0; i < values.length; i++) {
        var element = values[i];
        if (element > 0)
            positives += element;
        else
            negatives += element;
    }

    balance = positives + negatives;
    
    var total = [positives, negatives, balance];
    return total;
}

// La función debe devolver un array con 3 posiciones.

// La primera posición debe ser la suma de los números positivos

// La segunda posición debe ser la suma de los números negativos

// La tercera posición debe ser el resultado de positivos - negativos