console.log("TEST getMostSoldProduct")

// CASE 1 //

var soldProducts = [
    { name: 'banana', quantity: 10 },
    { name: 'apple', quantity: 112 },
    { name: 'kiwi', quantity: 301 },
    { name: 'orange', quantity: 30 },
    { name: 'melon', quantity: 301 }
]

var res = getMostSoldProducts(soldProducts)

if (res instanceof Array
    && res.length === 2
    && res[0]["name"] === "kiwi"
    && res[1]["name"] === "melon")
    console.log('Test correct')
else
    console.error('Test failed')

// CASE 2 //

var soldProductsCars = [
    { name: 'tesla', quantity: 10 },
    { name: 'ford', quantity: 21 },
    { name: 'opel', quantity: 20 },
    { name: 'renault', quantity: 30 },
    { name: 'citröen', quantity: 10 }
]

var res = getMostSoldProducts(soldProductsCars)

if (res instanceof Array
    && res.length === 1
    && res[0]["name"] === "renault") {
        console.log("Test correct")
    } else {
        console.error("Test failed")
    }
    
// CASE 3 //


var soldProducts = [
    { name: 'socks', quantity: 100 },
    { name: 'pant', quantity: 21 },
    { name: 't-shirt', quantity: 100 },
    { name: 'shoes', quantity: 100 },
    { name: 'sneakers', quantity: 10 }
]

var res = getMostSoldProducts(soldProducts)

if (res instanceof Array
    && res.length === 3
    && res[0]["name"] === "socks"
    && res[1]["name"] === "t-shirt"
    && res[2]["name"] === "shoes")
    console.log('Test correct')
else
    console.error('Test failed')