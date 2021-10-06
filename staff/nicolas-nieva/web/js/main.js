var oranges = {
    name: "Manzana",
    quantity: 10,
    price: 2
}
var banana = {
    name: "Banana",
    quantity: 4,
    price: 2
}
var kiwi = {
    name: "Kiwi",
    quantity: 2,
    price: 6
}

var frutas = [oranges, banana, kiwi];

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
            "<th>Kilos</th>" +
            "<th>Precio por kilo</th>" +
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
                "<td>Total: "+totalPrice+" euros</td>" +
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
document.write("<table class='border'>"+title+createRows(frutas)+createFooter(frutas)+"</table>")

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

var createTag = function(tag, content) {
    return '<' + tag + '>' + content + '</' + tag + '>'
}
var zapatos = {
    name: 'Zapatos',
    quantity: 9,
    price:20
}
var zapatillas = {
    name: 'Zapatillas', 
    quantity: 3, 
    price:24
}
var botas = {
    name: 'Botas', 
    quantity: 5, 
    price:50
}

var calzado = [zapatos, zapatillas, botas]

// Pasos a seguir 
// 1. Crear tabla directamente en HTML
// 2. analizar como empezar a deconstruir la tabla
// 3. Primero lo sencillo (generar una row)
// 4. generar el tbody
// 5. Utilizar la funcion createTag


    var rows = ''
    
    for (let i = 0; i < arr.length; i++) {
        var rows = createTag('table', arr[i])
        
        table = table + values.createTag('tr', arr[i] ) 
    
    }
    table = table + '</table>'

    return table
}
var table = createTable(calzado)
document.write(table)

