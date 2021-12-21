describe('TEST repeat')

 //CASE 1

var string = 'hola'


var res = repeat(string, 2)

if (typeof res === 'string'
    && res.length === 8
    && res === 'holahola')
    success('test ok')
else
    fail('test failed')

 //CASE 2

 var string = '1,2,3,4'
 
 var res = repeat(string, 3)

 if (typeof res === 'string'
     && res.length === 21
     && res === '1,2,3,41,2,3,41,2,3,4')
     success('test ok')
 else
     fail('test failed')

  //CASE 3

 var string = 'Adrian y Ana'

 var res = repeat(string, 2)

 if (typeof res === 'string'
     && res.length === 24
     && res === 'Adrian y AnaAdrian y Ana')
     success('test ok')
 else
     fail('test failed')