function reverse(array) {
    // TODO

    for (var i = 0; i < (array.length / 2); i++) { // for loop ends at the half of the array
        var temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    
    }


    return array;
}