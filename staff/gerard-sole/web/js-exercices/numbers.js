function numbers(numbers) { 
    var totalPositives = 0;
    var totalNegatives = 0;
    var balance = 0;
    
    for(var i=0; i < numbers.length; i++) {
        if(numbers[i] > 0) {
        totalPositives = totalPositives + numbers[i]
        }
        else {

        totalNegatives++
        }
    }
    balance = totalPositives -totalNegatives
    var arrCount = [totalPositives, totalNegatives, balance];
    return arrCount; 
      
}


// La función debe devolver un array con 3 posiciones.

// La primera posición debe ser la suma de los números positivos

// La segunda posición debe ser la suma de los números negativos

// La tercera posición debe ser el resultado de positivos - negativos