
describe ('TEST lastIndexOf')

//Case 1

var array = ['Dodo', 'Tiger', 'Penguin', 'Dodo',]
var res = lastindexof(array,'Dodo')
if(typeof res === 'number'
    && res === 3){
    success('test ok')
}else{
    fail ('test fail')
}

//Case 2

var array = [1,2,3,1,2]
var res = lastindexof(array,2)
if (typeof res==='number'
    && res===4) {
        success('test ok')
    }else{
        fail ('test fail')
    }

//case 3
var array = [5, 6, 10 ,20 ,4 ,1]
var res = lastindexof(array,20)
if (typeof res==='number'
    && res === 3) {
        success('test ok')
    }else{
        fail ('test fail')
    }

//case 4
var array = [5, 6, 10 ,20 ,4 ,1]
var res = lastindexof(array,20 , 2)
if (typeof res==='number'
    && res === -1) {
        success('test ok')
    }else{
        fail ('test fail')
    }

    