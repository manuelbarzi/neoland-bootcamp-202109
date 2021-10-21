function orderNumbers(numbers, order) {

    for (i = 0; i < numbers.length; i++) {

        if ( order === 'asc') {

            numbers.sort(function(a,b){
                return a - b})

        } else if ( order === 'desc') {

            numbers.sort(function(a,b){
                return b - a})   

        }

        return numbers;
}}