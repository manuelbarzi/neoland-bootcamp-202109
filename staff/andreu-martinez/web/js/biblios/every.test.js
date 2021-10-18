describe("TEST every")

// CASE 1

var array = [1, 30, 39, 29, 10, 13];
var items = [];
var res = every(array, function (element, index) {
    items[index] = element
    return element < 2
})

if (typeof res === 'boolean'
    && res === false
    && array[0] === items[0]
    && array[1] === items[1]
)
    success('test ok')
else fail('test ko')

// CASE 2

var array = [1, 30, 39, 41, 10, 13];
var items = [];
var res = every(array, function (element, index) {
    items[index] = element
    return element < 40
})

if (typeof res === 'boolean'
    && res === false
    && array[0] === items[0]
    && array[1] === items[1]
    && array[2] === items[2]
    && array[3] === items[3]
)
    success('test ok')
else fail('test ko')
