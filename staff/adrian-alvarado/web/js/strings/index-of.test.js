describe('TEST indexOf')

// CASE 1

var res = indexOf('hola mundo', 'a')

if ( typeof res === 'number' && res === 3 )
    success('test ok')
else
    fail('test fail')


// CASE 2

var res = indexOf('hola mundo', 'y')

if ( typeof res === 'number' && res === -1 )
    success('test ok')
else
    fail('test fail')


// CASE 3

var res = indexOf('hola mundo', 'h')

if ( typeof res === 'number' && res === 0 )
    success('test ok')
else
    fail('test fail')


// CASE 4

var res = indexOf('hola mundo', 'mu')

if ( typeof res === 'number' && res === 5 )
    success('test ok')
else
    fail('test fail')


// CASE 5

var res = indexOf('hola mundo', 'ola')

if ( typeof res === 'number' && res === 1 )
    success('test ok')
else
    fail('test fail')


// CASE 6

var res = indexOf('hola mundo', 'olam')

if ( typeof res === 'number' && res === -1 )
    success('test ok')
else
    fail('test fail')


// CASE 7

var res = indexOf('hola mundo, holamundo', 'olam')

if ( typeof res === 'number' && res === 13 )
    success('test ok')
else
    fail('test fail')


// CASE 8

var res = indexOf('hola mundo, holamundo', 'olam', 13)

if ( typeof res === 'number' && res === 13 )
    success('test ok')
else
    fail('test fail')