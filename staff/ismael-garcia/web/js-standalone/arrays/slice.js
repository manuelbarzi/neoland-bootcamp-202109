function slice(array = [], init = 0, end = array.length) {
    // El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.
    // Si el índice especificado es negativo, indica un desplazamiento desde el final del array. Ej: slice(-2) extrae los dos últimos elementos del array.
    // Si inicio es omitido el valor por defecto es 0.
    // Si inicio es mayor a la longitud del array, se devuelve un array vacío.
    // Con un índice negativo, fin indica un desplazamiento desde el final de la secuencia. slice(2,-1) extrae desde el tercer hasta el penúltimo elemento en la secuencia.
    // Si fin es omitido, slice extrae hasta el final de la secuencia (arr.length).
    // Si fin es mayor a la longitud del array, slice extrae hasta el final de la secuencia (arr.length).
    
    var cArray = array;
    var cInit = init;
    var cEnd = end;

    cInit = (cInit < 0) ? cArray.length + cInit : cInit;
    cInit = (cInit < 0) ? 0 : cInit; // Esta línea parece estar en conflicto con la anterior
    cInit = (cInit > cArray.length) ? cArray.length : cInit;
    cEnd = (cEnd < 0) ? cArray.length + cEnd : cEnd;
    cEnd = (cEnd > cArray.length) ? cArray.length : cEnd;

    var result = [];

    for (var i = cInit; i < cEnd; i++) {
        var element = cArray[i];
        result[result.length] = element;

    }

    return result;
}