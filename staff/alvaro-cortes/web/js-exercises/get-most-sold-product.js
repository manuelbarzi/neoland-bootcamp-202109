function getMostSoldProducts(products) {
    var mostSoldProducts = []

    for(let i = 0; i < products.length; i++) {
        if (products[i]["quantity"] >= products[0]["quantity"]
        && products[i]["quantity"] >= products[1]["quantity"]
        && products[i]["quantity"] >= products[2]["quantity"]
        && products[i]["quantity"] >= products[3]["quantity"]
        && products[i]["quantity"] >= products[4]["quantity"]) {
        mostSoldProducts.push(products[i])
        }
    }
    return mostSoldProducts
}