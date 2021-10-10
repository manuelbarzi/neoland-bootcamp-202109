// Implementar los tests que consideréis necesarios
describe('TEST sexyPrimes');

// CASE 1

var res = sexyPrimes(7, 13);

if (typeof res === 'boolean'
    && res === true)
    success('test ok')
else
    fail('test failed')

// CASE 2

var res = sexyPrimes(26, 32);

if (typeof res === 'boolean'
    && res === false)
    success('test ok')
else
    fail('test failed')

// CASE 3

var res = sexyPrimes(11, 19);

if (typeof res === 'boolean'
    && res === false)
    success('test ok')
else
    fail('test failed')