describe('TEST filter')

describe('case 1')

var array = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
var items = []

var res = filter(array, function (element, index) {
    items[index] = element

    return element.length > 6
})

if (res instanceof Array
    && res.length === 3
    && res[0] === array[3]
    && res[1] === array[4]
    && res[2] === array[5]
    && items.length === 6
    && items[0] === array[0]
    && items[1] === array[1]
    && items[2] === array[2]
    && items[3] === array[3]
    && items[4] === array[4]
    && items[5] === array[5])
    success('test ok')
else
    fail('test ko')