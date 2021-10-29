function numbers(values) { // values es de tipo array
    var totalPositives = 0;
    var totalNegatives = 0;
    var balance = 0;

    for(let i = 0; i < values.length; i++) {
        if(Math.sign(values[i]) == 1) {
            totalPositives += values[i]
        } if(Math.sign(values[i]) == -1) {
            totalNegatives += values[i]
        } if(Math.sign(values[i]) == 0) {
            totalPositives += values[i]
        }
    }
        balance = totalPositives - totalNegatives

    var arrCount = [totalPositives, totalNegatives, balance];
    return arrCount;
}