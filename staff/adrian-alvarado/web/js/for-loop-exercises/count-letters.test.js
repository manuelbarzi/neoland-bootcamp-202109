describe('TEST countLetters')

// CASE 1

var res = countLetters('hola mundo')

if (res === 9)
    success('test ok')
else
    fail('test failed')

// CASE 2

var res = countLetters('hola')

if (res === 4)
    success('test ok')
else
    fail('test failed')

// CASE 3

var res = countLetters('mundo')

if (res === 5)
    success('test ok')
else
    fail('test failed')

// CASE 4

var res = countLetters('adios mundo cruel')

if (res === 15)
    success('test ok')
else
    fail('test failed')

// CASE 5

var res = countLetters('lorem ipsum whatever wtf')

if (res === 21)
    success('test ok')
else
    fail('test failed')