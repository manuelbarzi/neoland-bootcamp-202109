function orderNumbers(numbers, order) {
    // Numbers es tipo [] y order es de tipo String

    var ordered = [];   // El [] que vamos a devolver en la función

    if (order === "asc") {  // Si ocurre esto
                                // hacemos esto
        ordered = numbers.sort(function(a, b) {
            return a - b;
        });
    }
    else if (order === "desc") {    // Si no pero ocurre esto
                                        // hacemos esto
        ordered = numbers.sort(function(a, b) {
            return b - a;
        });
    }
    else {  // Si no en último caso
            // hacemos esto
        console.log("El parámetro order debe ser 'asc' o 'desc'")
        ordered = numbers;
    }

    return ordered;
    // Debo devolver un array de números ordenados
    // De forma ascendente o descendente según el
    // valor pasado por el parámetro order

}