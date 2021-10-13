console.log ('TEST index of')

// case 1 
var res=indexof('hola mundo', 'a')

if (typeof res === 'number'
    && res === 3)
    console.log('Test ok')
else 
    console.error('test failed')

    // case 2
var res=indexof('hola mundo', 'o')

if (typeof res === 'number'
    && res === 1)
    console.log('Test ok')
else 
    console.error('test failed')

// case 3
var res=indexof('hola mundo', 'i')

if (typeof res === 'number'
    && res === -1)
    console.log('Test ok')
else 
    console.error('test failed')

// case 4 
var res=indexof('hola mundo', 'mu')

if (typeof res === 'number'
    && res === 5)
    console.log('Test ok')
else 
    console.error('test failed')

// case 5
var res=indexof('hola mundo', 'ola')

if (typeof res === 'number'
    && res === 1)
    console.log('Test ok')
else 
    console.error('test failed')

// case 6
var res=indexof('hola mundo', 'olam')

if (typeof res === 'number'
    && res === -1)
    console.log('Test ok')
else 
    console.error('test failed')

// case 7

var res=indexof('hola mundo holamundo', 'olam')

if (typeof res === 'number'
    && res === 12)
    console.log('Test ok')
else 
    console.error('test failed')
// case 8

var res=indexof('holamundo holamundo', 'olam', 5)

if (typeof res === 'number'
    && res === 11)
    console.log('Test ok')
else 
    console.error('test failed')
