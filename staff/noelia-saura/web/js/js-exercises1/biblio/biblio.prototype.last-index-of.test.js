
describe ('TEST lastIndexOf')

//Case 1

var array = new Biblio('Dodo', 'Tiger', 'Penguin', 'Dodo',)
var res = array.lastIndexOf('Dodo')
if(typeof res === 'number'
    && res === 3){
    success('test ok')
}else{
    fail ('test fail')
}

//Case 2

var array = new Biblio(1,2,3,1,2)
var res = array.lastIndexOf(2)
if (typeof res==='number'
    && res===4) {
        success('test ok')
    }else{
        fail ('test fail')
    }

//case 3
var array = new Biblio(5, 6, 10 ,20 ,4 ,1)
var res = array.lastIndexOf(20)
if (typeof res==='number'
    && res === 3) {
        success('test ok')
    }else{
        fail ('test fail')
    }

//case 4
var array = new Biblio(5, 6, 10 ,20 ,4 ,1)
var res = array.lastIndexOf(20 , 2)
if (typeof res==='number'
    && res === -1) {
        success('test ok')
    }else{
        fail ('test fail')
    }

    