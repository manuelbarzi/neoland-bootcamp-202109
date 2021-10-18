describe("Test indexOf")

// CASE 1

var array = ['a', 'b', 'a', 'c', 'a', 'd']
var elemento = 'z'
var indice = 0
var res = indexOf(array, elemento, indice)

if (typeof res === 'number'
    && res === 0)
    success('test ok')
else
    fail('test failed')


// CASE 2

var array = ['a', 'b', 'a', 'c', 'a', 'd']
var elemento = 'd'
var indice = 5
var res = indexOf(array, elemento, indice)

if (typeof res === 'number'
    && res === 6)
    success('test ok')
else
    fail('test failed')