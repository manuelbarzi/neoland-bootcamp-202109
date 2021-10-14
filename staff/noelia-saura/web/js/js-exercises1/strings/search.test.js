// TODO

describe ('TEST search')

//case 0

var text = 'Noelia se encuentra estudiando con musica'


var res= search(text, 'se')
if (typeof res === 'number'
    &&res===7) {
    success('test ok')
}else{
    fail('test failed')
}

//case 1
var text = 'Noelia se encuentra estudiando con musica'

var res= search(text, 'con')
if (typeof res === 'number'
    &&res===31) {
    success('test ok')
}else{
    fail('test failed')
}
//CASE 2
var text = '1, 2, 3'

var res= search(text, '2')
if (typeof res === 'number'
    &&res=== 3) {
    success('test ok')
}else{
    fail('test failed')
}
