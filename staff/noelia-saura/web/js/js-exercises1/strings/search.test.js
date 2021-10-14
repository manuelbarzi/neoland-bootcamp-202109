// TODO

describe ('TEST search')

//case 0

var frase = 'Noelia se encuentra estudiando con musica'
var palabra = 'se'

var res= frases(frase, palabra)
if (res===7) {
    success('test ok')
}else{
    fail('test failed')
}

//case 1
var frase = 'Noelia se encuentra estudiando con musica'
var palabra = 'con'

var res= frases(frase, palabra)
if (res===31) {
    success('test ok')
}else{
    fail('test failed')
}
//CASE 2
var frase = '1, 2, 3'
var palabra = '2'
var res= frases(frase, palabra)
if (res=== 3) {
    success('test ok')
}else{
    fail('test failed')
}
