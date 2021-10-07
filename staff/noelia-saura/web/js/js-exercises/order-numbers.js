function orderNumbers(numbers, order) {
    //Number es tipo [](array) y order es de tipo string
    var copyNumbers=numbers;
    var copyOrder = order;
    var ordered = []
    //el [] que vamos a devolver en la función

    if (copyOrder === "asc") { //si ocurre esto hacemos esto
       ordered=copyNumbers.sort(function(a, b){return a -b})
    } else if (copyOrder ==='desc'){ //si no pero si ocurre esto hacemos esto
        ordered=copyNumbers.sort(function(a, b){return b -a})
    }else{//si no en un ultimo caso hacemos esto
        console.log("el parametro order debe ser 'asc' o 'desc' ")
        ordered=copyNumbers
    }
   
return ordered;
}
  // TODO implement me
// Debo devolver un array de numeros ordenados segun order
//de forma ascendendente o descendente segun el valor pasado 
//por el parametro order
