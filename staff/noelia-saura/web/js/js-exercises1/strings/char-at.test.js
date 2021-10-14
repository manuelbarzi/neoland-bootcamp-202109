describe('TEST char-at')

describe('CASE 1')

var string = 'Brave new world';

var res = charAt(string, 4)

if (typeof res === 'string'
    && res === 'e') {
    success('test ok')
} else {
    fail('test failed')
}


describe('CASE 2')

var string = 'Brave new world';
var res = charAt(string, 7)

if (typeof res === 'string'
    && res === 'e') {
    success('test ok')
} else {
    fail('test failed')
}

describe('CASE 3')

var string = '1,2,3,4,5';
var res = charAt(string, 2)

if (typeof res === 'string'
    && res === '2') {
    success('test ok')
} else {
    fail('test failed')
}
