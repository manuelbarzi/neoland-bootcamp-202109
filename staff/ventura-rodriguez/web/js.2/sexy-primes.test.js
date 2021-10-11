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

// Case 3

res = sexyPrimes(5, 11);

if (
    typeof res === "boolean"
    && res === true
    )
    success('test ok')
else
    fail('test failed')