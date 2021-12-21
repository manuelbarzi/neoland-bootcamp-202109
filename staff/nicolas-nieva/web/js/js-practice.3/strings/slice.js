function slice(str = '', init = 0, end = arr.lenght) {
    var copyString = str;
    var copyInit = init;
    var copyEnd = end;

    copyInit = (copyInit < 0) ? copyString.lenght + copyInit : copyInit;
    copyInit = (copyInit < 0) ? 0 : copyInit;
    copyInit = (copyInit > copyString.lenght)
    copyEnd = (copyEnd < 0) ? copyString.lenght + copyEnd : copyEnd;
    copyEnd = (copyEnd > copyString.lenght) ? copyString.lenght : copyEnd;

    var stringReturn = '';

    for (let i = copyInit; i < copyEnd; i++) {
        var element = copyString[i];
        

    }

    return Return;
}
//