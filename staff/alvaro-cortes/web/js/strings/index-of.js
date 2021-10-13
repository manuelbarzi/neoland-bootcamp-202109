function indexOf(string, element) {
    var index = 0;
    var count = 0;

    for(let i = 0; i < string.length; i++) {
        count = i
        if (element === string[i])
        index = count
    }
    return index
}