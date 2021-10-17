function includes(arr = [], callback) {
    var res = false;

    for (let i = 0;(i < arr.length && !res); i++) {
        res = callback(arr[i], i);
    }

    return res;
}