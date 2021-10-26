function startsWith(string, searchElement, position = 0) {
    var res = false
    var j = 0
    var substring = ''
    for (var i = position; string[i] === searchElement[j]; i++){
        var char = string[i];
        j++;
        res = true;
        substring += char
    }
    res = (substring === searchElement) ? true : false;

    return res
}