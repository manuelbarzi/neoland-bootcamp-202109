describe('TEST map')

describe('case 1')

var array = [1, 2, 3]
var callback = function (element, index) {
    return element * 10 + index}
var res = map(array, callback)

if (res instanceof Array
    && res.length === array.length
    && res[0] === array[0] * 10 + 0
    && res[1] === array[1] * 10 + 1
    && res[2] === array[2] * 10 + 2)
    success('test ok')
else
    fail('test ko')

describe('case 2')

var array = ['a', 'b', 'c']
var callback = function (element, index) {
    return element + index}
var res = map(array, callback)

if (res instanceof Array
    && res.length === array.length
    && res[0] === array[0] + 0
    && res[1] === array[1] + 1
    && res[2] === array[2] + 2)
    success('Test correct')
else
    fail('Test failed')

describe('case 3')

var array = ['a', 'b', 'c', 1, 2, 3]
var callback = function (element, index) {
    return element + index}
var res = map(array, callback)

if (res instanceof Array
    && res.length === array.length
    && res[0] === array[0] + 0
    && res[1] === array[1] + 1
    && res[2] === array[2] + 2
    && res[3] === array[3] + 3
    && res[4] === array[4] + 4
    && res[5] === array[5] + 5)
    success('Test correct')
else
    fail('Test failed')