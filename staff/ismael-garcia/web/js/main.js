// TODO build a <table> with headers in <thead> all items from cart and the total in the <tfoot>

var bananas = { name: 'Banana', quantity: 4, price: 2 }
var oranges = { name: 'Orange', quantity: 10, price: 2 }
var kiwis = { name: 'Kiwi', quantity: 2, price: 6 }

var cart = [bananas, oranges, kiwis]

var createRows = function(arr) {
    var rows= "";
    for(var i = 0; i < arr.length; i++) {
        // arr[i] primera vuelta bananas, segunda oranges, tercera kiwis
        var row =
            "<tr>" +
                "<td>" + arr[i].name + "</td>" +
                "<td>" + arr[i].quantity + "</td>" +
                "<td>" + arr[i].price + "</td>" +
            "</tr>"
        ;
        rows += row;
    }
    return "<tbody>"+rows+"</tbody>"; // Retornamos filas!!!!
}

var title = 
    "<thead>" +
        "<tr>" +
            "<th>Producto</th>" +
            "<th>Cantidad Kg</th>" +
            "<th>Precio Kg</th>" +
        "</tr>" +
    "</thead>"
;

var createFooter = function(arr) {
    var totalPrice = 0;
    for (let i = 0; i < arr.length; i++) {
        var totalProductPrice = arr[i].quantity * arr[i].price;
        
        totalPrice += totalProductPrice;
    }

    // Declaramos la variable y después la devolvemos
    var footer =
        "<tfoot>" +
            "<tr>" +
                "<td>total: "+totalPrice+" euros</td>" +
            "</tr>" +
        "</tfoot>"
    ;
    return footer;
}

document.write("<table>"+title+createRows(cart)+createFooter(cart)+"</table>")

