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

var frutas = [manzana, melon, uvas];

var createRows = function(arr) { // Espera que le pasemos un array
    var rows = "";
    for(var i = 0; i < arr.length; i++) { // Esto es lo mismo que i = i + 1!!!!!!!!
       // arr[i] primera vuelta manzana, segunda melón tercera uvas
        var row =
            "<tr>" +
                "<td>" + arr[i].name + "</td>" +
                "<td>" + arr[i].quantity + "</td>" +
                "<td>" + arr[i].price + "</td>" +
            "</tr>"
        ;
        // rows = rows + row; Es lo mismo que lo de abajo!!!!!!
        rows += row;
    }
    return "<tbody>"+rows+"</tbody>"; // Reotrnamos filas!!!!
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
        // totalPrice = totalPrice + totalProductPrice; Es excatamente igual que lo de abajo!!!!!!
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

    // Directamente devolvemos el valor sin necesidad de pasar por la variable
    // return (
    //     "<tfoot>" +
    //         "<tr>" +
    //             "<td>total: "+totalPrice+" euros</td>" +
    //         "</tr>" +
    //     "</tfoot>"   
    // )
}

// document.write(title);
// document.write(createRows(frutas));
// document.write(createFooter(frutas));
document.write("<table>"+title+createRows(frutas)+createFooter(frutas)+"</table>")

// document.write(`
//     <table>
//     <thead>
        // <tr>
        //     <th>Nombre</th>
        //     <th>Cantidad en kilos</th>
        //     <th>Precio de un kilo</th>
        // </tr>
//     </thead>
//     <tbody>
//         <tr>
//             <td>Manzana</td>
//             <td>5</td>
//             <td>2</td>
//         </tr>
//         <tr>
//             <td>Melón</td>
//             <td>7</td>
//             <td>1</td>
//         </tr>
//     </tbody>
    // <tfoot>
    //     <tr>
    //         <td>total: 17 euros</td>
    //     </tr>
    // </tfoot>
//     </table>`
// )