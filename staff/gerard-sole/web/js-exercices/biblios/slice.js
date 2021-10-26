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
