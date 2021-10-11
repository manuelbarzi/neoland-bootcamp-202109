// Solución manual
function getMostSoldProducts(products) {
  var mostSoldProducts = []
  var maxSold = 0;

  for (let i = 0; i < products.length; i++) {
      const element = products[i];
      if(maxSold < element.quantity)
          maxSold = element.quantity;
  }

  for (let i = 0; i < products.length; i++) {
      const element = products[i];
      if(maxSold === element.quantity)
          mostSoldProducts.push(element.name);
  }

  return mostSoldProducts
}

// Solución con Math.max() y forEach()

// function getMostSoldProducts(products) {
  
//     var mostSoldProducts = [];
//     var copyProducts = products;
//     var quantities = [];
//     var maxSold = 0;
//     copyProducts.forEach(e => {
//         quantities.push(e.quantity);
//     });
//     maxSold = Math.max(...quantities);    
//     copyProducts.forEach(e => {
//         if(maxSold === e.quantity)
//             mostSoldProducts.push(e.name);
//     });
//     return mostSoldProducts;
// }