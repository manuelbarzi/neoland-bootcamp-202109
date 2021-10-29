function pop(array) {
    var last = array[array.length - 1]

    array.length--

    if(array.length === 0) {
        array = undefined
    }

    return last

    /*var popped;

    for(let i = 0; i < array.length; i++) {
        var temp;

        if (array[i] === array[0]) {
            temp = [array[i]]

        } if (array[i] !== array[array.length - 1] && array[i] !== array[0]) {
            temp[i] = array[i]
        }
        popped = array[i]
    }
    array = temp

    return popped*/
}