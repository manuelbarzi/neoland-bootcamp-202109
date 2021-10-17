function push(arr = []) {
    var position = arr.length;
    for (let i = 0; i < (arguments.length - 1);i++)
        arr[position + i] = arguments[i + 1];
    return arr.length;
}