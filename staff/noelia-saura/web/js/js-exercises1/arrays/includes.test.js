describe ('TEST includes')

var array = ['cat','dog','bat']
var res = includes(array,'cat')

if(typeof res === 'boolean'
    && res === true){
    success('test ok')
}else{
    fail ('test fail')
}
//case 2

var array = [1,2,3,4]
var res =includes(array,2)

if(typeof res === 'boolean'
    && res === true)
    success('test ok')
else
    fail ('test fail')

    var array = [1,2,3,4]
var res =includes(array,8)

if(typeof res === 'boolean'
    && res === false)
    success('test ok')
else
    fail ('test fail')