var bananas = { name: 'Banana', quantity: 4, price: 2 }
var oranges = { name: 'Orange', quantity: 10, price: 2 }
var kiwis = { name: 'Kiwi', quantity: 2, price: 6 }

var frutas = [bananas, oranges, kiwis]
var total = 0

var createHeader = function header(){
    var header = "<table border='1'>"
                + "<tr>"
                + "<th>Nombre</th>"
                + "<th>Kilos</th>"
                + "<th>Precio/Kg</th>" 
                + "</tr>";   
    return header;
}

var createRows = function table(arr){
    var fila = "";

    for (var i = 0; i < arr.length; i++) {
        var fila = 
        "<tr>" 
               + "<td>" + arr[i].name + "</td>"
               + "<td>" + arr[i].quantity + "</td>"
               + "<td>" + arr[i].price + "</td>" 
               + "</tr>" + fila;
    }
    return fila;
}

var createFooter = function footer(arr){

    var unidades = 0;
    var total = 0;

    for (var i = 0; i < arr.length; i++){
        var unidades = unidades + arr[i].quantity;
        var total = total + arr[i].price * arr[i].quantity;
    }

    var footer = "<tfooter>"
                + "<tr>"
                + "<td></td>"
                + "<td>" + unidades + "</td>"
                + "<td>" + total + "</td>"
                + "</tr></table>";

    return footer;
}

document.write(createHeader());
document.write(createRows(frutas));
document.write(createFooter(frutas));


