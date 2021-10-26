describe('TEST index of')

describe('case 1') 
var res=indexof('hola mundo', 'a')

if (typeof res === 'number'
    && res === 3)
    success('Test ok')
else 
    fail('test failed')


describe('case 2')   
var res=indexof('hola mundo', 'o')

if (typeof res === 'number'
    && res === 1)
    success('Test ok')
else 
    fail('test failed')

describe('case 3')   
var res=indexof('hola mundo', 'i')

if (typeof res === 'number'
    && res === -1)
    success('Test ok')
else 
    fail('test failed')

describe('case 4')   
var res=indexof('hola mundo', 'mu')

if (typeof res === 'number'
    && res === 5)
    success('Test ok')
else 
    fail('test failed')

describe('case 5')   
var res=indexof('hola mundo', 'ola')

if (typeof res === 'number'
    && res === 1)
    success('Test ok')
else 
    fail('test failed')

describe('case 6')   
var res=indexof('hola mundo', 'olam')

if (typeof res === 'number'
    && res === -1)
    success('Test ok')
else 
    fail('test failed')

describe('case 7')   

var res=indexof('hola mundo holamundo', 'olam')

if (typeof res === 'number'
    && res === 12)
    success('Test ok')
else 
    fail('test failed')
    describe('case 8')

var res=indexof('holamundo holamundo', 'olam', 5)

if (typeof res === 'number'
    && res === 11)
    success('Test ok')
else 
    fail('test failed')
