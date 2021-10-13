function pop(array) {

    for(let i = 0; i < array.length; i++) {
        var temp;

        if (array[i] === array[0]) {
            temp = [array[i]]

        } if (array[i] !== array[array.length - 1] && array[i] !== array[0]) {
            temp[i] = array[i]
        }
    }
    array = temp
    console.log(array.length)

    return array
}