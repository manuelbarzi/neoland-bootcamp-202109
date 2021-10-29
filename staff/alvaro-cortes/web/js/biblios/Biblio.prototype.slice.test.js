describe('TEST slice');

describe("Case 1")

var arr = new Biblio ([1, 2, 3, 4, 5])
var res = arr.slice(2);

if (
    res instanceof Biblio
    && res.length === 3
    && res[0] === 3
    && res[1] === 4
    && res[2] === 5
    )
    success('Test correct')
else
    fail('Test failed')


describe("Case 2")

var arr = new Biblio ([1, 2, 3, 4, 5])
var res = arr.slice(1, 3);

if (
    res instanceof Biblio
    && res.length === 2
    && res[0] === 2
    && res[1] === 3
    )
    success('Test correct')
else
    fail('Test failed')


describe("Case 3")

var arr = new Biblio ([1, 2, 3, 4, 5])
var res = arr.slice();

if (
    res instanceof Biblio
    && res.length === 5
    && res[0] === 1
    && res[1] === 2
    && res[2] === 3
    && res[3] === 4
    && res[4] === 5
    )
    success('Test correct')
else
    fail('Test failed')

describe("Case 4")

var arr = new Biblio ([1, 2, 3, 4, 5])
var res = arr.slice(-3);

if (
    res instanceof Biblio
    && res.length === 3
    && res[0] === 3
    && res[1] === 4
    && res[2] === 5
    )
    success('Test correct')
else
    fail('Test failed')

describe("Case 5")

var arr = new Biblio ([1, 2, 3, 4, 5])
var res = arr.slice(-4, -1);

if (
    res instanceof Biblio
    && res.length === 3
    && res[0] === 2
    && res[1] === 3
    && res[2] === 4
    )
    success('Test correct')
else
    fail('Test failed')

describe("Case 6")

var arr = new Biblio ([1, 2, 3, 4, 5])
var res = arr.slice(10, -1);

if (
    res instanceof Biblio
    && res.length === 0
    )
    success('Test correct')
else
    fail('Test failed')

describe("Case 7")

var arr = new Biblio ([1, 2, 3, 4, 5])
var res = arr.slice(0, 40);

if (
    res instanceof Biblio
    && res.length === 5
    && res[0] === 1
    && res[1] === 2
    && res[2] === 3
    && res[3] === 4
    && res[4] === 5
    )
    success('Test correct')
else
    fail('Test failed')

describe("Case 8")

var arr = new Biblio ([1, 2, 3, 4, 5])
var res = arr.slice(-10, 4);

if (
    res instanceof Biblio
    && res.length === 4
    && res[0] === 1
    && res[1] === 2
    && res[2] === 3
    && res[3] === 4
    )
    success('Test correct')
else
    fail('test failed')

describe("Case 9")

var arr = new Biblio ([1, 2, 3, 4, 5])
var res = arr.slice(1, -20);

if (
    res instanceof Biblio
    && res.length === 0
    )
    success('Test correct')
else
    fail('test failed')