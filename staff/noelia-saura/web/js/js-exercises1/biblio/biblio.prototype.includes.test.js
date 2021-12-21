describe ('TEST includes')

var array = new Biblio('cat','dog','bat')
var res = array.includes('cat')

if(typeof res === 'boolean'
    && res === true){
    success('test ok')
}else{
    fail ('test fail')
}
//case 2

var array = new Biblio (1,2,3,4)
var res =array.includes(2)

if(typeof res === 'boolean'
    && res === true)
    success('test ok')
else
    fail ('test fail')
//case3
var array = new Biblio (1,2,3,4)
var res =array.includes(8)

if(typeof res === 'boolean'
    && res === false)
    success('test ok')
else
    fail ('test fail')