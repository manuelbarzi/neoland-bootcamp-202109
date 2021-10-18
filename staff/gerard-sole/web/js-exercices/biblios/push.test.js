describe('TEST push')

describe('case 1') 

var array = ['pigs', 'goats', 'sheep']
var res = push(array, 'cows')

if (typeof res === 'number'
    && res === 4
    && array.length === 4
    && array[0] === 'pigs'
    && array[1] === 'goats'
    && array[2] === 'sheep'
    && array[3] === 'cows')
    success('Test ok')
else
    fail('test failed')

describe('case 2') 

var array = ['pigs', 'goats', 'sheep']
var res = push(array, 'cows')

if (typeof res === 'number'
    && res === 4
    && array.length === 4
    && array[0] === 'pigs'
    && array[1] === 'goats'
    && array[2] === 'sheep'
    && array[3] === 'cows')
    success('Test ok')
else
    fail('test failed')