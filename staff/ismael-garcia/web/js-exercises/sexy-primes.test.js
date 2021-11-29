describe('TEST checkSexyPrimes');

// CASE 1

var res = checkSexyPrimes(3, 50);

if (
    typeof res === "boolean"
    && res === false
    )
    success('test ok')
else
    fail('test failed')


// CASE 2

res = checkSexyPrimes(1, 7);

if (
    typeof res === "boolean"
    && res === false
    )
    success('test ok')
else
    fail('test failed')


// CASE 3

res = checkSexyPrimes(5, 11);

if (
    typeof res === "boolean"
    && res === true
    )
    success('test ok')
else
    fail('test failed')


// CASE 4

res = checkSexyPrimes(-5, -11);

if (
    typeof res === "boolean"
    && res === false
    )
    success('test ok')
else
    fail('test failed')

// CASE 5

res = checkSexyPrimes(29, 35);

if (
    typeof res === "boolean"
    && res === false
    )
    success('test ok')
else
    fail('test failed')

// CASE 6

res = checkSexyPrimes(11, 5);

if (
    typeof res === "boolean"
    && res === true
    )
    success('test ok')
else
    fail('test failed')