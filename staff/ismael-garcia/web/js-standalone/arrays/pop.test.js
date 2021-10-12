describe('TEST pop')

// CASE 1

var testArray = [3, 0, 25, 0, 0]
var res = pop(testArray)

if (typeof res === 'number'
    && res === 0
    && testArray.length === 4
    && testArray[0] === 3
    && testArray[1] === 0
    && testArray[2] === 25
    && testArray[3] === 0)
    success('test ok')
else
    fail('test failed')

// CASE 2

var testArray = ['h', ' ', 0, 25]
var res = pop(testArray)

if (typeof res === 'number'
    && res === 25
    && testArray.length === 3
    && testArray[0] === 'h'
    && testArray[1] === ' '
    && testArray[2] === 0)
    success('test ok')
else
    fail('test failed')

// CASE 3

var testArray = ['h', 0, 0, 3, [2, 4, 5]]
var res = pop(testArray)

if (res instanceof Array
    && res[0] === 2
    && res[1] === 4
    && res[2] === 5
    && testArray.length === 4
    && testArray[0] === 'h'
    && testArray[1] === 0
    && testArray[2] === 0
    && testArray[3] === 3)
    success('test ok')
else
    fail('test failed')
