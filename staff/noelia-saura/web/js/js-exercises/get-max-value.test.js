console.log('TEST getMaxValue')

// CASE 1

var res = getMaxValue([1, 2, 3, 4])

if (typeof res === 'number'
    && res === 4)
    console.log('test ok')
else
    console.error('test failed')

// CASE 2

var res = getMaxValue([56, 22, 23, 1004, 14, 102, 75])

if (typeof res === 'number'
    && res === 1004)
    console.log('test ok')
else
    console.error('test failed')
