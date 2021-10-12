describe('TEST indexOf')

// CASE 1

var testString = 'hola mundo'
var res = indexOf(testString, 'o')

if (typeof res === 'number'
    && res === 1)
    success('test ok')
else
    fail('test failed')

// CASE 2

var testString = 'adiós, mundo cruel'
var res = indexOf(testString, 'u', 9)

if (typeof res === 'number'
    && res === 15)
    success('test ok')
else
    fail('test failed')

// CASE 3

var testString = 'hey friends, how are you?'
var res = indexOf(testString, 'k')

if (typeof res === 'number'
    && res === -1)
    success('test ok')
else
    fail('test failed')
