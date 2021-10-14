function orderNumbers(numbers, order) {
    var ordered = []
    
    var copyNum = numbers;
    var copyOrder = order;

if (copyOrder === 'asc') {
    ordered = copyNum.sort (function(a,b){
        return a - b;
    });
    
} else if (copyOrder ==='desc') {
    ordered = copyNum.sort (function(a,b){
        return b - a;
    });
}
else {
    console.log("El parametro order debe ser 'asc' o desc'")
    ordered = copyNum; 
}
    

    // // for (let i = 0; i < numbers.length; i++) {
    // //     var position = numbers.length - 1 - i;
    // //     ordered = ordered + copyNum[position]
        
    // }  
               

    console.log (ordered)

    return ordered
}

