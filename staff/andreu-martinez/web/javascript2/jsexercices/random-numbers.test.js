describe('TEST randomNumbers')

// CASE 1

var res = randomNumbers(4, 20)

if (res instanceof Array
    && res.length === 4
    && res[0] === 4
    && res[1] === 1
    && res[2] === 2
    && res[3] === 1)
    success('test ok')
else
    fail('test failed')

// CASE 2

var res = randomNumbers([7, 3, 7, 1], 'asc')

if (res instanceof Array
    && res.length === 4
    && res[0] === 1
    && res[1] === 7
    && res[2] === 2
    && res[3] === 7)
    success('test ok')
else
    fail('test failed')