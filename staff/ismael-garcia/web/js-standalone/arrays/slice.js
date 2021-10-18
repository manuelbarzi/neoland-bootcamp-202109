function slice(array, start, end) {
    
    var sliced = [];

    start = start < 0 ? array.length + start : start;

    end = end ? (end < 0 ? array.length + end : end) : array.length;
    

    for (var i = start; i < end; i++) {
        sliced[sliced.length] = array[i];
    }

    return sliced;
}


// El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.
    // Si el índice especificado es negativo, indica un desplazamiento desde el final del array. Ej: slice(-2) extrae los dos últimos elementos del array.
    // Si inicio es omitido el valor por defecto es 0.
    // Si inicio es mayor a la longitud del array, se devuelve un array vacío.
    // Con un índice negativo, fin indica un desplazamiento desde el final de la secuencia. slice(2,-1) extrae desde el tercer hasta el penúltimo elemento en la secuencia.
    // Si fin es omitido, slice extrae hasta el final de la secuencia (arr.length).
    // Si fin es mayor a la longitud del array, slice extrae hasta el final de la secuencia (arr.length).