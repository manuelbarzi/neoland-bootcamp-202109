function slice(str = "", init = 0, end = str.length) {

    var copyString = str;
    var copyInit = init;
    var copyEnd = end;

    copyInit = (copyInit < 0) ? copyString.length + copyInit : copyInit;
    copyInit = (copyInit < 0) ? 0 : copyInit;
    copyInit = (copyInit > copyString.length) ? copyString.length : copyInit;
    copyEnd = (copyEnd < 0) ? copyString.length + copyEnd : copyEnd;
    copyEnd = (copyEnd > copyString.length) ? copyString.length : copyEnd;

    var stringReturn = "";

    for (let i = copyInit; i < copyEnd; i++) {
        var element = copyString[i];
        stringReturn += element;
    }

    return stringReturn;
}

// Casos de uso

// Sin parámetros el parámetro init será 0        =)
// Índice negativo se comenzará por str.length + init, siendo init negativo =)
// Si init es mayor a str.length entonces devuelvo []   =)
// Si end es negativo entonces str.length + end, siendo end negativo.   =)
// si end es omitido entonces end = str.length      =)
// si end es mayor a str.length entonces end = str.length   =)