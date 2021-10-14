// TODO
describe ('TEST index-of')


var res=indexOf('1,2,3,4', '2')
if (typeof res ==='number'
    &&res  === 2)
    success('test ok')
else
    fail('test failed')

//Case 1

var res = indexOf('Noelia esta aprendiendo indexOf', 'aprendiendo')
if (typeof res ==='number'
    &&res === 12)
    success('test ok')
else
    fail('test failed')

//case 2


var res = indexOf('a,b,c,d', 'd')
if (typeof res ==='number'
    &&res === 6)
    success('test ok')
else
    fail('test failed')

//case resuelto en clase
    var res = indexOf('hola mundo','a')
if (typeof res ==='number'
    && res === 3 )
    success ('test ok')
else
    fail ('test failed')