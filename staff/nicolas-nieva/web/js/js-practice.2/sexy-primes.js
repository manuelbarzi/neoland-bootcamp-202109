// // Los primos sexy son pares de dos primos que están
// // separados por 6


// function sexyPrimes(a, b) {
//   // validar que a sea primo
//   // validar que b sea primo
//   //validar que la diferencia sea 6


  

// }

// function isPrime(num) {
//   for(var i = 2; i < num; i++)
//     if(num % i === 0) return false;
//   return num > 1;
// }

function sexyPrimes(a, b) {
  return isPrime(a) &&
    isPrime(b) &&
    Math.abs(a - b) === 6
}

function isDivisible(a, b) {
  return a % b === 0;
}

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (isDivisible(num, i)) {
      return false;
    }
  }
  return num > 1;
}

console.log (sexyPrimes (17, 23))

