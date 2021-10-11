function reverse(arr) {
    let copyArr = arr;
    arrReverse = [];

    for (let i = 0; i < copyArr.length; i++) {
        let position = copyArr.length - 1 - i;
        arrReverse.push(copyArr[position]);
    }

    return arrReverse;
}