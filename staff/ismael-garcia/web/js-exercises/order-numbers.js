function orderNumbers(numbers, order) {
    var ordered = [];

    // TODO implement me
    if (order === 'asc') {
        ordered = numbers.sort(function(a, b) {
            return a - b;
        });
        
    } else if (order === 'desc') {
        ordered = numbers.sort(function(a, b) {
            return b - a;
        });

    } else {
        console.log("Enter 'asc' or 'desc' as the order parameter")
        ordered = numbers;
    }

    return ordered;
}