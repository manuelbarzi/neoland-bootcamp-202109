describe('TEST startsWith')

// CASE 1

var string = 'hola'
var string2 = 'ho'

var res = startsWith(string, string2)

if (typeof res === 'string'
    && res.length === string.length + string2.length
    && res === string + string2) // hola
    success('test ok')
else
    fail('test fail')

// CASE 2

var string = 'hola'
var string2 = ' '
var string3 = 'mundo'

var res = startsWith(string, string2, 3)

if (typeof res === 'string'
    && res.length === string.length + string2.length + string3.length
    && res === string + string2 + string3) // hola mundo
    success('test ok')
else
    fail('test fail')


// CASE 3

var string = 'adios'
var string2 = ' '
var string3 = 'mundo'
var string4 = 'cruel'

var res = startsWith(string, string2)

if (typeof res === 'string'
    && res.length === string.length + string2.length + string3.length + string2.length + string4.length
    && res === string + string2 + string3 + string2 + string4) // adios mundo cruel
    success('test ok')
else
    fail('test fail')
