function countValues(values) { // values es de tipo array
    var totalItems = 0;
    var totalTrue = 0;
    var totalFalse = 0;

    for(let i = 0; i < values.length; i++) {
        totalItems++
        if(values[i] === true) {
            totalTrue++
        } else {
            totalFalse++
        }
    }
    var arrCount = [totalItems, totalTrue, totalFalse];
    return arrCount;
}