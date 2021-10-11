function generateMatrix(n, m, k) {
    var matrix = [];

    // Implementa tu código aquí!
    var vector = [];

    for (var i = 0; i < (n * m); i++) {
        var randomNum = Math.floor(Math.random() * k);
        vector.push(randomNum);
        
        if (vector.length === m) {
            matrix.push(vector);
            vector = [];

        }
    }

    return matrix;
}

// Debemos generar una matriz (array de arrays) de números aleatorios
// La matriz (el array principal) debe tener una longitud de n
// Los vectores (los arrays secundarios) debe tener una longitud de m
// Los elementos deben ser números aleatorios entre 0 y k
