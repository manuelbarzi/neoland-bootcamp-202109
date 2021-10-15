describe('TEST indexOf')

let arr = ['ant', 'bison', 'camel', 'duck', 'bison']


// CASE 1

var res = indexOf(arr, 'bison')

if (typeof res === 'number' && res === 1)
    success('test ok')
else
    fail('test fail')


// CASE 2

var res = indexOf(arr, 'bison', 0)

if (typeof res === 'number' && res === 1)
    success('test ok')
else
    fail('test fail')


// CASE 3

var res = indexOf(arr, 'giraffe')

if (typeof res === 'number' && res === -1)
    success('test ok')
else
    fail('test fail')