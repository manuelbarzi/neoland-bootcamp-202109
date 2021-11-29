describe('TEST repeat')

// CASE 1

var string = 'oh'
var res = repeat(string, 3)

if (typeof res === 'string'
    && res.length === 6
    && res === string + string + string) // ohohoh
    success('test ok')
else
    fail('test fail')

// CASE 2

var string = 'hola'
var res = repeat(string, 2)

if (typeof res === 'string'
    && res.length === 8
    && res === string + string) // holahola
    success('test ok')
else
    fail('test fail')


// CASE 3

var string = 'adiós'
var res = repeat(string, 4.5)

if (typeof res === 'string'
    && res.length === 20
    && res === string + string + string + string) // adiósadiósadiósadiós
    success('test ok')
else
    fail('test fail')

// CASE 4

var string = 'adiós'
var res = repeat(string, 4.5)

if (typeof res === 'string'
    && res.length === 20
    && res === string + string + string + string) // adiósadiósadiósadiós
    success('test ok')
else
    fail('test fail')

// CASE 4

var string = 'adiós'
var res = repeat(string, -1)

if (typeof res === 'string'
    && res.length === 0
    && res === 'rangeError')
    success('test ok')
else
    fail('test fail')