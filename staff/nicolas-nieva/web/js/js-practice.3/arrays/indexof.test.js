describe('TEST indexOf')



//case1 

var array = ['ant', 'bison', 'camel', 'duck', 'bison'];
var res = indexOf(array, 'bison')


if (typeof res === 'number'
    && res === 1)
    success('test ok')
else
    fail('test fail')


//case2 

var array = ['ant', 'bison', 'camel', 'duck', 'bison'];
var res = indexOf(array, 'bison', 2)


if (typeof res === 'number'
    && res === 4)
    success('test ok')
else
    fail('test fail')

//case3 

var array = ['ant', 'bison', 'camel', 'duck', 'bison'];
var res = indexOf(array, 'giraffe')


if (typeof res === 'number'
    && res === -1)
    success('test ok')
else
    fail('test fail')
