function indexOf(array, element, fromIndex) {

    for(let i = fromIndex? fromIndex : 0; i < array.length; i++) {
        var item = array[i]

        if (item === element)
        return i
    }
    return -1
}