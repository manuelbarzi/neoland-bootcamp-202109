function lastIndexOf(arr = [], element, index = (arr.length - 1)) {
    var res = -1;
    var laps = (index < 0) ? arr.length - index : index;
    for (
        var i = 0;((i < laps) && (res === -1) && (i >= 0)); i++) {
        var position = arr.length - 1 - i;
        res = (element === arr[position]) ? position : -1;
    }
    return res;
}