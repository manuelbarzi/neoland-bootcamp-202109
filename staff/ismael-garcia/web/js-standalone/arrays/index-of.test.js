describe('TEST indexOf')

// CASE 1

var testArray = ['h', ' ', 0, 25, 'o', 0, 0]
var res = indexOf(testArray, 0)

if (typeof res === 'number'
    && res === 2)
    success('test ok')
else
    fail('test failed')

// CASE 2

var testArray = ['h', ' ', 0, 25, 'o', 0, 0]
var res = indexOf(testArray, 0, 3)

if (typeof res === 'number'
    && res === 5)
    success('test ok')
else
    fail('test failed')

// CASE 3

var testArray = ['h', 'o', 0, 25, 'o', 0, 0]
var res = indexOf(testArray, ' ', 3)

if (typeof res === 'number'
    && res === -1)
    success('test ok')
else
    fail('test failed')
