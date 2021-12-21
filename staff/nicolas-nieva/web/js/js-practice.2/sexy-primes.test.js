describe('Test Sexy Primes')

var res = sexyPrimes(1,7);
if (
    typeof res === "boolean"
    && res === false )
    success ('test ok')
else fail ('test fail')

var res = sexyPrimes(5,11);
if (
    typeof res === "boolean"
    && res === true )
    success ('test ok')
else fail ('test fail')

