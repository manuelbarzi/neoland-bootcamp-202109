Biblio.prototype.slice = function (fromIndex = 0, indexEnd = this[0].length) {

    var copyArr = this;
    var copyFromIndex = fromIndex;
    var copyIndexEnd = indexEnd

    copyFromIndex = (copyFromIndex < 0) ? copyArr[0].length + copyFromIndex : copyFromIndex;
    copyFromIndex = (copyFromIndex < 0) ? 0 : copyFromIndex;
    copyFromIndex = (copyFromIndex > copyArr[0].length) ? copyArr[0].length : copyFromIndex;
    copyIndexEnd = (copyIndexEnd < 0) ? copyArr[0].length + copyIndexEnd : copyIndexEnd;
    copyIndexEnd = (copyIndexEnd > copyArr[0].length) ? copyArr[0].length : copyIndexEnd;

    var arrReturn = new Biblio;

    for (let i = copyFromIndex; i < copyIndexEnd; i++) {
        var element = this[0][i]
        arrReturn[arrReturn.length] = element;
        arrReturn.length++
    }

    return arrReturn
}