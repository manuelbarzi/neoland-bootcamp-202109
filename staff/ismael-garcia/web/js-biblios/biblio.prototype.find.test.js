describe('TEST Biblio.find()')

describe('case 1')

var instance = new Biblio(10, 20, 30, 40, 50);
var items = new Biblio;
var res = instance.find(function(element, index) {
    items[items.length] = element;
    items.length++;

    return element > 30;
})

if (res === 40
    && items.length === 4
    && items[0] === instance[0]
    && items[1] === instance[1]
    && items[2] === instance[2]
    && items[3] === instance[3])
    success('test ok')
else
    fail('test ko')


describe('case 2')

var instance = new Biblio('one', 'two', 'three', 'four')
var items = new Biblio;
var res = instance.find(function(element, index) {
    items[items.length] = element;
    items.length++;

    return element.startsWith('th')
})

if (res === 'three'
    && items.length === 3
    && items[0] === instance[0]
    && items[1] === instance[1]
    && items[2] === instance[2])
    success('test ok')
else
    fail('test ko')