function filter(arr = [], callback) {
    var res = [];
    for (let i = 0; i < arr.length; i++) {
        var bool = callback(arr[i], i)
        if (bool) res[res.length] = arr[i];
    }
    return res;
}