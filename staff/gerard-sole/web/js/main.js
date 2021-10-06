var manzana = {
    name: "Manzana",
    quantity: 5,
    price: 2
}
var melon = {
    name: "Melón",
    quantity: 7,
    price: 1
}
var uvas = {
    name: "Uvas",
    quantity: 2,
    price: 6
}
var melocoton = {
    name: "melocoton",
    quantity: 3,
    price: 2
}
var frutas = [manzana, melon, uvas, melocoton];
var createRows = function(arr) {
    var rows = "";
    for(var i = 0; i < arr.length; i++) {
        var row =
            "<tr>" +
                "<td>" + arr[i].name + "</td>" +
                "<td>" + arr[i].quantity + "</td>" +
                "<td>" + arr[i].price + "</td>" +
            "</tr>"
        ;
        
        rows += row;
    }
    return "<tbody>"+rows+"</tbody>";
}
var title = 
    "<thead>" +
        "<tr>" +
            "<th>Nombre</th>" +
            "<th>Cantidad en kilos</th>" +
            "<th>Precio de un kilo</th>" +
        "</tr>" +
    "</thead>"
;
var createFooter = function(arr) {
    var totalPrice = 0;
    for (let i = 0; i < arr.length; i++) {
        var totalProductPrice = arr[i].quantity * arr[i].price;
        totalPrice += totalProductPrice;
    }
    var footer =
        "<tfoot>" +
            "<tr>" +
                "<td>total: "+totalPrice+" euros</td>" +
            "</tr>" +
        "</tfoot>"
    ;
    return footer;
}
document.write("<table>"+title+createRows(frutas)+createFooter(frutas)+"</table>")