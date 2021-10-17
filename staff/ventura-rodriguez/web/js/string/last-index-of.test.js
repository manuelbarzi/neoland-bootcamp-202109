describe('TEST lastIndexOf')

// case 1

var res = lastIndexOf('hola mundo', 'a')

if (typeof res === 'number'
    && res === 3)
    success('test ok')
else
    fail('test ko')

// case 2

var res = lastIndexOf('hola mundo', 'o')

if (typeof res === 'number'
    && res === 9)
    success('test ok')
else
    fail('test ko')

// case 3

var res = lastIndexOf('hola mundo', 'i')

if (typeof res === 'number'
    && res === -1)
    success('test ok')
else
    fail('test ko')

// case 4

var res = lastIndexOf('hola mundo', 'mu')

if (typeof res === 'number'
    && res === 5)
    success('test ok')
else
    fail('test ko')

// case 5

var res = lastIndexOf('hola mundo', 'ola')

if (typeof res === 'number'
    && res === 1)
    success('test ok')
else
    fail('test ko')

// case 6

var res = lastIndexOf('hola mundo', 'olam')

if (typeof res === 'number'
    && res === -1)
    success('test ok')
else
    fail('test ko')

// case 7

var res = lastIndexOf('hola mundo holamundo', 'olam')

if (typeof res === 'number'
    && res === 12)
    success('test ok')
else
    fail('test ko')

// case 8

var res = lastIndexOf('holamundo holamundo', 'olam', 5)

if (typeof res === 'number'
    && res === 11)
    success('test ok')
else
    fail('test ko')

// case 9

var res = lastIndexOf('hhihi', 'hi')

if (typeof res === 'number'
    && res === 3)
    success('test ok')
else
    fail('test ko')