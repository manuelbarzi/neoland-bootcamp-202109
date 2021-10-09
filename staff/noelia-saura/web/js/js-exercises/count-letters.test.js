console.log('TEST countLetters') 

//case 1
var res = countLetters ('hola mundo')
if (res === 9) {
    console.log('test ok')
}else{
    console.log('test failed')
}

//case 2
var res = countLetters('hola')
if (res===4) {
    console.log('test ok')
}else{
    console.log('test failed')
}

//case 3

var res = countLetters('mundo')
if (res===5) {
    console.log('test ok')
}else{
    console.log('test failed')
}

//case 4
var res = countLetters('adios mundo cruel')
if (res===15) {
    console.log('test ok')
}else{
    console.log('test failed')
}
