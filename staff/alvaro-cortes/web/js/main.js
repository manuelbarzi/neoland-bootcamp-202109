var bananas = { name: 'Banana', quantity: 4, price: 2 }
var oranges = { name: 'Orange', quantity: 10, price: 2 }
var kiwis = { name: 'Kiwi', quantity: 2, price: 6 }

var frutas = [bananas, oranges, kiwis]

function createTable(array){
    var table = "<table><tr><th>Nombre</th><th>Cantidad</th><th>Precio</th><tr>"
    var total = 0;

    // Se crea la primera parte de la tabla con los titulos y los datos en el body del arreglo frutas //

    for(let i = 0; i < array.length; i++){
        table += "<td>" + array[i].name + "</td>" +
                 "<td>" + array[i].quantity + "</td>" +
                 "<td>" + array[i].price + "</td></tr>"
    }

    // Generamos la suma total //

    for(let i = 0; i < frutas.length; i++){
        total += frutas[i].price * frutas[i].quantity
    }
    table += "<tr><th>Total</th><td>" + total + "</td></tr>"

    // Por último retornamos la variable table y la cerramos con el tag </table> //

    return table + "</table>"
}

document.write(createTable(frutas))
