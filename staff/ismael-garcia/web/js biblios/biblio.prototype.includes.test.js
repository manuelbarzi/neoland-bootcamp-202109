// falta adaptarlo para arrays

describe('TEST includes')

describe('CASE 1')

var string = 'The quick brown fox jumps over the lazy dog.'
var search = 'fox'
var res = includes(string, search);

if (typeof res === 'boolean'
    && res === true)
    success('test ok')
else
    fail('test failed')

describe('CASE 2')

var string = 'The quick brown fox jumps over the lazy dog.'
var search = 'The'
var res = includes(string, search, 5);

if (typeof res === 'boolean'
    && res === false)
    success('test ok')
    else
    fail('test failed')
    
describe('CASE 3')

var string = 'The quick brown fox jumps over the lazy dog.'
var search = 'he'
var res = includes(string, search, 5);

if (typeof res === 'boolean'
    && res === true)
    success('test ok')
else
    fail('test failed')

describe('CASE 4')

var string = 'The quick brown fox jumps over the lazy dog.'
var search = 'foxju'
var res = includes(string, search, 5);
    
if (typeof res === 'boolean'
    && res === false)
    success('test ok')
else
    fail('test failed')
