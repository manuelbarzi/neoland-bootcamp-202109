describe('TEST orderNumbers')

// CASE 1

var res = orderNumbers([1, 5, 3, 4], 'desc')

if (res instanceof Array
    && res.length === 4
    && res[0] === 5
    && res[1] === 4
    && res[2] === 3
    && res[3] === 1)
    success('test ok')
else
    fail('test failed')

// CASE 2

var res = orderNumbers([7, 3, 7, 1], 'asc')

if (res instanceof Array
    && res.length === 4
    && res[0] === 1
    && res[1] === 3
    && res[2] === 7
    && res[3] === 7)
    success('test ok')
else
    fail('test failed')