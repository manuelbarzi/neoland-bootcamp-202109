function indexOf(array, searchElement, fromIndex = 0) {
    // El método indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array, o retorna -1 si el elemento no esta presente.
    var index = 0;

    for (var i = fromIndex; i < array.length; i++) {
        if (array[i] === searchElement) {
            index = i;
            break;
        } else {
            index = -1;
        }
    }

    return index;
}