console.log('TEST push')

//case 1 

var array = ['pigs', 'goats', 'sheep']
var res = push(array, 'cows')

if (typeof res === 'number'
    && res === 4
    && array.length === 4
    && array[0] === 'pigs'
    && array[1] === 'goats'
    && array[2] === 'sheep'
    && array[3] === 'cows')
    console.log('Test ok')
else
    console.error('test failed')

//case 1 

var array = ['pigs', 'goats', 'sheep']
var res = push(array, 'cows')

if (typeof res === 'number'
    && res === 4
    && array.length === 4
    && array[0] === 'pigs'
    && array[1] === 'goats'
    && array[2] === 'sheep'
    && array[3] === 'cows')
    console.log('Test ok')
else
    console.error('test failed')