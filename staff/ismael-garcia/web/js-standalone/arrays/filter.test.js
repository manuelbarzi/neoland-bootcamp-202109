describe('TEST filter')

describe('case 1')

var array = [10, 20, 30, 40, 50]
var items = []
var res = filter(array, function (element, index) {
    items[index] = element

    return element > 30
})

if (res instanceof Array
    && res.length === 2
    && res[0] === 40
    && res[1] === 50
    && array.length === 5
    && array[0] === 10
    && array[1] === 20
    && array[2] === 30
    && array[3] === 40
    && array[4] === 50
    && items.length === 5
    && items[0] === array[0]
    && items[1] === array[1]
    && items[2] === array[2]
    && items[3] === array[3]
    && items[4] === array[4])
    success('test ok')
else
    fail('test ko')

describe('case 2')

var array = ['two', 'three', 'four', 'thirteen']
var items = []
var res = filter(array, function (element, index) {
    items[index] = element

    return element.startsWith('th')
})

if (res instanceof Array
    && res.length === 2
    && res[0] === 'three'
    && res[1] === 'thirteen'
    && array.length === 4
    && array[0] === 'two'
    && array[1] === 'three'
    && array[2] === 'four'
    && array[3] === 'thirteen'
    && items.length === 4
    && items[0] === array[0]
    && items[1] === array[1]
    && items[2] === array[2]
    && items[3] === array[3])
    success('test ok')
else
    fail('test ko')