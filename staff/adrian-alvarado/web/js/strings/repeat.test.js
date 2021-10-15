describe('TEST repeat')

// CASE 1

var string = 'hola'
var count = 0

var res = repeat(string, count)

if (typeof res === 'string'
    && res.length === 0
    && res === '')
    success('test ok')
else
    fail('test failed')