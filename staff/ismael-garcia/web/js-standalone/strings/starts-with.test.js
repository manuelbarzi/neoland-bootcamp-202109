describe('TEST startsWith')

describe('CASE 1')

var string = 'hola mundo'
var string2 = 'ho'

var res = startsWith(string, string2)

if (typeof res === 'boolean'
    && res === true)
    success('test ok')
else
    fail('test fail')

describe('CASE 2')

var string = 'hola mundo'
var string2 = ' '

var res = startsWith(string, string2, 4)

if (typeof res === 'boolean'
    && res === true)
    success('test ok')
else
    fail('test fail')


describe('CASE 3')

var string = 'adios'
var string2 = 'di'

var res = startsWith(string, string2)

if (typeof res === 'boolean'
    && res === false)
    success('test ok')
else
    fail('test fail')

describe('CASE 4')

var string = 'adios'
var string2 = 'ai'

var res = startsWith(string, string2)

if (typeof res === 'boolean'
    && res === false)
    success('test ok')
else
    fail('test fail')
