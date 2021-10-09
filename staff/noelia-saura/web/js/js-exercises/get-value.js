function getValue(numbers, target) {
    var resultNumber = numbers[0];
    
    if (target === 'max') {
        for (let i = 0; i < numbers.length; i++) {
            var number= numbers[i]
            if (number > resultNumber) {
                resultNumber=number
            }
        }
        return resultNumber;
    }

    if (target === 'min') {
        
        for (let i = 0; i < numbers.length; i++) {
            var number= numbers[i]
            if (number < resultNumber) {
                resultNumber=number
            }
        }
        return resultNumber
    }

    if (target === 'avg') {
        resultNumber = 0;
        for (let i = 0; i < numbers.length; i++) {
            resultNumber+=numbers[i]
            // Es lo mismo que esto:
            //resultNumber = resultNumber + numbers[i]
        }
        return resultNumber/numbers.length
    }
}
    
    // TODO value

    // let copNumbers = numbers;
    // let copyTarget = target;
    // let valueReturn = 0
    // if (copyTarget === 'max'){
    //     valueReturn= Math.max(...copyNumbers) //(copyNumbers [0], copyNumbers [1]...)
    // }
    // else if (copyTarget === "min"){
    //     valueReturn = Math.min (...copyNumbers)        
    // }
    // else if (copyTarget === 'avg'){
    //     let values = 0
    //     copyNumbers.foreach(function(element){
    //         values += element;
    //     })
    //     valueReturn = values/copyNumbers.length
    // }
    // return valueReturn

// let copNumbers = numbers;
// let copyTarget = target;
// let valueReturn = 0
// let avgValue = 0
//     for (let i = 0 ; i < copyNumbers; i++){
//         if ((copyTarget === 'max')&& valueReturn < (copyNumbers[i])){
//             valueReturn = copyNumbers[i]
//         }else if ((copyTarget === 'min')&& valueReturn > (copyNumbers [i])) {
//             valueReturn=copyNumbers[i]
//         }else if ((copyTarget === "avg")){
//             avgValue+= (copyNumbers[i]/copyNumbers.length)
//             valueReturn = avgValue;
//         }
//     } 