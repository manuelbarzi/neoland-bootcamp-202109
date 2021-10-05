// var createTag = function(tag, value) {
//     return '<' + tag + '>' + value + '</' + tag + '>'
// }

// var createList = function(values) {
//     var list = '<ul>'

//     for (var i = 0; i < values.length; i++) {
//         var value = values[i]

//         list = list + createTag('li', value)
//     }

//     list = list + '</ul>'

//     return list
// }

// var students = ['Sergio', 'Nico', 'Adrian', 'Gerard', 'Riccardo', 'Xavier', 'Noelia']

// var list = createList(students)

// document.write(list)

// // TODO build a <table> with headers in <thead> all items from cart and the total in the <tfoot>

// var bananas = { name: 'Banana', quantity: 4, price: 2 }
// var oranges = { name: 'Orange', quantity: 10, price: 2 }
// var kiwis = { name: 'Kiwi', quantity: 2, price: 6 }

// var cart = [bananas, oranges, kiwis]
// var total = 0

// for (var i = 0; i < cart.length; i++) { // i++ => i = i + 1
//     var item = cart[i]

//     total = total + item.quantity * item.price
// }

// document.write('total is ', total)
// document.write('<table class="table"><tr><th>name</th></tr><tr><td>Pepito</td></tr></table>')




var manzana = {
    name: 'Manzana',
    quantity: 5,
    price: 2
}

var melón = {
    name: 'Melón',
    quantity: 7,
    price: 1
}

var uvas = {
    name: 'Uvas',
    quantity: 2,
    price: 6
}


var frutas = [manzana, melón, uvas]


var createRows = function(arr) {
    var rows = '';

    for ( var i=0; i < arr.length; i++ ) {

        var row =
        '<tr>' +
        '<td>' + arr[i].name + '</td>' +
        '<td>' + arr[i].quantity + '</td>' +
        '<td>' + arr[i].price + '</td>' +
        '</tr>';
        
        rows = rows + row;
    }
    return  '<tbody>' + rows +  '</tbody>';
}


var title =
        '<thead>' +
            '<tr>' +
                '<th>NOMBRE</th>' +
                '<th>CANTIDAD KG</th>' +
                '<th>PRECIO KG</th>' +
            '</tr>' +
        '</thead>';


var createFooter = function(arr) {

    var totalPrice = 0;
    for (let i = 0; i < arr.length; i++) {
        var totalProductPrice = arr[i].quantity * arr[i].price;
        totalPrice = totalPrice + totalProductPrice;
    }

    var footer =
        '<tr>' +
            '<td> Total: ' + totalPrice + ' euro </td>' +
        '</tr>'
        

return '<tfoot>' + footer + '</tfoot>';

}
document.write('<table>' + title + createRows(frutas) + createFooter(frutas) + '</table>'  );
