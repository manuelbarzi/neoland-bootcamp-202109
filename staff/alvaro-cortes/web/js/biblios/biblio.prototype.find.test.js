describe('TEST find')

describe('case 1')

var array = new Biblio(10, 20, 30, 40, 50);
var items = new Biblio;
var res = array.find(function (element, index) {
    items[index] = element;
    items.length++;
    return element > 30;
})

if (res === 40
    && items.length === 4
    && items[0] === array[0]
    && items[1] === array[1]
    && items[2] === array[2]
    && items[3] === array[3])
    success('Test correct')
else
    fail('Test failed')

describe('case 2')

var array = new Biblio('one', 'two', 'three', 'four');
var items = new Biblio;
var res = array.find(function (element, index) {
    items[index] = element;
    items.length++;
    return element.startsWith('th');
})

if (res === 'three'
    && items.length === 3
    && items[0] === array[0]
    && items[1] === array[1]
    && items[2] === array[2])
    success('Test correct')
else
    fail('Test failed')

describe('case 3')

var array = new Biblio('one', 'two', 'three', 'four');
var items = new Biblio;
var res = array.find(function (element, index) {
    items[index] = element;
    items.length++;
    return element.startsWith('AaA');
})

if (res === undefined
    && items.length === 4
    && items[0] === array[0]
    && items[1] === array[1]
    && items[2] === array[2])
    success('Test correct')
else
    fail('Test failed')