
function getMostSoldProducts(arr) {
    let mostSoldProducts = []
    let mostSoldQuantity = 0

    for ( let i = 0; i < arr.length; i++ ) {
        
        if ( mostSoldQuantity < arr[i].quantity )
            mostSoldQuantity = arr[i].quantity    
    }

    for ( let i = 0; i < arr.length; i++ ) {
        if( mostSoldQuantity === arr[i].quantity )
            mostSoldProducts.push(arr[i].name)
    }
    
    return mostSoldProducts
}