describe('TEST some')

describe('case 1')

var numbers = [1, 1, 1, 1, 1, 0, 1, 1]

var items = []

var hasValueZero = function (element, index) {
    items[index] = element

    return element === 0
}

var res = some(numbers, hasValueZero)

if (typeof res === 'boolean'
    && res === true
    && items.length === 6
    && items[0] === 1
    && items[1] === 1
    && items[2] === 1
    && items[3] === 1
    && items[4] === 1
    && items[5] === 0)
    success('test ok')
else
    fail('test ko')


// describe('case 2')

// var bananas = { name: 'bananas', quantity: 10 }
// var oranges = { name: 'oranges', quantity: 14 }
// var lemons = { name: 'lemons', quantity: 4 }
// var melons = { name: 'melons', quantity: 1 }
// var mangos = { name: 'mangos', quantity: 0 }

// var fruits = [
//     bananas,
//     oranges,
//     lemons,
//     melons,
//     mangos
// ]

// var items = []

// var hasLessThan3Units = function (fruit, index) {
//     items[index] === fruit

//     return fruit.quantity < 3
// }

// var res = some(fruits, hasLessThan3Units)

// if (typeof res === 'boolean'
//     && res === true
//     && items[0] === bananas
//     && items[1] === oranges
//     && items[2] === lemons
//     && items [3] === melons)
//     success('test ok')
// else
//     fail('test ko')

describe("TEST every")

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
