let manzana = { nombre: 'Manzana', cantidad: 2, precio: 8 };

let solomillo  = { nombre: 'Solomillo', cantidad: 5, precio: 3};

let pasta  = { nombre: 'Pasta', cantidad: 3, precio: 7};

let compra = [manzana, solomillo, pasta];

let carrito = function(arr) {
    let cajas = '';

    for (let i = 0; i < arr.length; i++) {

        let caja =
        '<tr>' +
        '<td>' + arr[i].nombre + '</td>' +
        '<td>' + arr[i].cantidad + '</td>' +
        '<td>' + arr[i].precio + '</td>' +
        '</tr>';

        cajas = cajas + caja;
        
    }

    return '<tbody>' + cajas + '</tbody>'

}


let titulo =
    '<thead>' +
    '<tr>' +
        '<th>NOMBRE</th>' +
        '<th>CANTIDAD KG</th>' +
        '<th>PRECIO KG</th>' +
    '</tr>' +
    '</thead>';



let calculo = function(arr) {

    let precioTotal = 0;

    for ( let i = 0; i < arr.length; i++ ) {

        let totalProductoKg = arr[i].cantidad * arr[i].precio;

        precioTotal =  precioTotal + totalProductoKg;
    }

    let footer = 
    '<tr>' +
    '<td>Total: ' + precioTotal + ' euro</td>' +
    '</tr>'



    return '<tfoot>' + footer + '</tfoot>';
    
}


document.write( '<table>' + titulo + carrito(compra) + calculo(compra) + '</table>' );

