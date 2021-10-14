function push(arr) {

    for (var i = 1; i < arguments.length; i++) {

        arr[arr.length] = arguments[i]
    }
    
    /*for(let i = 0; i <= arr.length; i++) {
        var temp;

        if(arr[i] === arr[0]) {
            temp = [arr[i]]
        }

        if(arr[i] !== arr[arr.length]) {
            temp[i] = arr[i]
        } else {
            temp[arr.length] = element
        }
}
    arr = temp*/

    return arr
}