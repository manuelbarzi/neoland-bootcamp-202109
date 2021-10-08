console.log('TEST NUMBERS')

var res = countNumbers([1, 2, 3]);

if (res instanceof Array
    && res.length === 3
    && res[0] === 6
    && res[1] === 0
    && res[2] === 6)
    console.log('Test OK')
else console.error('Test Failed')