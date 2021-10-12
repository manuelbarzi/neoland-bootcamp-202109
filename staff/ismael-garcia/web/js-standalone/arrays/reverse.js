function reverse(array) {
    // El método reverse() invierte el orden de los elementos de un array in place. El primer elemento pasa a ser el último y el último pasa a ser el primero.

    for (var i = 0; i < (array.length / 2); i++) { // for loop ends at the half of the array
        var temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    
    }

    return array;
}




