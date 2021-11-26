describe('TEST filter')

describe('case 1')

var text = new Biblio('spray', 'limit', 'elite', 'exuberant', 'destruction', 'present')
var items = new Biblio()
    
var res = text.filter(function (element, index) {
    items[index] = element
    items.length++
    return element.length > 6
})

if (res instanceof Biblio
    && res.length === 3
    && res[0] === text[3]
    && res[1] === text[4]
    && res[2] === text[5]
    && items.length === 6
    && items[0] === text[0]
    && items[1] === text[1]
    && items[2] === text[2]
    && items[3] === text[3]
    && items[4] === text[4]
    && items[5] === text[5]
    && items.length === text.length)
    success('test ok')
else
    fail('test ko')



describe('case 2')

var numbers = new Biblio(10, -10, 20, -20, 30, -30, 40, -40)
var items = []

var res = numbers.filter(function (element, index) {
    items[index] = element

    return element > 0
})

if (res instanceof Biblio
    && res.length === 4
    && res[0] === numbers[0]
    && res[1] === numbers[2]
    && res[2] === numbers[4]
    && res[3] === numbers[6]
    && items.length === 8
    && items[0] === numbers[0]
    && items[1] === numbers[1]
    && items[2] === numbers[2]
    && items[3] === numbers[3]
    && items[4] === numbers[4]
    && items[5] === numbers[5]
    && items[6] === numbers[6]
    && items[7] === numbers[7])
    success('test ok')
else
    fail('test ko')