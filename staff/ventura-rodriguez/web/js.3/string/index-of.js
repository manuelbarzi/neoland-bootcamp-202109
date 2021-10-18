function indexOf(str = "", pattern, index = 0) {
    var res = -1;
    var position = (index < 0) ? str.length - index : index;
    position = (position < 0) ? str.length : position;
    for (
        var i = position;
        ((i < str.length) &&
        (res === -1) &&
        (i >= 0) &&
        (i <= (str.length - pattern.length))
    );
        i++
    ) {
        var substr = "";
        for (let j = 0; j < pattern.length; j++) substr += str[i + j];
        res = (substr === pattern) ? i : -1;
    }
    return res;
}