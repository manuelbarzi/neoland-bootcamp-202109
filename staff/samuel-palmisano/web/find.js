function find(arr, callback) {
    var result;
    var bool = false;
    for (let i = 0;(i < arr.length && !bool); i++) {
        bool = callback(arr[i], i);
        result = (bool) ? arr[i] : undefined;
    }
    return result;
}

