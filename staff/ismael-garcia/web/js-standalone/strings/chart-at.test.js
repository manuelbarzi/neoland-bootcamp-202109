describe('TEST charAt')

describe('CASE 1')

var testString = 'hola mundo'
var res = charAt(testString, 2)

if (typeof res === 'string'
    && res === 'l')
    success('test ok')
else
    fail('test failed')

describe('CASE 2')

var testString = 'adiós, mundo cruel'
var res = charAt(testString, 9)

if (typeof res === 'string'
    && res === 'n')
    success('test ok')
else
    fail('test failed')

describe('CASE 3')

var testString = 'hey friends, how are you?'
var res = charAt(testString, 3)

if (typeof res === 'string'
    && res === ' ')
    success('test ok')
else
    fail('test failed')

describe('CASE 4')

var testString = 'hey'
var res = charAt(testString, 8)

if (typeof res === 'string'
    && res === '')
    success('test ok')
else
    fail('test failed')
    
describe('CASE 5')

var testString = 'hey friends, how are you?'
var res = charAt(testString, -4)

if (typeof res === 'string'
    && res === '')
    success('test ok')
else
    fail('test failed')
