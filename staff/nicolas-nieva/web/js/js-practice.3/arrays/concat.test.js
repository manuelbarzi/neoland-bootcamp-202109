describe ('Test Concat')

//CASE 1 

var array1 = [1,2,3]
var array2 = [8,6,4]

var res = concat(array1, array2)

if (res instanceof Array 
    && res.length === array1.length + array2.length
    && res[0] === array1[0]
    && res[1] === array1[1] 
    && res[2] === array1[2]
    && res[3] === array2[0]
    && res[4] === array2[1]
    && res[5] === array2[2]
    )
    {success ('test ok') }

    else fail('test fail')

    
//CASE 2

describe ('Test Concat')

var array1 = [100,3]
var array2 = [800,26,45]

var res = concat(array1, array2)

if (res instanceof Array 
    && res.length === array1.length + array2.length
    && res[0] === array1[0]
    && res[1] === array1[1] 
    && res[2] === array2[0]
    && res[3] === array2[1]
    && res[4] === array2[2]
    
)
success ('test ok') 
    else fail('test fail')
