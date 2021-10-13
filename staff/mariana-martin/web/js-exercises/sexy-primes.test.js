// Implementar los tests que consideréis necesarios

describe('TEST sexyPrimes');

// CASE 1

let res = sexyPrimes(3, 50);

if (
    typeof res === "boolean"
    && res === false
    )
    success('test ok')
else
    fail('test failed')


// CASE 2

res = sexyPrimes(1, 7);

if (
    typeof res === "boolean"
    && res === false
    )
    success('test ok')
else
    fail('test failed')


// CASE 3

res = sexyPrimes(5, 11);

if (
    typeof res === "boolean"
    && res === true
    )
    success('test ok')
else
    fail('test failed')


// CASE 4

res = sexyPrimes(-5, -11);

if (
    typeof res === "boolean"
    && res === false
    )
    success('test ok')
else
    fail('test failed')

// CASE 5

res = sexyPrimes(29, 35);

if (
    typeof res === "boolean"
    && res === false
    )
    success('test ok')
else
    fail('test failed')

// CASE 6

res = sexyPrimes(11, 5);

if (
    typeof res === "boolean"
    && res === true
    )
    success('test ok')
else
    fail('test failed')