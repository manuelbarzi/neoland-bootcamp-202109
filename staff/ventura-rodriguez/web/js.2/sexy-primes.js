// Los primos sexy son pares de dos primos que están
// separados por 6
// function sexyPrimes(x, y) {
//     let bool = true;
//     if(
//         ((x > 1 && y > 1)) &&
//         (x - y === 6 || y - x === 6) &&
//         (
//             (x % 2 !== 0 || x === 2) ||
//             (y % 2 !== 0 || y === 2)
//         )
//     ) {
//         const vueltas = (x > y) ? x/2 : y/2;
//         let i = 2;
//         while(i < vueltas && bool) {
//             if (x % i == 0 && y % i == 0) bool = false;
//             i++
//         }
//     } else {
//         bool = false;
//     }
//     return bool;
// }


// function sexyPrimes(x, y) { // x es 11, y es 5 
//     var bool = true;

//     if(x - y !== 6 && y - x !== 6) bool = false;

//     // En 2 pasos
//     if(x <= 0 && y <= 0) bool = false;
//     if(x === 1 || y === 1) bool = false;

//     // Los 2 pasos anteriores juntos
//     if(x <= 1 || y <= 1) bool = false;

//     if(
//         (x === 2 && x % 2 === 0) &&
//         (y === 2 && y % 2 === 0)
//     ) bool = false;

//     for(var i = 2; i < (x / 2); i++) {
//         if(x % i === 0) bool = false;
//     }

//     for(var i = 2; i < (y / 2); i++) {
//         if(y % i === 0) bool = false;
//     }

//     return bool;
// }


// // Que hay que valorar

// // Si son sexys, están separados por 6              =)

// // Si son primos

// // Si son positivos o sea mayor que 0               =)

// // Si son diferentes de 1                           =)

// // Si no son divisbles entre 2 a no ser que sea 2   =)

// // Si no es divisible por ningún numero inferior
// // a él mismo distinto de él mismo y de 1




// function sexyPrimes(x, y) { // x es 5, y es 11
//     var bool = true;

//     if(
//         (x - y !== 6 && y - x !== 6) ||
//         (x <= 1 || y <= 1) ||
//         (x === 2 && y === 2)
//     )
//         bool = false;
    
//     var z = 0;
//     if (x > y) z = x; else z = y;

//     for(var i = 2; i < (z / 2); i++) {
//         if((x % i === 0 && x !== i) || (y % i === 0 && y !== i)) bool = false;
//     }

//     return bool;
// }


function sexyPrimes(x, y) { // x es igual a 5, y es igual a 11
    var bool = true;

    if(x - y !== 6 && y - x !== 6) bool = false;

    if(x <= 0 && y <= 0) bool = false;

    if(x === 1 || y === 1) bool = false;

    if((x === 2 || x % 2 === 0) && (y === 2 || y % 2 === 0)) bool = false;

    for (let i = 2; i < (x / 2); i++) {
        if(x % i === 0) bool = false;
    }

    for (let i = 2; i < (y / 2); i++) {
        if(y % i === 0) bool = false;
    }

    return bool;
}


// /////////////////////////////////////////// Que hay que valorar

// 1. Si son sexys, están separados por 6              

// Si son positivos o sea mayor que 0               

// Si son diferentes de 1                         

// Si no son divisbles entre 2 a no ser que sea 2   

// Si no es divisible por ningún numero inferior
// a él mismo distinto de él mismo y de 1


// Operador && esto significa que lo que hay a ambos lados debe ser true

// (true && true) ======> true
// (false && true) ======> false
// (true && false) ======> false
// (false && false) ======> false
// (!true && true) ======> false
// (!true && !true) ======> false
// (true && !true) ======> false
// (!false && false) ======> false
// (false && !false) ======> false
// (!false && !false) ======> true


// Operador || esto significa que si hay true en algún lado devuelve true

// (true || true) =====> true
// (true || false) =====> true
// (false || true) =====> true
// (false || false) =====> false
// (!true || true) =====> true
// (true || !true) =====> true
// (!true || !true) =====> false
// (!false || false) =====> true
// (false || !false) =====> true
// (!false || !false) =====> true


// !true =====> false
// !false =====> true