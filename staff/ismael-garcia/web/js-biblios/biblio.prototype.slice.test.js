describe('TEST Biblio.slice()')


describe('case 1')

var instance = new Biblio(1, 2, 3, 4, 5);
var res = instance.slice(2);

if (res instanceof Biblio
    && res.length === 3
    && res[0] === 3
    && res[1] === 4
    && res[2] === 5
    && instance.length === 5
    && instance[0] === 1
    && instance[1] === 2
    && instance[2] === 3
    && instance[3] === 4
    && instance[4] === 5)
    success ('test ok')
else
    fail('test failed')


describe('case 2')

var instance = new Biblio(1, 2, 3, 4, 5);
var res = instance.slice(1, 3);

if (res instanceof Biblio
    && res.length === 2
    && res[0] === 2
    && res[1] === 3)
    success ('test ok')
else
    fail('test failed')


describe('case 3')

var instance = new Biblio(1, 2, 3, 4, 5);
var res = instance.slice();

if (res instanceof Biblio
    && res.length === 5
    && res[0] === 1
    && res[1] === 2
    && res[2] === 3
    && res[3] === 4
    && res[4] === 5)
    success ('test ok')
else
    fail('test failed')


describe('case 4')

var instance = new Biblio(1, 2, 3, 4, 5);
var res = instance.slice(-3);

if (res instanceof Biblio
    && res.length === 3
    && res[0] === 3
    && res[1] === 4
    && res[2] === 5)
    success('test ok')
else
    fail('test failed')


describe('case 5')

var instance = new Biblio(1, 2, 3, 4, 5);
var res = instance.slice(-4, -1);

if (res instanceof Biblio
    && res.length === 3
    && res[0] === 2
    && res[1] === 3
    && res[2] === 4)
    success('test ok')
else
    fail('test failed')


describe('case 6')

var instance = new Biblio(1, 2, 3, 4, 5);
var res = instance.slice(10, -1);

if (res instanceof Biblio
    && res.length === 0)
    success('test ok')
else
    fail('test failed')


describe('case 7')

var instance = new Biblio(1, 2, 3, 4, 5);
var res = instance.slice(0, 40);

if (res instanceof Biblio
    && res.length === 5
    && res[0] === 1
    && res[1] === 2
    && res[2] === 3
    && res[3] === 4
    && res[4] === 5)
    success('test ok')
else
    fail('test failed')


describe('case 8')

var instance = new Biblio(1, 2, 3, 4, 5);
var res = instance.slice(-10, 4);

if (res instanceof Biblio
    && res.length === 4
    && res[0] === 1
    && res[1] === 2
    && res[2] === 3
    && res[3] === 4)
    success('test ok')
else
    fail('test failed')


describe('case 9')

var instance = new Biblio(1, 2, 3, 4, 5);
var res = instance.slice(1, -20);

if (res instanceof Biblio
    && res.length === 0)
    success('test ok')
else
    fail('test failed')