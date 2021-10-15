
function countNumbers(arr) {
    let totalPositives = 0
    let totalNegatives = 0
    let balance = 0

    for (let i = 0; i < arr.length; i++) {
        arrValue = arr[i]
        
        if ( arrValue > 0 )
            totalPositives += arrValue
        else
            totalNegatives += arrValue
    }

    balance = totalPositives + totalNegatives

    let result = [ totalPositives, totalNegatives, balance ]

    return result
}