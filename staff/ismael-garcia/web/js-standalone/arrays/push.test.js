describe('TEST push')

// CASE 1

var testArray = [3, 0, 25, 0, 0]
var res = push(testArray, 5)

if (typeof res === 'number'
    && res === 6
    && testArray[0] === 3
    && testArray[1] === 0
    && testArray[2] === 25
    && testArray[3] === 0
    && testArray[4] === 0
    && testArray[5] === 5)
    success('test ok')
else
    fail('test failed')

// CASE 2

var testArray = ['h', ' ', 0, 25]
var res = push(testArray, 0, 3, 77)

if (typeof res === 'number'
    && res === 7
    && testArray[0] === 'h'
    && testArray[1] === ' '
    && testArray[2] === 0
    && testArray[3] === 25
    && testArray[4] === 0
    && testArray[5] === 3
    && testArray[6] === 77)
    success('test ok')
else
    fail('test failed')

// CASE 3

var testArray = ['h', 0, 0]
var res = push(testArray, ' ', 3, [2, 4, 5])

if (typeof res === 'number'
    && res === 6
    && testArray[0] === 'h'
    && testArray[1] === 0
    && testArray[2] === 0
    && testArray[3] === ' '
    && testArray[4] === 3
    && testArray[5][0] === 2
    && testArray[5][1] === 4
    && testArray[5][2] === 5)
    success('test ok')
else
    fail('test failed')
