function lastIndexOf(str = "", pattern, index = 0) {
    var res = -1;
    var position = (index < 0) ? str.length - index : index;
    position = (position < 0) ? str.length : position;
    for (
        var i = 0;
        ((i < (str.length - position)) &&
        (res === -1) &&
        (i >= 0) &&
        (i <= (str.length - pattern.length - position))
    );
        i++
    ) {
        var substr = "";
        for (let j = 0; j < pattern.length; j++)
            substr += str[str.length - pattern.length + j - i];
        res = (substr === pattern) ? (str.length - pattern.length - i) : -1;
    }
    return res;
}