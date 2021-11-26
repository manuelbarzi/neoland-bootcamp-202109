function countValues(values) { // values es de tipo array
    var totalItems = 0;
    var totalTrue = 0;
    var totalFalse = 0;

    var arrCount = [totalItems, totalTrue, totalFalse];

    for (var  i = 0; i < values.length; i++){
        totalItems++;
        if(values[i]===true){
            totalTrue++
        }else if(i < values.length){
            totalFalse++
        }
    }

    arrCount = [totalItems, totalTrue, totalFalse];
    return arrCount;
}

// La función debe devolver un array con 3 posiciones.

// La primera posición debe ser el número total de elementos del array
// que nos pasa el usuario

// La segunda posición debe ser el número de elementos true que posee
// el array

// La tercera posición debe ser el número de elementos false que posee
// el array