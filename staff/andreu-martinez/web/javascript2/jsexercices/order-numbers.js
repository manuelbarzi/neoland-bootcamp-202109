function orderNumbers(numbers, order) {
    var ordered = [];

    if(order == 'desc'){
        ordered = numbers.sort(function(a, b){return b-a});
        
    }else if(order == 'asc'){
        ordered = numbers.sort(function(a, b){return a-b});
    }else{
        console.log("Error al pasar el parámetro de orden")
    }

    return ordered;
}
