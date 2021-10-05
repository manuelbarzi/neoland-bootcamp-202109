let titoli =
    '<thead>' +
    '<tr>' +
        '<th>Nome</th>' +
        '<th>Quantitá KG</th>' +
        '<th>Prezzo KG</th>' +
    '</tr>' +
    '</thead>';

let articoli = [
    { nome: 'Pasta', quantitá: 3, prezzo: 7 },
    { nome: 'Carne', quantitá: 5, prezzo: 3 },
    { nome: 'frutta', quantitá: 2, prezzo: 8 },

]

let spesa = function(arr) {
    let cassette = '';

    for (let i = 0; i < arr.length; i++) {

        let scatola =
        '<tr>' +
        '<td>' + arr[i].nome + '</td>' +
        '<td>' + arr[i].quantitá + '</td>' +
        '<td>' + arr[i].prezzo + '</td>' +
        '</tr>';

        cassette = cassette + scatola;
        
    }

    return '<tbody>' + cassette + '</tbody>'

}



let totale = function(arr) {

    let prezzoKg = 0;

    for ( i=0; i<arr.length; i++ ) {
        let prezzo = arr[i].quantitá * arr[i].prezzo;
        prezzoKg = prezzoKg + prezzo
    }
    
    let footer =
    '<tr>' +
    '<td>Totale: ' + prezzoKg + ' euro</td>' +
    '</tr>';


    return '<tfoot>' + footer + '</tfoot>'

}

document.write( '<table>' + titoli + spesa(articoli) + totale(articoli) + '</table>' );
