describe('TEST every');

describe('case 1');

var array = new Biblio (10, 20, 30, 40, 50);
var res = array.every(function (element, index) {
    return element > 30;
})

if (typeof res === "boolean"
    && res === false
)
    success('test ok');
else
    fail('test ko');

describe('case 2');

var array = new Biblio('one', 'two', 'three', 'four');
var res = array.every(function (element, index) {
    return element.length > 1;
})

if (typeof res === "boolean"
    && res === true
)
    success('test ok');
else
    fail('test ko');