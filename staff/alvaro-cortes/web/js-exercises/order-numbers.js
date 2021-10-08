function orderNumbers(numbers, order) {
    var ordered = []

    if (order === "asc") {
        ordered = numbers.sort(function(a, b) {
            return a - b
        })
    } else if (order === "desc") {
        ordered = numbers.sort(function(a, b) {
            return b - a
        })
    } else {
        console.log("Por favor ingresar uno de estos dos parametros: 'asc' o 'desc'")
        ordered = numbers;
    }
    return ordered
}


