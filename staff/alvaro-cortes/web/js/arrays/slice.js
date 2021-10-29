/*function slice(array = [], fromIndex = 0, indEnd = array.length) {

    var newArray = []
    var j = 0;

    for (let i = fromIndex? fromIndex : 0; i < array.length; i++) {

        if (array[i] !== array[indEnd]) {
            newArray[j] = array[i]
            j++

        } if (array[i] == array[indEnd]) {
            return newArray   
        }
        
    }
    return newArray

}*/


function slice(arr = [], fromIndex = 0, indexEnd = arr.length) {

    var copyArr = arr;
    var copyFromIndex = fromIndex;
    var copyIndexEnd = indexEnd

    copyFromIndex = (copyFromIndex < 0) ? copyArr.length + copyFromIndex : copyFromIndex;
    copyFromIndex = (copyFromIndex < 0) ? 0 : copyFromIndex;
    copyFromIndex = (copyFromIndex > copyArr.length) ? copyArr.length : copyFromIndex;
    copyIndexEnd = (copyIndexEnd < 0) ? copyArr.length + copyIndexEnd : copyIndexEnd;
    copyIndexEnd = (copyIndexEnd > copyArr.length) ? copyArr.length : copyIndexEnd;

    var arrReturn = []

    for (let i = copyFromIndex; i < copyIndexEnd; i++) {
        var element = arr[i]
        arrReturn[arrReturn.length] = element;
    }

    return arrReturn
}
// Casos de uso

// Sin parámetros el parámetro init será 0        =)
// Índice negativo se comenzará por arr.length + init, siendo init negativo =)
// Si init es mayor a arr.length entonces devuelvo []   =)
// Si end es negativo entonces arr.length + end, siendo end negativo.   =)
// si end es omitido entonces end = arr.length      =)
// si end es mayor a arr.length entonces end = arr.length   =)