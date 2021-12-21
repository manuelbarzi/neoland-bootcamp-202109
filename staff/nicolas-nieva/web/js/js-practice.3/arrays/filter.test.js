describe('TEST filter')

var array = ['spray', 'limitless', 'elite', 'exuberant', 'destruction', 'present']
var items = []
var res = filter(array, function (element, index) {
    items[index] = element

    return element.length > 6
})

if (res instanceof Array
    && res.length === 4
    && res[0] === array[1]
    && res[1] === array[3]
    && res[2] === array[4]
    && res[3] === array[5]
    & array.length ===6)
    success('test ok')
else
    fail('test ko')

var array = ['one', 'two', 'three', 'fourr']
var items = []
var res = filter(array, function (element, index) {
    items[index] = element

    return element.length > 4
})

if (res instanceof Array
    && res.length === 2
    && res[0] === array[2]
    && res[1] === array[3])
    success('test ok')
else
    fail('test ko')