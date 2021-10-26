function concat() {
    var arr = [];
    for (let i = 0; i < arguments.length; i++) {
        var element = arguments[i];
        var largeArr = arr.length;
        var laps = element.length + largeArr;

        for (let j = arr.length; j < laps; j++) 
        arr[j] = element[j - largeArr];
    }
    return arr;
}