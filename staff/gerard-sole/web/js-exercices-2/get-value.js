function getValue(numbers, target) {
   
    var max = 0
    var min = numbers[0] + 1
    var avg = 0
   
    if (target === 'max') {
       
        for (let i = 0; i < numbers.length; i++) {
           
            const number = numbers[i];
           if (number > max) {
               max = number
           }   
        }
       value = max
   } 
   else if (target === 'min') {
       for (let i = 0; i < numbers.length; i++) {
           const number = numbers[i];
           if (number < min) {
               min = number
           }
       }
       value = min
    }              
    else if (target === 'avg') {
        for (let i = 0; i < numbers.length; i++) {
            const number = numbers[i];
            avg = avg + number
        }
        value = avg / numbers.length
    }

   return value
    }


