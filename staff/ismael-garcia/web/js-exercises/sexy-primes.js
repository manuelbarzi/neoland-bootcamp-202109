// Los primos sexy son pares de dos primos que están
// separados por 6
function sexyPrimes(a, b) {
    // Implementa tu código aquí
    var result = Boolean;
    var checkAPrime = a / 2;
    var checkBPrime = b / 2;

    if (((b == a + 6) || (a == b + 6)) && (((checkAPrime - Math.floor(checkAPrime)) != 0) || ((checkBPrime - Math.floor(checkBPrime)) != 0))) {
        result = true;
    } else {
        result = false;
    }

    return result; // Debe devolver un true o false
}