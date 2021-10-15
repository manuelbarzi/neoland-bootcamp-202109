function getValue(arr, target) {
    let copyNumbers = arr
    let valueReturn = copyNumbers[0]
    let avgValue = 0
    
    if ( target === 'max' ) {
        for ( let i = 0; i < arr.length; i++ ) {

            if ( valueReturn < copyNumbers[i] ) {
                valueReturn = copyNumbers[i]
            }
        }
    
    } else if ( target === 'min' ) {
        for ( let i = 0; i < arr.length; i++ ) {

            if ( valueReturn > copyNumbers[i] ) {
                valueReturn = copyNumbers[i]
            }
        }
    
    } else if ( target === 'avg' ) {
        for ( let i = 0; i < arr.length; i++ ) {
            avgValue += (copyNumbers[i] / copyNumbers.length)
            valueReturn = avgValue
        }
    }

    return valueReturn
}


// --------------------------Ventu Versión------------------------------------------
// function getValue(numbers, target) {
//     let copyNumbers = numbers;
//     let copyTarget = target;
//     let valueReturn = copyNumbers[0];
//     let avgValue = 0;

//     for(let i = 0; i < copyNumbers.length; i++) {
//         if((copyTarget === "max") && (valueReturn < copyNumbers[i])) {
//             valueReturn = copyNumbers[i];
//         }
//         else if((copyTarget === "min") && (valueReturn > copyNumbers[i])) {
//             valueReturn = copyNumbers[i];
//         }
//         else if((copyTarget === "avg")) {
//             avgValue += (copyNumbers[i] / copyNumbers.length);
//             valueReturn = avgValue;
//         }
//     }
//     return valueReturn;
// }