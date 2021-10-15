describe('TEST push')

// ______________________________________________________________________________

var array = ['pigs', 'goats', 'sheep']
var res = push(array, 'cows')

if (typeof res === 'number'
    && res === 4
    && array.length === 4
    && array[0] === 'pigs'
    && array[1] === 'goats'
    && array[2] === 'sheep'
    && array[3] === 'cows')
    success('test 1 ok')
else
    fail('test 1 fail')

// ______________________________________________________________________________

var array = ['pigs', 'goats', 'sheep']
var res = push(array, 'cows', 'chickens', 'cats', 'dogs', 'mouses')

if (typeof res === 'number'
    && res === 8
    && array.length === 8
    && array[0] === 'pigs'
    && array[1] === 'goats'
    && array[2] === 'sheep'
    && array[3] === 'cows'
    && array[4] === 'chickens'
    && array[5] === 'cats'
    && array[6] === 'dogs'
    && array[7] === 'mouses')
    success('test 2 ok')
else
    fail('test 2 fail')