function createRandomNum(n, m) {
    let arr = [];

    // Implementa tu código aquí!
    let counter = n;

    while (counter > 0) {
        let randomNum = Math.floor(Math.random() * m);
        arr.push(randomNum);
        counter--;
      }

    return arr;
}

// Debemos generar un vector (array) de números aleatorios
// El array debe tener una longitud de n
// Los elementos deben ser números aleatorios entre 0 y m