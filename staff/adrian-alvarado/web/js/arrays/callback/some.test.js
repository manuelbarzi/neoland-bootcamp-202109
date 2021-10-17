describe("TEST some")

// CASE 1

var array = [2, 5, 8, 1, 4];
var items = [];
var res = some(array, function (element, index) {
    items[index] = element
    return element > 10
})

if (typeof res === 'boolean'
    && res === false
    && array[0] === items[0]
    && array[1] === items[1]
)
    success('test ok')
else fail('test ko')

// CASE 2

var array = [12, 5, 8, 1, 4];
var items = [];
var res = some(array, function (element, index) {
    items[index] = element
    return element > 10
})

if (typeof res === 'boolean'
    && res === true
    && array[0] === items[0]
)
    success('test ok')
else fail('test ko')


// CASE 3

var array = ['hola', 5, 'adios', 1, 4];
var items = [];
var res = some(array, function (element, index) {
    items[index] = element

    return element === 'hola'
})

if (typeof res === 'boolean'
    && res === true
    && array[0] === items[0]
)
    success('test ok')
else fail('test ko')