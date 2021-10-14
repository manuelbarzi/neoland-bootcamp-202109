// TODO implement the standalone version of Array.prototype.concat()
// concat junta arrays sin cambiar el valor de ellos
/*function concatArrays(example1, example2) {
    var array = example1.concat(example2)
    return array
    
}*/
//si son mas examples es necesario utilizar arguments dejando los parametros de la function vacia
function concatArrays(example1, example2) {
    var array = []
    for (let i = 0; i < example1.length; i++) {
        array[array.length]= example1[i]
    }
    for (let j = 0; j < example2.length; j++) {
        array[array.length]= example2[j]
    }
    return array 
}
