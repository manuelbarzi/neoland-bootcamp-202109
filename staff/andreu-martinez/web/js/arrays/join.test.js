describe("Test join")

// CASE 1

var array = ['a', 'b', 'a', 'c', 'a', 'd']
var res = join(array)

if (typeof res === 'string'
&& res.length === array.length)
    success('test ok')
else
    fail('test failed')


// CASE 2

var array = ['Hola', 1, 'que', 23, 'tal', 'estas']
var res = join(array)

if (typeof res === 'string'
    && res.length === 18)
    success('test ok')
else
    fail('test failed')