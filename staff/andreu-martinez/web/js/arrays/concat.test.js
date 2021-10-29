describe("Test concat")

// CASE 1

var array1 = ['hola','adios']
var array2 = [1,2,3]
var res = concat(array1, array2)

if (res instanceof Array
    && res.length === 2
    && JSON.stringify(array1) === JSON.stringify(['hola','adios'])
    && JSON.stringify(array2) === JSON.stringify([1,2,3]))

    success('test ok')
else
    fail('test failed')


    // CASE 2

var array1 = [1, 2, 3]
var array2 = ['hola','adios']
var array3 = ['mundo','cruel']
var res = concat(array1, array2, array3)

if (res instanceof Array
    && res.length === 3
    && JSON.stringify(array1) === JSON.stringify([1,2,3])
    && JSON.stringify(array2) === JSON.stringify(['hola','adios'])
    && JSON.stringify(array3) === JSON.stringify(['mundo','cruel']))
    success('test ok')
else
    fail('test failed')