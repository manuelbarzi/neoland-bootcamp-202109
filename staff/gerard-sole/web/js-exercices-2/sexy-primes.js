function sexyPrimes(x, y) { // x es 11, y es 5 
    var bool = true;

    if(x - y !== 6 && y - x !== 6) bool = false;

    // En 2 pasos
    if(x < 0 && y < 0) bool = false;
    if(x === 1 || y === 1) bool = false;

    // Los 2 pasos anteriores juntos
    if(x <= 1 || y <= 1) bool = false;

    if(
        (x === 2 && x % 2 === 0) &&
        (y === 2 && y % 2 === 0)
    ) bool = false;

    for(var i = 2; i < (x / 2); i++) {
        if(x % i === 0) bool = false;
    }

    for(var i = 2; i < (y / 2); i++) {
        if(y % i === 0) bool = false;
    }

    return bool;
}
