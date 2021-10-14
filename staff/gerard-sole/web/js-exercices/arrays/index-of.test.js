describe('TEST index of')


describe ('Case 1') 
var array = ['ant', 'bison', 'camel', 'duck', 'bison']
var res = indexOf(array, 'bison')
if (typeof res === 'number'
&& res === 1)
    success('Test ok')
else 
    fail('test failed')

describe ('Case 2')
var array = ['ant', 'bison', 'camel', 'duck', 'bison']
var res = indexOf(array, 'bison', 2)
if (typeof res === 'number'
&& res === 4)
    success('Test ok')
else 
    fail('test failed')

describe ('Case 3')
var array = ['ant', 'bison', 'camel', 'duck', 'bison']
var res = indexOf(array, 'giraffe')
if (typeof res === 'number'
&& res === -1)
    success('Test ok')
else 
    fail('test failed')

describe ('Case 4')
var array = [true, 'hola mundo', 10, {name: 'peter'}, null, NaN, Infinity, ]
var res = indexOf(array, null)
if (typeof res === 'number'
&& res === 4)
    success('Test ok')
else 
    fail('test failed')

describe ('Case 5')
var object = {name: 'peter'}
var array = [true, 'hola mundo', 10, object, null, NaN, Infinity, ]
var res = indexOf(array, object)
if (typeof res === 'number'
&& res === 3)
    success('Test ok')
else 
    fail('test failed')

describe ('Case 6')
var arrays = [1, 2, 3]
var array = [true, 'hola mundo', 10, object, null, NaN, arrays, Infinity, ]
var res = indexOf(array, arrays)
if (typeof res === 'number'
&& res === 6)
    success('Test ok')
else 
    fail('test failed')