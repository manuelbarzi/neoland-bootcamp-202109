console.log('TEST orderNumbers')

// case1

var res = orderNumbers([1, 2, 3, 4],'desc')

if (res instanceof Array
    && res.length === 4
    && res[0] === 4
    && res[1] === 3
    && res[2] === 2
    && res[3] === 1)
    console.log('test ok')
else
    console.log('test failed')

// case2

var res = orderNumbers([4, 3, 2, 1],'asc')

if (res instanceof Array
    && res.length === 4
    && res[0] === 1
    && res[1] === 2
    && res[2] === 3
    && res[3] === 4)
    console.log('test ok')
else
    console.log('test failed')

    // case3

var res = orderNumbers([5, 3, 1, 8],'asc')

if (res instanceof Array
    && res.length === 4
    && res[0] === 5
    && res[1] === 3
    && res[2] === 1
    && res[3] === 8)
    console.log('test ok')
else
    console.log('test failed')

    // case4

var res = orderNumbers([8, 3, 7, 1],'nada')

if (res instanceof Array
    && res.length === 4
    && res[0] === 8
    && res[1] === 3
    && res[2] === 7
    && res[3] === 1)
    console.log('test ok')
else
    console.log('test failed')