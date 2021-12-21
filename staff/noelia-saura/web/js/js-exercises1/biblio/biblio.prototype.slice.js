// Casos de uso

// Sin parámetros el parámetro init será 0        =)
// Índice negativo se comenzará por arr.length + init, siendo init negativo =)
// Si init es mayor a arr.length entonces devuelvo []   =)
// Si end es negativo entonces arr.length + end, siendo end negativo.   =)
// si end es omitido entonces end = arr.length      =)
// si end es mayor a arr.length entonces end = arr.length   =)
Biblio.prototype.slice=function (start, end) {
    var sliced = []
    start = start < 0? this.length + start : start
    end = end? (end < 0? this.length + end: end) : this.length
    for (var i = start; i < end; i++) {
        sliced[sliced.length] = this[i]
    }
    return sliced
}