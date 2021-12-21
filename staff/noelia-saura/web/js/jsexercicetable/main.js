var bananas = { name: 'Banana', quantity: 4, price: 2 }
var oranges = { name: 'Orange', quantity: 10, price: 2 }
var kiwis = { name: 'Kiwi', quantity: 2, price: 6 }
var productos= [bananas, oranges, kiwis];
var rows = "";
var createRows = function (arr){
    for(var i = 0; i < arr.length; i++){
        // arr[i]
    var row =
    "<tr>" + 
        "<td>" + arr[i].name + "</td>" + 
         "<td>" + arr[i].quantity + "</td>" + 
         "<td>" + arr[i].price + "</td>" + 
    "</tr>"
    ;
    rows = rows + row;
}
return "<tbody>"+ rows +"</tbody>"; 
}
var title =
"<tr>"+
    "<th>Producto</th>"+
    "<th>Cantidad</th>"+
    "<th>Precio</th>"+
    "</tr>"
;
var createFooter = function(arr){
    var totalPrice = 0
for (let i = 0; i < arr.length; i++) {
    var totalProductPrice = arr[i].quantity * arr[i].price;
    totalPrice = totalPrice + totalProductPrice;
}
var footer =
    "<tfoot>" +
        "<tr>" +
            "<td>total: "+totalPrice+" euros</td>"+
        "</tr>"+
    "</tfoot>"
;
return footer;
}
document.write("<table>" + title +createRows(productos)+createFooter(productos)+ "</table>")

//////////////////////


var bananas = { name: 'Banana', quantity: 4, price: 2 }
var oranges = { name: 'Orange', quantity: 10, price: 2 }
var kiwis = { name: 'Kiwi', quantity: 2, price: 6 }
var melons = { name: "melon", quantity: 1 ,price: 2}

var cart= [bananas, oranges, kiwis, melons];
var total= 0

var table = '<table class="table"><thead><tr><th>name</th><th>quantity</th><th>price</th></tr></thead><tbody>'

for (var i= 0; i < cart.length; i++) {
    var item = cart[i];

    total = total + item.quantity * item.price
    
    var rows= '<tr class="table__row"><td>' + item.name + '</td><td>' + item.quantity + '</td><td>' + item.price +'</td></tr>'
    
    table = table + rows
}

table = table + `</tbody>`

var foot = '<tfoot><tr><th colspan="2">total</th><td>" + total + "</td></tr></tfoot>'

table = table + foot +"</table>"

document.write(table)