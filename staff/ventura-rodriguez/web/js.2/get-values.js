// function getValue(numbers, target) {
//     let copyNumbers = numbers;
//     let copyTarget = target;
//     let valueReturn = 0;

//     if (copyTarget === "max") {
//         // Math.max(copyNumbers[0],copyNumbers[1] ... )
//         valueReturn = Math.max(...copyNumbers);
//     }
//     else if (copyTarget === "min") {
//         valueReturn = Math.min(...copyNumbers);
//     }
//     else if (copyTarget === "avg") {
//         let values = 0;
//         copyNumbers.forEach(function(element) {
//             values += element;
//         });
//         valueReturn = values/copyNumbers.length;
//     }
//     return valueReturn;
// }

function getValue(numbers, target) {
    let copyNumbers = numbers;
    let copyTarget = target;
    let valueReturn = copyNumbers[0];
    let avgValue = 0;

    for(let i = 0; i < copyNumbers.length; i++) {
        if((copyTarget === "max") && (valueReturn < copyNumbers[i])) {
            valueReturn = copyNumbers[i];
        }
        else if((copyTarget === "min") && (valueReturn > copyNumbers[i])) {
            valueReturn = copyNumbers[i];
        }
        else if((copyTarget === "avg")) {
            avgValue += (copyNumbers[i] / copyNumbers.length);
            valueReturn = avgValue;
        }
    }
    return valueReturn;
}