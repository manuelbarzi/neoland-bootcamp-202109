
//case 1

var res = slice ([1,2,3,4,5], 2)

if (res instanceof Array
    && res.length === 3 
    && res[0] === 3
    && res[1] === 4  
    && res[2] === 5)
    
    success ('test ok')

else ('test fail')

//case 2

var res = slice ([1,2,3,4,5], 1, 3)

if (
    res instanceof Array
    && res.length === 2
    && res[0] === 2
    && res[1] === 3)  
    success('test ok')
else ('test fail')

//case 3

var res = slice ([1,2,3,4,5])

if (
    res instanceof Array
    && res.length === 5
    && res[0] === 1
    && res[1] === 2
    && res[2] === 3
    && res[3] === 4
    && res[4] === 5)  
    success('test ok')
else ('test fail')


