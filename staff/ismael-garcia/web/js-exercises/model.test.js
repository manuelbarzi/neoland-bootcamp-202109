console.log('TEST orderNumbers') // Esto sirve para imprimir en la consola 'Test orderNumbers' y así identificar mejor estos tests en la consola, sobre todo en caso de que estos no sean los únicos tests que se estén imprimiendo en la consola.


// CASE 1



var res = orderNumbers([1, 2, 3, 4], 'desc') 

if (res instanceof Array
    && res.length === 4
    && res[0] === 4
    && res[1] === 3
    && res[2] === 2
    && res[3] === 1)
    console.log('test ok')
else
    console.log('test failed')

// CASE 2

var res = orderNumbers([4, 3, 2, 1], 'asc')

if (res instanceof Array
    && res.length === 4
    && res[0] === 1
    && res[1] === 2
    && res[2] === 3
    && res[3] === 4)
    console.log('test ok')
else
    console.log('test failed')

// CASE 3

var res = orderNumbers([4, 2, 5, 1], 'asc')

if (res instanceof Array
    && res.length === 4
    && res[0] === 1
    && res[1] === 2
    && res[2] === 4
    && res[3] === 5)
    console.log('test ok')
else
    console.log('test failed')