function every(arr = [], callback) {
    var res = true;

    for (let i = 0;(i < arr.length && res); i++) {
        res = callback(arr[i], i);
    }

    return res;
}