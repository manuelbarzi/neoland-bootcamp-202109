// -----------------------------------------------------------------------------------------------------------------------------------------
let bananas = { name: 'Banana', quantity: 4, price: 2 }
let oranges = { name: 'Orange', quantity: 10, price: 2 }
let kiwis = { name: 'Kiwi', quantity: 2, price: 6 }
let melons = { name: 'Melon', quantity: 1, price: 2 }

let cart = [bananas, oranges, kiwis, melons]
let total = 0

let table = `
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
        `

for ( let i = 0; i < cart.length; i++ ) {
    let item = cart[i]

    total = total + item.quantity * item.price

    let row = `
        <tr>
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>${item.price} €</td>
        </tr>
        `

    table += row
}

table += `</tbody>`

let foot = `
    <tfoot>
        <tr>
            <td></td>
            <td>Total</td>
            <td>${total} €</td>
        </tr>
    </tfoot>`

table = table + foot + `</table>`

document.write(table)


// ---------------------------------------------------------------------------------------------------------------------------------------

let manzana = { name: "Manzana", quantity: 5, price: 2 }
let melon = { name: "Melón", quantity: 7, price: 1 }
let uvas = { name: "Uvas", quantity: 2, price: 6 }

let frutas = [ manzana, melon, uvas ]

let createRows = function(arr) {

    let rows = ``
    
    for(let i = 0; i < arr.length; i++) {
        let row =
            `
                <tr>
                    <td>${arr[i].name}</td>
                    <td>${arr[i].quantity}</td>
                    <td>${arr[i].price}</td>
                </tr>
            `
        rows += row;
    }
    
    return `<tbody>${rows}</tbody>`
}

let title = 
    `
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Precio</th>
            </tr>
        </thead>
    `

let createFooter = function(arr) {
    
    let totalPrice = 0

    for (let i = 0; i < arr.length; i++) {
        let totalProductPrice = arr[i].quantity * arr[i].price;
        
        totalPrice += totalProductPrice
    }

    let footer =
        `
            <tfoot>
                <tr>
                    <td></td>
                    <td>Total</td>
                    <td>${totalPrice} €</td>
                </tr>
            </tfoot>
        `
    
    return footer
}

document.write(` <table> ${title} ${ createRows (frutas) } ${ createFooter (frutas) } </table>`)