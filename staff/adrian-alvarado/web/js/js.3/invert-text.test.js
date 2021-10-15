describe('Test invertText')

// CASE 1

var res = invertText('hola')

if (res === 'aloh')
    success('test ok')
else
    fail('test failed')

// CASE 2

var res = invertText('mundo')

if (res === 'odnum')
    success('test ok')
else
    fail('test failed')