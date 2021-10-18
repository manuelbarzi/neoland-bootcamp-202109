function pop(arr = []) {
    var res = (arr.length) ? arr[arr.length -1] : undefined;
    (arr.length) ? arr.length-- : null;
    return res;
}