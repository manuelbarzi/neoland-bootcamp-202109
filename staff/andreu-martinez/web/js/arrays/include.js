function include(array, value) {
    var bool = false
    for (let i = 0; i < array.length; i++) {
        if (value === array[i]) bool = true;
    }
    return bool
}