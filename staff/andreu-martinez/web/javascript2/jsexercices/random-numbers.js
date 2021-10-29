function randomNumbers(n, m) {
    var arr = [];

    for (let i = 0; i < n; i++) {
        //math.floor makes the number integer
        arr.push(Math.floor(Math.random()*m));
    }

    return arr;
}

// Debemos generar un vector (array) de números aleatorios
// El array debe tener una longitud de n
// Los elementos deben ser números aleatorios entre 0 y m