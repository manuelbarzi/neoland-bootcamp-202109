// Los primos sexy son pares de dos primos que están
// separados por 6

// function checkSexyPrimes(x, y) {
// Si son sexys, están separados por 6              
// Si son primos
// Si son positivos o sea mayor que 0               
// Si son diferentes de 1                           
// Si no son divisbles entre 2 a no ser que sea 2   
// Si no es divisible por ningún numero inferior
// a él mismo distinto de él mismo y de 1
    // var bool = true;

    // if (x - y !== 6 && y - x !== 6) bool = false;

    // En 2 pasos
    // if(x < 0 && y < 0) bool = false;
    // if(x === 1 || y === 1) bool = false;

    // Los 2 pasos anteriores juntos
    // if(x <= 1 || y <= 1) bool = false;

//     if(x <= 2 || y <= 2) bool = false;

//     if(
//         (x % 2 === 0) ||
//         (y % 2 === 0)
//     ) bool = false;

//     for(var i = 2; i < (x / 2); i++) {
//         if(x % i === 0) bool = false;
//     }

//     for(var i = 2; i < (y / 2); i++) {
//         if(y % i === 0) bool = false;
//     }

//     return bool;
// }

function checkSexyPrimes(x, y) {
    var bool = true;

    if(
        (x - y !== 6 && y - x !== 6) ||
        (x <= 2 || y <= 2)
    )
        bool = false;
    
    var z = 0;
    if (x > y) z = x; else z = y;

    for(var i = 3; i < (z / 2); i++) {
        if((x % i === 0 && x !== i) || (y % i === 0 && y !== i)) bool = false;
    }

    return bool;
}