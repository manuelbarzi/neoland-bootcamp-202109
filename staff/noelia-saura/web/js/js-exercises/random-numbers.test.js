// Implementar los tests que consideres necesarios

console.log('TEST randomNumbers')

var res = randomNumbers (1, 10);
if (res instanceof Array
    && res.length === 1) {
    console.log('test ok');
}else{
    console.log('test failed');
}

var res = randomNumbers(2, 10);
if (res instanceof Array
    && res.length === 2){
    console.log('test ok');
}else{
    console.log('test failed');
}   