describe('TEST filter');

describe('case 1');

var array = [1, 2, 3, 11, 4, 7, 20];

var res = filter(array, function(element, index) {
    return element > 10;
})

var res = filter(array, mul)

if (res instanceof Array
    && res.length === 2
    && res[0] === array[3]
    && res[1] === array[6]
    )
    success('test ok');
else
    fail('test failed');

describe('case 2');

