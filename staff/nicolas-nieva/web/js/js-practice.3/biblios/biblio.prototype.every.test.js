describe("TEST every")

// CASE 1

var numbers = new Biblio(1, 30, 39, 29, 10, 13);
var items = [];

var res = numbers.every(function (element, index) {
    items[index] = element
    return element < 2
})

if (typeof res === 'boolean'
    && res === false
    && numbers[0] === items[0]
    && numbers[1] === items[1]
    && numbers instanceof Biblio
    && numbers[0] === 1
    && numbers[1] === 30
    && numbers[2] === 39
    && numbers[3] === 29
    && numbers[4] === 10
    && numbers[5] === 13
)
    success('test ok')
else fail('test ko')

// CASE 2

var numbers = [1, 30, 39, 41, 10, 13];
var items = [];
var res = numbers.every(function (element, index) {
    items[index] = element
    return element < 40
})

if (typeof res === 'boolean'
    && res === false
    && numbers[0] === items[0]
    && numbers[1] === items[1]
    && numbers[2] === items[2]
    && numbers[3] === items[3]
)
    success('test ok')
else fail('test ko')

// CASE 3

var numbers = [1, 30, 39, 35, 10, 13];
var items = [];
var res = numbers.every(function (element, index) {
    items[index] = element
    return element < 40
})

if (typeof res === 'boolean'
    && res === true
    && numbers[0] === items[0]
    && numbers[1] === items[1]
    && numbers[2] === items[2]
    && numbers[3] === items[3]
)
    success('test ok')
else fail('test ko')


