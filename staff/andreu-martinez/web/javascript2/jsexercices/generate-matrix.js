function generateMatrix(n, m, k) {
    let matrix = [];

    // Implementa tu código aquí!
    for (let i = 0; i < n; i++) {
        matrix[i] = []
            for (let j = 0; j < m; j++) {
           matrix[i][j] = Math.floor(Math.random()*k);
        }
    }
    return matrix;
}

// Debemos generar una matriz (array de arrays) de números aleatorios
// La matriz (el array principal) debe tener una longitud de n
// Los vectores (los arrays secundarios) debe tener una longitud de m
// Los elementos deben ser números aleatorios entre 0 y k