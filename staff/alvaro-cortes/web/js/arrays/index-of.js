function indexOf(array, num) {
    var index = 0;
    var count = 0;

    for(let i = 0; i < array.length; i++) {
        count = i
        if (num === array[i])
        index = count
    }
    return index
}