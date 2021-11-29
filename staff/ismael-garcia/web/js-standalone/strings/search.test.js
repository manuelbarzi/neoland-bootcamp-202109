describe('TEST search')

describe('case 1')

var testString = 'hola mundo'
var res = search(testString, [/\s/])

if (typeof res === 'number'
    && res === 4)
    success('test ok')
else
    fail('test failed')


describe('case 2')

var testString = 'adiós, mundo cruel'
var res = search(testString, /[^\w\s]/g)

if (typeof res === 'number'
    && res === 5)
    success('test ok')
else
    fail('test failed')


describe('case 3')

var testString = 'Hey friends, how are you?'
var res = search(testString, /\d/)

if (typeof res === 'number'
    && res === -1)
    success('test ok')
else
    fail('test failed')


describe('case 4')

var testString = 'Hey friends, hey, how are you?'
var res = search(testString, /hey/i)

if (typeof res === 'number'
    && res === 0)
    success('test ok')
else
    fail('test failed')

