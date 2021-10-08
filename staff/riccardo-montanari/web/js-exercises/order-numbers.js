function orderNumbers(numbers, order) {
    
    var copyNumber = numbers
    var copyOrder = order

    var ordered = []
    
    // TODO implement me


    if (copyOrder === 'asc') {

        numbers.sort(function(a, b) {
            return a - b;
          });
        
    }else if  ( copyOrder === 'desc') {


    }else {


    }




    return ordered
}