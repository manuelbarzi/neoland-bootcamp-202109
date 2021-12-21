// TODO
describe ('TEST indexOf')
//case 0
var array = [1,2,3,4]
var res=indexOf(array, 2)
if (typeof res === 'number'
&&res === 1)
    success('test ok')
else
    fail('test failed')

//Case 1
var array = ['Noelia', 'Ana', 'Carlos', 'Sergio']

var res = indexOf (array, 'Ana')
if (typeof res === 'number'
&&res=== 1)
    success('test ok')
else
    fail('test failed')

//case 2

var array = ['a','b','c','d']
var res = indexOf (array, 'd')
if (typeof res === 'number'
&&res === 3)
    success('test ok')
else
    fail('test failed')

//case resuelto en clase

var array = ['ant','bison', 'camel','duck','bison']
var res= indexOf(array,'bison')

if(typeof res === 'number'
    &&res === 1){
        success ('test ok')
    }else{
        fail ('test failed')
    }
//
    var array = ['ant','bison', 'camel','duck','bison']
    var res= indexOf(array,'bison', 2)
    
    if(typeof res === 'number'
        &&res === 4){
            success ('test ok')
        }else{
            fail ('test failed')
        }

    var array = ['ant','bison', 'camel','duck','bison']
    var res= indexOf(array,'giraffe')
        
    if(typeof res === 'number'
       &&res === -1){
         success ('test ok')
     }else{
         fail ('test failed')
     }