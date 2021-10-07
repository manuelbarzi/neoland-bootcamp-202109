function getMostSoldProducts(products) {
    var mostSoldProducts = [];

    // TODO implement me
    var higherQuantity = 0;
    
    var quantities = [];

    /*for (var quantity of products) {
        quantities.push(quantity);
    }*/
    for (var i = 0; i < products.length; i++) {
        quantities.push(products[i].quantity);
    }

    higherQuantity = Math.max.apply(null, quantities);

    var filtProducts = products.filter(product => product.quantity === higherQuantity);
    
    for (var i = 0; i < filtProducts.length; i++) {
        mostSoldProducts.push(filtProducts[i].name);
    }

    return mostSoldProducts;
}
