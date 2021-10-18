

describe('TEST slice');

// CASE 1

var res = slice([1, 2, 3, 4, 5], 2);

if (
    res instanceof Array
    && res.length === 3
    && res[0] === 3
    && res[1] === 4
    && res[2] === 5
    )
    success('test ok')
else
    fail('test failed')


// CASE 2

var res = slice([1, 2, 3, 4, 5], 1, 3);

if (
    res instanceof Array
    && res.length === 2
    && res[0] === 2
    && res[1] === 3
    )
    success('test ok')
else
    fail('test failed')


// CASE 3

var res = slice([1, 2, 3, 4, 5], -3);

if (
    res instanceof Array
    && res.length === 3
    && res[0] === 3
    && res[1] === 4
    && res[2] === 5
    )
    success('test ok')
else
    fail('test failed')

// CASE 5

var res = slice([1, 2, 3, 4, 5], -4, -1);

if (
    res instanceof Array
    && res.length === 3
    && res[0] === 2
    && res[1] === 3
    && res[2] === 4
    )
    success('test ok')
else
    fail('test failed')

// CASE 6

var res = slice([1, 2, 3, 4, 5], 10, -1);

if (
    res instanceof Array
    && res.length === 0
    )
    success('test ok')
else
    fail('test failed')



// CASE 6

var res = slice([1, 2, 3, 4, 5], 1, -20);

if (
    res instanceof Array
    && res.length === 0
    )
    success('test ok')
else
    fail('test failed')


// CASE 7

    var animals = ['ant','bison','camel','duck','elephant']
    var res = slice(animals,2)
 if( res instanceof Array
    && res.length === 3
    && res[0]=== animals[2]
    && res[1]=== animals[3]
    && res[2]=== animals[4]
    &&animals.length === 5
    &&animals[0]==='ant'
    &&animals[1]=== 'bison'
    &&animals[2]=== 'camel'
    &&animals[3]=== 'duck'
    &&animals[4]=== 'elephant')
    success('test ok')
else
    fail('test ok')