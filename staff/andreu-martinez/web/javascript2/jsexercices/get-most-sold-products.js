function getMostSoldProducts(products) {
    var mostSoldProducts = [];
    var max = 0;

    for (let i = 0; i < products.length; i++) {
        if(products[i].quantity > max){
            mostSoldProducts = [];
            mostSoldProducts.push(products[i]);
            max = products[i].quantity;
        }else if(products[i].quantity == max){
            mostSoldProducts.push(products[i]);
        }    
    }

    return mostSoldProducts;
}