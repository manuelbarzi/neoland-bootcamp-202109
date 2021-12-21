// TODO implement the standalone version of Array.prototype.pop()
//la funcion .pop () extrae el ultimo elemento de la variable
/*function popThings(things) {
    var pop = things.pop()
    return pop
}*/
function pop(arr = []) {
    var res = (arr.length) ? arr[arr.length -1] : undefined;
    (arr.length) ? arr.length-- : null;
    return res;
}