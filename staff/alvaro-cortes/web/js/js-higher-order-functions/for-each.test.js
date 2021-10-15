describe('TEST forEach')

describe('case 1')

var array = ['a', 'b', 'c']
var callback = function (element, index) {
    res[index] = element
}
var res = []

forEach(array, callback)

if (res.length === array.length
    && res[0] === array[0]
    && res[1] === array[1]
    && res[2] === array[2])
    success('Test correct')
else
    fail('Test failed')

describe('case 2')

var array = [1, 2, 3]
var res = []

forEach(array, function (element, index) {
    res[index] = element * 10
})

if (res.length === array.length
    && res[0] === array[0] * 10
    && res[1] === array[1] * 10
    && res[2] === array[2] * 10)
    success('Test correct')
else
    fail('Test failed')

describe('case 3')

var array = [2, 4, 6]
var res = []
var callback = function (element, index) {
    res[index] = element**3
}

forEach(array, callback)

if (res.length === array.length
    && res[0] === array[0]**3
    && res[1] === array[1]**3
    && res[2] === array[2]**3)
    success('Test correct')
else
    fail('Test failed')