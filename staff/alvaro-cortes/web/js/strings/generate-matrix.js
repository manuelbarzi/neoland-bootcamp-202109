function generateMatrix(n, m, k) {

    var matrix = []
    var vector = []

    for (let i = 0; i < n; i++) {
        var math = 0;

        for (let j = 0; j < m; j++) {
            math = Math.round(Math.random() * k);
            if (math <= k) {
                vector.push(math)
            } else {
                j--
            }

        }
        matrix.push(vector)
        vector = []

    }
    return matrix
}

// Debemos generar una matriz (array de arrays) de números aleatorios
// La matriz (el array principal) debe tener una longitud de n
// Los vectores (los arrays secundarios) debe tener una longitud de m
// Los elementos deben ser números aleatorios entre 0 y k