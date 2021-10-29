console.log('TEST orderNumbers')

// CASE 1

var res = orderNumbers([1, 2, 3, 4], 'desc')

if (res instanceof Array
    && res.length === 4
    && res[0] === 4
    && res[1] === 3
    && res[2] === 2
    && res[3] === 1)
    console.log('Test correct')
else
    console.log('Test failed')

// CASE 2 //

var res = orderNumbers([4, 3, 2, 1], 'asc')

if (res instanceof Array
    && res.length === 4
    && res[0] === 1
    && res[1] === 2
    && res[2] === 3
    && res[3] === 4)
    console.log('Test correct')
else
    console.log('Test failed')

// CASE 3 //

var res = orderNumbers([1, 22, 105, 2, 3, 4], "desc")

if (res instanceof Array&& res.length === 6
    && res[0] === 105
    && res[1] === 22
    && res[2] === 4
    && res[3] === 3
    && res[4] === 2
    && res[5] === 1) {
        console.log("Test correct")
    } else {
        console.error("Test failed")
    }