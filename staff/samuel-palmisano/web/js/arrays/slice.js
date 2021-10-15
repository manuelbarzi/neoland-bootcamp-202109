function slice(arr = [], init = 0, end = arr.length) {

    var copyArr = arr;
    var copyInit = init;
    var copyEnd = end;

    copyInit = (copyInit < 0) ? copyArr.length + copyInit : copyInit;
    copyInit = (copyInit < 0) ? 0 : copyInit;
    copyInit = (copyInit > copyArr.length) ? copyArr.length : copyInit;
    copyEnd = (copyEnd < 0) ? copyArr.length + copyEnd : copyEnd;
    copyEnd = (copyEnd > copyArr.length) ? copyArr.length : copyEnd;

    var arrReturn = [];

    for (let i = copyInit; i < copyEnd; i++) {
        var element = arr[i];
        arrReturn[arrReturn.length] = element;
    }

    return arrReturn;
}

// Casos de uso

// Sin parámetros el parámetro init será 0        =)
// Índice negativo se comenzará por arr.length + init, siendo init negativo =)
// Si init es mayor a arr.length entonces devuelvo []   =)
// Si end es negativo entonces arr.length + end, siendo end negativo.   =)
// si end es omitido entonces end = arr.length      =)
// si end es mayor a arr.length entonces end = arr.length   =)  

function slice(string, init, end) {
    // for loop
    // var aux (new string)
    // return aux
    var slice = ''

    var start = init < 0? string.length + init : init
    var finish = end? (end < 0? string.length + end : end) : string.length

    for (var i = start; i < finish; i++) {
        var char = string[i]

        slice += char // slice = slice + char
    }

    return slice