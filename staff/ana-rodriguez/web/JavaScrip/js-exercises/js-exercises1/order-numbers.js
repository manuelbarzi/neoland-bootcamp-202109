function orderNumbers(numbers, order) {
   
    var ordered = []

    if ( order === "asc"){ 
        ordered= numbers.sort((a,b) => a-b)
    }

     else{   
         ordered = numbers.sort((a,b) => b-a) 
        
    }

    // TODO implement me

    return ordered
}