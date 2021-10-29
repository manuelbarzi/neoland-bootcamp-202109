function getValue(numbers, text){
    var total = 0;
    var result = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        var num = numbers[i];
        if(text === 'max' && num > result){
            result = num;
        }else if(text === 'min' && num < result){
            result = num;
        }
        total += numbers[i]; 
    }
    if(text === 'avg') result = total / numbers.length;

    return result
}