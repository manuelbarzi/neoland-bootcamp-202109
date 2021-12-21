describe ('Test Concat')

describe ('Case 1')

var b1 = new Biblio('hola','adios')
var b2 = new Biblio(1,2,3)

var res = b1.concat(b2)

if (res instanceof Biblio
    && res.length === 5
    && res[0] === b1[0])

    success('test ok')
else
    fail('test failed')

    
// //case2

// describe ('Test Concat')

// var array1 = [100,3]
// var array2 = [800,26,45]

// var res = concat(array1, array2)

// if (res instanceof Array 
//     && res.length === array1.length + array2.length
//     && res[0] === array1[0]
//     && res[1] === array1[1] 
//     && res[2] === array2[0]
//     && res[3] === array2[1]
//     && res[4] === array2[2]
    
// )
// success ('test ok') 
//     else fail('test fail')
