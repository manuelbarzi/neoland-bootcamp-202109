describe('TEST includes');

describe('case 1');

var array = [10, 20, 30, 40, 50];
var res = includes(array, function (element, index) {
    return element === 10;
})

if (
    typeof res === "boolean"
    && res === true
)
    success('test ok');
else
    fail('test ko');

describe('case 2');

var array = ['one', 'two', 'three', 'four'];
var res = includes(array, function (element, index) {
    return element === "Two";
})

if (
    typeof res === "boolean"
    && res === false
)
    success('test ok');
else
    fail('test ko');