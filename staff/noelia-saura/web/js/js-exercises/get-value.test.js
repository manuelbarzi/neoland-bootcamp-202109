console.log('TEST getValue')

// CASE 1

var res = getValue([1, 2, 3, 4], 'max')

if (typeof res === 'number'
    && res === 4)
    console.log('test ok')
else
    console.error('test failed')

// CASE 2

var res = getValue([1, 2, 3, 4], 'min')

if (typeof res === 'number'
    && res === 1)
    console.log('test ok')
else
    console.error('test failed')

// CASE 3

var res = getValue([1, 2, 3, 4], 'avg') // promedio

if (typeof res === 'number'
    && res === 2.5)
    console.log('test ok')
else
    console.error('test failed')