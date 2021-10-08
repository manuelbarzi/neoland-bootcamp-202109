function numbers(values) { // values es de tipo array
    var totalPositives = 0;
    var totalNegatives = 0;
    
    for (var i = 0; i < values.length; i++) {
        
        if(values[i] > 0){
            totalPositives += parseInt(values[i]);
        }else{
            totalNegatives += parseInt(values[i]);
        }
        
    }
    Total = totalPositives + totalNegatives;

    var cadenaCount = [totalPositives, totalNegatives, Total];
    return cadenaCount;
}


// La función debe devolver un array con 3 posiciones.

// La primera posición debe ser la suma de los números positivos

// La segunda posición debe ser la suma de los números negativos

// La tercera posición debe ser el resultado de positivos - negativos 