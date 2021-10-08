function getValue(numbers, target) {
    // TODO value
    let result = numbers[0];

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        if ((target === 'max') && (numbers[i] >= result)) {
            result = numbers[i];

        } else if ((target === 'min') && (numbers[i] <= result)) {
            result = numbers[i];

        } else if (target === 'avg') {
            sum += numbers[i];
            result = sum / numbers.length; 

        } /* This code creates potential flaws. Ex: if a final else statement is added, the if statement and the first else ... if statement will jump out of the for loop before completing it, whenever numbers[i] doesn't meet the condition.
        
        else {
        console.log("Enter a correct target: 'max', 'min' or 'avg'");
        
        }*/
    }
    return result;

};
