describe('TEST countWords')

// CASE 1

var res = countWords('hola mundo')

if (res === 2)
    success('test ok')
else
    fail('test failed')

// CASE 2

var res = countWords('hello')

if (res === 1)
    success('test ok')
else
    fail('test failed')

// CASE 3

var res = countWords('noelia dice: abracadabra pata de cabra')

if (res === 6)
    success('test ok')
else
    fail('test failed')

// CASE 4

var res = countWords('luego de aprender un poco de js, andreu se despide: adiós mundo cruel 😭')

if (res === 14)
    success('test ok')
else
    fail('test failed')

// CASE 5

var res = countWords('a riccardo le encanta programar js, se lo pasa bomba, bombísima')

if (res === 11)
    success('test ok')
else
    fail('test failed')

// CASE 6

var res = countWords('dice nico que hoy es su cumpleaños y nos invita a todos a unas cervezas 🍻')

if (res === 16)
    success('test ok')
else
    fail('test failed')