describe('TEST Biblio concat')

// HINT pay attention to the keyword "arguments" (Search in Google)

// CASE 1

var array1 = [1, 2, 3]
var array2 = [8, 6, 4]

var res = concat(array1, array2) // [1, 2, 3, 8, 6, 4]

if (res instanceof Array 
    && res.length === array1.length + array2.length
    && res[0] === array1[0] // 1
    && res[1] === array1[1] // 2
    && res[2] === array1[2] // 3
    && res[3] === array2[0] // 8
    && res[4] === array2[1] // 6
    && res[5] === array2[2]) // 4
    success('test ok')
else
    fail('test fail')

// CASE 2

var array1 = [100, 3]
var array2 = [800, 26, 45]

var res = concat(array1, array2) // [100, 3, 800, 26, 45]

if (res instanceof Array 
    && res.length === array1.length + array2.length
    && res[0] === array1[0] // 100
    && res[1] === array1[1] // 3
    && res[2] === array2[0] // 800
    && res[3] === array2[1] // 26
    && res[4] === array2[2]) // 45
    success('test ok')
else
    fail('test fail')

// CASE 3

var array1 = [10, 20, 30]
var array2 = [8, 46, 204]
var array3 = [19, 1]

var res = concat(array1, array2, array3) // [10, 20, 30, 8, 46, 204, 19, 1]

if (res instanceof Array 
    && res.length === array1.length + array2.length + array3.length
    && res[0] === array1[0] // 10
    && res[1] === array1[1] // 20
    && res[2] === array1[2] // 30
    && res[3] === array2[0] // 8
    && res[4] === array2[1] // 46
    && res[5] === array2[2] // 204
    && res[6] === array3[0] // 19
    && res[7] === array3[1]) // 1
    success('test ok')
else
    fail('test fail')