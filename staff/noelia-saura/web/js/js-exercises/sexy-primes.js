// Los primos sexy son pares de dos primos que están
// separados por 6
function sexyPrimes(a, b) {
        if (isPrime(a) && isPrime(b)) {
          return Math.abs(a - b) === 6;
        }
      }
    
      function isPrime(number) {
        if (number === 1) {
          return false;
        }
    
        for (let i = 2; i < number; i++) {
          if (number % i === 0) {
            return false;
          }
        }
    
        return true;
      }



// for (var i=2 ; i<a; ++i){
//     if (a%i==0);
//     return false;}
//     for (var i=2; i<b; ++i){
//     if(b%i==0)
//     return false;}
//     if(b==1 || a==1)
//     return false;
//    return Math.abs(a-b)==6