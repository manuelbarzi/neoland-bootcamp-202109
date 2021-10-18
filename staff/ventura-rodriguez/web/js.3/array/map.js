function map(arr = [], callback) {
    var result = [];
    for (let i = 0; i < arr.length; i++) result[i] = callback(arr[i], i);
    return result;
}