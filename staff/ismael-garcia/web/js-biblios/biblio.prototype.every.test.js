describe('TEST Biblio.every()');


describe('case 1');

var instance = new Biblio(10, 20, 30, 40, 50);
var items = [];
var res = instance.every(function(element, index) {
    items[items.length] = element;
    return element > 30;
})

if (typeof res === 'boolean'
    && res === false
    && items.length === 5
    && items[0] === 10
    && items[1] === 20
    && items[2] === 30
    && items[3] === 40
    && items[4] === 50)
    success('test ok');
else
    fail('test ko');


describe('case 2');

var instance = new Biblio('one', 'two', 'three', 'four');
var items = [];
var res = instance.every(function (element, index) {
    items[items.length] = element;
    return element.length > 1;
})

if (typeof res === 'boolean'
    && res === true
    && items.length === 4
    && items[0] === 'one'
    && items[1] === 'two'
    && items[2] === 'three'
    && items[3] === 'four')
    success('test ok');
else
    fail('test ko');