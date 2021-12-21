function getMostSoldProducts(products) {
    var mostSoldProducts = []
    var mostSoldPrice = 0
    for (var i = 0; i < products.length; i++) {
        
        if (mostSoldPrice<products[i].quantity) {
            mostSoldPrice = products[i].quantity
        }
    }
    for (var i = 0; i < products.length; i++) {
        if (mostSoldPrice===products[i].quantity) {
            mostSoldProducts.push(products[i].name)            
        }
        
    }
    
    return mostSoldProducts
}
    
        
    
    // TODO implement me

//     if (copyOrder === "asc") { //si ocurre esto hacemos esto
//     ordered=copyNumbers.sort(function(a, b){return a -b})
// } else if (copyOrder ==='desc'){ //si no pero si ocurre esto hacemos esto
//     ordered=copyNumbers.sort(function(a, b){return b -a})
// }else{//si no en un ultimo caso hacemos esto
//     console.log("el parametro order debe ser 'asc' o 'desc' ")
//     ordered=copyNumbers
// }
    