function orderNumbers(numbers, order) {

    let copyNumbers = numbers
    let copyOrder = order

    let ordered = []

    if (copyOrder === "asc") {
        ordered = copyNumbers.sort(function (a, b) {
            return a - b
        })
    }

    else if (copyOrder === "desc") {
        ordered = copyNumbers.sort(function (a, b) {
            return b - a
        })
    }

    else {
        console.log("El parámetro order debe ser 'asc' o 'desc'")
        ordered = copyNumbers
    }

    return ordered
}