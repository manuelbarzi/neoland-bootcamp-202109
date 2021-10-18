describe('TEST filter')

var words = new Biblio('spray', 'limitless', 'elite', 'exuberant', 'destruction', 'present')
var items = new Biblio()
var res = Biblio.filter(function (element, index) {
    items[index] = element

    return element.length > 6
})

if (res instanceof Biblio
    && res.length === 4
    && res[0] === words[1]
    && res[1] === words[3]
    && res[2] === words[4]
    && res[3] === words[5])
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