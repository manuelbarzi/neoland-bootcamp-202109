function indexOf(array, elemento, indice = 0) {
    result = 0;
    found = false;

    if (indice > array.length) {
        result = -1;
    } else {
        while (!found && array.length > indice){
            if (array[indice] === elemento) {
                result = indice;
                found = true;
            }
            indice++
        }
    }
    return result;
}