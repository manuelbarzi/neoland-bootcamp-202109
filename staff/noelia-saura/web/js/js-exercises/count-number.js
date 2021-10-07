function countNumbers(values) {
    var totalPositives = 0
    var totalNegatives = 0
    var balance = 0

    // TODO implement me
    for (var i = 0; i < values.length; i++) {
        if (values[i] >= 0){
            var totalPositives = totalPositives + values[i]
        }else {
            var totalNegatives = totalNegatives + values[i]
        }
    }
    var balance = totalPositives + totalNegatives
    var result = [totalPositives, totalNegatives, balance]

    return result
}