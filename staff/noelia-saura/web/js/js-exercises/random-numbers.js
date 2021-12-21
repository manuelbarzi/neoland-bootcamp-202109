function randomNumbers(n, m) {
    var arr = [];
    
    for (var i = 0; i < n; i++) {
        var random = Math.floor(Math.random() * (m - 0 + 1) ) + 0;
        arr[i]=random;
    }

    return arr;
}


// Debemos generar un vector (array) de números aleatorios
// El array debe tener una longitud de n
// Los elementos deben ser números aleatorios entre 0 y m