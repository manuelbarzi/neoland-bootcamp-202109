describe('TEST Biblio.includes()')


describe('CASE 1')

var instance = new Biblio(2, 10, 34, 5);
var searchElement = 5;
var res = instance.includes(searchElement);

if (typeof res === 'boolean'
    && res === true)
    success('test ok')
else
    fail('test failed')


describe('CASE 2')

var instance = new Biblio('The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog')
var searchElement = 'The'
var res = instance.includes(searchElement, 5);

if (typeof res === 'boolean'
    && res === false)
    success('test ok')
    else
    fail('test failed')
 
    
describe('CASE 3')

var instance = new Biblio('The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog')
var searchElement = 'the'
var res = instance.includes(searchElement, 5);

if (typeof res === 'boolean'
    && res === true)
    success('test ok')
else
    fail('test failed')


describe('CASE 4')

var instance = new Biblio('The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog')
var searchElement = 'foxju'
var res = instance.includes(searchElement, 5);
    
if (typeof res === 'boolean'
    && res === false)
    success('test ok')
else
    fail('test failed')
