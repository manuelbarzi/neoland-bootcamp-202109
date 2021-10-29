describe('TEST reverse')

describe("Case 1")

var array = new Biblio (1, 2, 3);
var res = array.reverse()

if (res instanceof Biblio
    && res.length === 3
    && res === array
    && res[0] === 3
    && res[1] === 2
    && res[2] === 1)
    success('Test correct')
else
    fail('Test failed')

describe("Case 2")

var array = new Biblio ('a', 'b', 'c');
var res = array.reverse()

if (res instanceof Biblio
    && res.length === 3
    && res === array
    && res[0] === 'c'
    && res[1] === 'b'
    && res[2] === 'a')
    success('Test correct')
else
    fail('Test failed')