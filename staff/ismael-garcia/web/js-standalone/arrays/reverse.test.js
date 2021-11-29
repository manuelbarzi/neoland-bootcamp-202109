describe('TEST reverse')

// CASE 1

var testArray = [3, 0, 25, 0, 0]
var res = reverse(testArray)

if (res instanceof Array
    && res.length === 5
    && testArray[0] === 0
    && testArray[1] === 0
    && testArray[2] === 25
    && testArray[3] === 0
    && testArray[4] === 3)
    success('test ok')
else
    fail('test failed')

// CASE 2

var testArray = ['h', ' ', 0, 25]
var res = reverse(testArray)

if (res instanceof Array
    && res.length === 4
    && testArray[0] === 25
    && testArray[1] === 0
    && testArray[2] === ' '
    && testArray[3] === 'h')
    success('test ok')
else
    fail('test failed')

// CASE 3

var testArray = ['h', 0, 0, 3, [2, 4, 5]]
var res = reverse(testArray)

if (res instanceof Array
    && res.length === 5
    && res[0][0] === 2
    && res[0][1] === 4
    && res[0][2] === 5
    && res[1] === 3
    && res[2] === 0
    && res[3] === 0
    && res[4] === 'h')
    success('test ok')
else
    fail('test failed')