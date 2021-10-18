function indexOf(arr = [], element, index = 0) {
    var res = -1;
    var position = (index < 0) ? str.length - index : index;
    position = (position < 0) ? str.length : position;
    for (
        var i = position;
        ((i < arr.length) && (res === -1) && (i >= 0));
        i++
    )
        res = (element === arr[i]) ? i : -1;

    return res;
}