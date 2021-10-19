// TODO
describe ('TEST indexOf')
//case 0
var array = new Biblio(1,2,3,4)
var res=array.indexOf( 2)
if (typeof res === 'number'
    &&res === 1)
    success('test ok')
else
    fail('test failed')

//Case 1
var array = new Biblio('Noelia', 'Ana', 'Carlos', 'Sergio')

var res = array.indexOf ('Ana')
if (typeof res === 'number'
&&res=== 1)
    success('test ok')
else
    fail('test failed')

//case 2

var array = new Biblio('a','b','c','d')
var res = array.indexOf ('d')
if (typeof res === 'number'
&&res === 3)
    success('test ok')
else
    fail('test failed')

//case resuelto en clase

var array = new Biblio('ant','bison', 'camel','duck','bison')
var res= array.indexOf('bison')

if(typeof res === 'number'
    &&res === 1){
        success ('test ok')
    }else{
        fail ('test failed')
    }
//
    var array = new Biblio('ant','bison', 'camel','duck','bison')
    var res= array.indexOf('bison', 2)
    
    if(typeof res === 'number'
        &&res === 4){
            success ('test ok')
        }else{
            fail ('test failed')
        }

    var array = new Biblio('ant','bison', 'camel','duck','bison')
    var res= array.indexOf('giraffe')
        
    if(typeof res === 'number'
       &&res === -1){
         success ('test ok')
     }else{
         fail ('test failed')
     }