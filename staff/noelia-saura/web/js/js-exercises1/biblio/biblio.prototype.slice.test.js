
describe('TEST slice');

// CASE 1
var array = new Biblio(1, 2, 3, 4, 5)
var res = array.slice(2);

if (
    res.length === 3
    && res[0] === 3
    && res[1] === 4
    && res[2] === 5
    )
    success('test ok')
else
    fail('test failed')


// CASE 2
var array = new Biblio(1, 2, 3, 4, 5)
var res = array.slice(1, 3);

if (
    res.length === 2
    && res[0] === 2
    && res[1] === 3
    )
    success('test ok')
else
    fail('test failed')


// CASE 3
var array = new Biblio(1, 2, 3, 4, 5)
var res = array.slice(-3);

if (
    res.length === 3
    && res[0] === 3
    && res[1] === 4
    && res[2] === 5
    )
    success('test ok')
else
    fail('test failed')

// CASE 5
var array = new Biblio(1, 2, 3, 4, 5)
var res = array.slice(-4, -1);

if (
    res.length === 3
    && res[0] === 2
    && res[1] === 3
    && res[2] === 4
    )
    success('test ok')
else
    fail('test failed')

// CASE 6
var array = new Biblio(1, 2, 3, 4, 5)
var res = array.slice(10, -1);

if (
    res.length === 0
    )
    success('test ok')
else
    fail('test failed')



// CASE 6
var array = new Biblio(1, 2, 3, 4, 5)
var res = array.slice( 1, -20);

if (
    res.length === 0
    )
    success('test ok')
else
    fail('test failed')


// CASE 7

    var array = new Biblio('ant','bison','camel','duck','elephant')
    var res = array.slice(2)
 if( 
    res.length === 3
    && res[0]=== array[2]
    && res[1]=== array[3]
    && res[2]=== array[4]
    &&array.length === 5
    &&array[0]==='ant'
    &&array[1]=== 'bison'
    &&array[2]=== 'camel'
    &&array[3]=== 'duck'
    &&array[4]=== 'elephant')
    success('test ok')
else
    fail('test ok')