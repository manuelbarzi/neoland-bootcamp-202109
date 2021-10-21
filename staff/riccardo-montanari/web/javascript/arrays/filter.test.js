describe('TEST filter')

describe('case 1')

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
var res = filter(words, function (word) {
    return word.length > 6
})

if (res instanceof Array
    && res.length === 3
    && res[0] === words[3]
    && res[1] === words[4]
    && res[2] === words[5]
    && words.length === 6
    && words[0] === 'spray'
    && words[1] === 'limit'
    && words[2] === 'elite'
    && words[3] === 'exuberant'
    && words[4] === 'destruction'
    && words[5] === 'present')
    success('test ok')
else
    fail('test ko')


describe('case 2')

var numbers = [10, -10, 20, -20, 30, -30, 40, -40]
var res = filter(numbers, function (number) {
    return number > 0
})

if (res instanceof Array
    && res.length === 4
    && res[0] === numbers[0]
    && res[1] === numbers[2]
    && res[2] === numbers[4]
    && res[3] === numbers[6]
    && numbers.length === 8
    && numbers[0] === 10
    && numbers[1] === -10
    && numbers[2] === 20
    && numbers[3] === -20
    && numbers[4] === 30
    && numbers[5] === -30
    && numbers[6] === 40
    && numbers[7] === -40)
    success('test ok')
else
    fail('test ko')





// describe('TEST filter')

// var array = ['spray', 'limitless', 'elite', 'exuberant', 'destruction', 'present']
// var items = []
// var res = filter(array, function (element, index) {
//     items[index] = element

//     return element.length > 6
// })

// if (res instanceof Array
//     && res.length === 4
//     && res[0] === array[1]
//     && res[1] === array[3]
//     && res[2] === array[4]
//     && res[3] === array[5])
//     success('test ok')
// else
//     fail('test ko')

// var array = ['one', 'two', 'three', 'fourr']
// var items = []
// var res = filter(array, function (element, index) {
//     items[index] = element

//     return element.length > 4
// })

// if (res instanceof Array
//     && res.length === 2
//     && res[0] === array[2]
//     && res[1] === array[3])
//     success('test ok')
// else
//     fail('test ko')


  