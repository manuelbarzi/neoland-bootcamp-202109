function countNumbers(values) {
    var totalPositives = 0
    var totalNegatives = 0
    var balance = 0

       for (let i = 0; i < values.length; i++) {
           const element = values[i];

           if ( values[i] > 0 ){
            totalPositives = totalPositives + values[i]
         } else {
             totalNegatives =totalNegatives + values[i]
         }
    }
           
 var result = [totalPositives, totalNegatives, balance]
} return result
    
