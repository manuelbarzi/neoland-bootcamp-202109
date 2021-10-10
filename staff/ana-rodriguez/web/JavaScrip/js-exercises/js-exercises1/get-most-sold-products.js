function getMostSoldProducts(products) {
    var mostSoldProducts = []
    var result = []

  mostSoldProducts = products.sort((a,b) => (b.quantity < a.quantity) ? 1 : -1);

  for (let i = mostSoldProducts.length-1; i >= 0; i--) {
    if (mostSoldProducts[i].quantity===mostSoldProducts[i-1].quantity) {
      result.push(mostSoldProducts[i].name);
    }else{
      result.push(mostSoldProducts[i].name);
      break;
    };
  }
  return result;
}


