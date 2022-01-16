function some(arr = [], callback) {
    var bool = false;

    for (let i = 0;(i < arr.length && !bool); i++) {
        bool = callback(arr[i], i);
    }

    return bool;
}