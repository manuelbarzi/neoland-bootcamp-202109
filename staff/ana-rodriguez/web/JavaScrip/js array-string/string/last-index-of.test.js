
describe ('TEST lastIndexOf')

//Case 1

var string = 'Murcielago'
var res = lastIndexOf(string, 'M')
if(typeof res === 'number'
    && res === 0){
    success('test ok')
}else{
    fail ('test fail')
}

//Case 2

var string = '1,2,3,1,2'
var res = lastIndexOf(string,'2')
if (typeof res==='number'
    && res===8) {
        success('test ok')
    }else{
        fail ('test fail')
    }

//case 3
var string = 'hola mundo'
var res = lastIndexOf(string,'o')
if (typeof res==='number'
    && res === 9) {
        success('test ok')
    }else{
        fail ('test fail')
    }

//case 4
var string = '5, 6, 10 ,20 ,4 ,1'
var res = lastIndexOf(string,'25' , 2)
if (typeof res==='number'
    && res === -1) {
        success('test ok')
    }else{
        fail ('test fail')
    }

    