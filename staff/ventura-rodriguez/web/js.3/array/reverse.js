function reverse(arr = []) {
    for (let i = 0; i < (arr.length / 2); i++) {
        var change = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = change;
    }
    return arr;
}