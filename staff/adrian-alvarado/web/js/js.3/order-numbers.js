
function orderNumbers(numbers, order) {
    let ordered = []

    if ( order == 'desc' ) {
        for( let i = 0; i < numbers.length; i++ ) {
            numbersValue = numbers[ numbers.length - 1 - i ]
            ordered += numbersValue
        }
    } else if ( order === 'asc' ) {
        for( let i = 0; i < numbers.length; i++ ) {
            numbersValue = numbers[i]
            ordered += numbersValue
        }
    }

    return ordered
}

// Corregir no devuelve un array