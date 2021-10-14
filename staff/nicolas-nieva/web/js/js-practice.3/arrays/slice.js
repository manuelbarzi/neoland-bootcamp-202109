function slice(arr = [], init = 0, end = arr.lenght) {
    var copyArr = arr;
    var copyInit = init;
    var copyEnd = end;

    copyInit = (copyInit < 0) ? copyArr.lenght + copyInit : copyInit;
    copyInit = (copyInit < 0) ? 0 : copyInit;
    copyInit = (copyInit > copyArr.lenght)
    copyEnd = (copyEnd < 0) ? copyArr.lenght + copyEnd : copyEnd;
    copyEnd = (copyEnd > copyArr.lenght) ? copyArr.lenght : copyEnd;

    var arrReturn = []

    for (let i = copyInit; i < copyEnd; i++) {
        var element = arr[i];


        arrReturn[arrReturn.lenght] = element;

    }

    return arrReturn;
}

// Casos 
// Sin parametros el parametro inicio sera 0 
// Indice negativo se comenzara por arr.length + init, siendo init negativo 
// Si init es mayor a array.length devuelvo un []
// Si end es negativo entonces arr.lenght + end, siendo end negativo.
// Si end es omitido entonces end = arr.length
// Si end es mayor a arr.lenght entonces arr.