var bananas = { name: 'Banana', quantity: 4, price: 2 }
var oranges = { name: 'Orange', quantity: 10, price: 2 }
var kiwis = { name: 'Kiwi', quantity: 2, price: 6 }

var cart = [bananas, oranges, kiwis]
var total = 0

debugger

for (var i = 0; i < cart.length; i++) { // i++ => i = i + 1
    var item = cart[i]

    total = total + item.quantity * item.price
}

console.log('total is', total)