describe('TEST slice');

// _____________________________________________________________

var res = slice([1, 2, 3, 4, 5], 2);

if (
    res instanceof Array
    && res.length === 3
    && res[0] === 3
    && res[1] === 4
    && res[2] === 5
    )
    success('test 1 ok')
else
    fail('test 1 failed')


// _______________________________________________________________

var res = slice([1, 2, 3, 4, 5], 1, 3);

if (
    res instanceof Array
    && res.length === 2
    && res[0] === 2
    && res[1] === 3
    )
    success('test 2 ok')
else
    fail('test 2 failed')


// _____________________________________________________________________

var res = slice([1, 2, 3, 4, 5]);

if (
    res instanceof Array
    && res.length === 5
    && res[0] === 1
    && res[1] === 2
    && res[2] === 3
    && res[3] === 4
    && res[4] === 5
    )
    success('test 3 ok')
else
    fail('test 3 failed')

// ____________________________________________________________________________

var res = slice([1, 2, 3, 4, 5], -3);

if (
    res instanceof Array
    && res.length === 3
    && res[0] === 3
    && res[1] === 4
    && res[2] === 5
    )
    success('test 4 ok')
else
    fail('test 4 failed')

// ___________________________________________________________________

var res = slice([1, 2, 3, 4, 5], -4, -1);

if (
    res instanceof Array
    && res.length === 3
    && res[0] === 2
    && res[1] === 3
    && res[2] === 4
    )
    success('test 5 ok')
else
    fail('test 5 failed')

// _________________________________________________________________

var res = slice([1, 2, 3, 4, 5], 10, -1);

if (
    res instanceof Array
    && res.length === 0
    )
    success('test 6 ok')
else
    fail('test 6 failed')

// ______________________________________________________________________________

var res = slice([1, 2, 3, 4, 5], 0, 40);

if (
    res instanceof Array
    && res.length === 5
    && res[0] === 1
    && res[1] === 2
    && res[2] === 3
    && res[3] === 4
    && res[4] === 5
    )
    success('test 7 ok')
else
    fail('test 7 failed')

// __________________________________________________________________

var res = slice([1, 2, 3, 4, 5], -10, 4);

if (
    res instanceof Array
    && res.length === 4
    && res[0] === 1
    && res[1] === 2
    && res[2] === 3
    && res[3] === 4
    )
    success('test 8 ok')
else
    fail('test 8 failed')

// ______________________________________________________________________________

var res = slice([1, 2, 3, 4, 5], 1, -20);

if (
    res instanceof Array
    && res.length === 0
    )
    success('test 9 ok')
else
    fail('test 9 failed')