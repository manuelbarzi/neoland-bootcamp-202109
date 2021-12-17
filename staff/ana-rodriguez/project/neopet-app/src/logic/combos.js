// TODO move all to english

function getLists(nameList, callback, queryString){
    const xhr = new XMLHttpRequest;

    let url = '/list/'+ nameList;
    url += queryString ? queryString : '';

    xhr.onload = function () {
        const {status, responseText} = xhr 

        if(status === 400) callback(new Error ('wrong credential'))
        else if(status === 401) callback(new Error ('username and/or password wrong'))
        else if(status === 404) callback(new Error('page not found'))
        else if(status === 200) callback(null,JSON.parse(responseText)) 
    };

    xhr.open ('GET', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();
}

export const getSpecies = function (callback){
    // getLists('species',callback);
    callback(null,[
        {
            "id": 0,
            "value": "Canina"
        }, {
            "id": 1,
            "value": "Felina"
        }, {
            "id": 2,
            "value": "Roedor"
        },  {
            "id": 3,
            "value": "Conejo"
        }, {
            "id":4,
            "value": "Huron"
        },{
            "id":5,
            "value": "Ave"
        }
    ]);
}

export const getRaceById = function (id, callback){
    // const queryString = '?specie='+id;
    // getLists ('razas', callback, queryString);
    const racesList = [
        {
            "id": 0,
            "specie": 0,
            "value": "Affenpinscher"
        }, {
            "id": 1,
            "specie": 0,
            "value": "Airedale Terrier"
        }, {
            "id": 2,
            "specie": 0,
            "value": "Akita Americano"
        }, {
            "id": 3,
            "specie": 0,
            "value": "Akita Inu"
        }, {
            "id": 4,
            "specie": 0,
            "value": "Alaskan Malamute"
        }, {
            "id": 5,
            "specie": 0,
            "value": "American Staffordshire Terrier"
        }, {
            "id": 6,
            "specie": 0,
            "value": "Antiguo perro de muestra danés"
        }, {
            "id": 7,
            "specie": 0,
            "value": "Azawakh"
        }, {
            "id": 8,
            "specie": 0,
            "value": "Azul de Gascuña"
        }, {
            "id": 9,
            "specie": 0,
            "value": "Basenji"
        }, {
            "id": 10,
            "specie": 0,
            "value": "Basset artesiano de Normandía"
        }, {
            "id": 11,
            "specie": 0,
            "value": "Basset de los Alpes"
        }, {
            "id": 12,
            "specie": 0,
            "value": "Basset Hound"
        }, {
            "id": 13,
            "specie": 0,
            "value": "Basset leonado de Bretaña"
        }, {
            "id": 14,
            "specie": 0,
            "value": "Beagle"
        }, {
            "id": 15,
            "specie": 0,
            "value": "Beagle-Harrier"
        }, {
            "id": 16,
            "specie": 0,
            "value": "Beauceron"
        }, {
            "id": 17,
            "specie": 0,
            "value": "Bedlington Terrier"
        }, {
            "id": 18,
            "specie": 0,
            "value": "Bergamasco"
        }, {
            "id": 19,
            "specie": 0,
            "value": "Bichón boloñés"
        }, {
            "id": 20,
            "specie": 0,
            "value": "Bichón frisé"
        }, {
            "id": 21,
            "specie": 0,
            "value": "Bichón Habanero"
        }, {
            "id": 22,
            "specie": 0,
            "value": "Bichón maltés"
        }, {
            "id": 23,
            "specie": 0,
            "value": "Billy"
        }, {
            "id": 24,
            "specie": 0,
            "value": "Black and Tan Coonhound"
        }, {
            "id": 25,
            "specie": 0,
            "value": "Bobtail"
        }, {
            "id": 26,
            "specie": 0,
            "value": "Boerboel"
        }, {
            "id": 27,
            "specie": 0,
            "value": "Border collie"
        }, {
            "id": 28,
            "specie": 0,
            "value": "Border Terrier"
        }, {
            "id": 29,
            "specie": 0,
            "value": "Borzoi"
        }, {
            "id": 30,
            "specie": 0,
            "value": "Boston terrier"
        }, {
            "id": 31,
            "specie": 0,
            "value": "Bóxer"
        }, {
            "id": 32,
            "specie": 0,
            "value": "Boyero de Appenzell"
        }, {
            "id": 33,
            "specie": 0,
            "value": "Boyero de Berna"
        }, {
            "id": 34,
            "specie": 0,
            "value": "Boyero de Entlebuch"
        }, {
            "id": 35,
            "specie": 0,
            "value": "Boyero de Flandes"
        }, {
            "id": 36,
            "specie": 0,
            "value": "Boyero de las Ardenas"
        }, {
            "id": 37,
            "specie": 0,
            "value": "Braco alemán"
        }, {
            "id": 38,
            "specie": 0,
            "value": "Braco alemán de pelo corto"
        }, {
            "id": 39,
            "specie": 0,
            "value": "Braco Alemán de Pelo Duro"
        }, {
            "id": 40,
            "specie": 0,
            "value": "Braco austriaco negro y fuego"
        }, {
            "id": 41,
            "specie": 0,
            "value": "Braco de Ariège"
        }, {
            "id": 42,
            "specie": 0,
            "value": "Braco de Auvernia"
        }, {
            "id": 43,
            "specie": 0,
            "value": "Braco de Borbón"
        }, {
            "id": 44,
            "specie": 0,
            "value": "Braco de Weimar"
        }, {
            "id": 45,
            "specie": 0,
            "value": "Braco eslovaco de pelo duro"
        }, {
            "id": 46,
            "specie": 0,
            "value": "Braco francés"
        }, {
            "id": 47,
            "specie": 0,
            "value": "Braco húngaro"
        }, {
            "id": 48,
            "specie": 0,
            "value": "Braco Italiano"
        }, {
            "id": 49,
            "specie": 0,
            "value": "Braco Saint-Germain"
        }, {
            "id": 50,
            "specie": 0,
            "value": "Briquet grifón vendeano"
        }, {
            "id": 51,
            "specie": 0,
            "value": "Broholmer"
        }, {
            "id": 52,
            "specie": 0,
            "value": "Buhund noruego"
        }, {
            "id": 53,
            "specie": 0,
            "value": "Bull Terrier"
        }, {
            "id": 54,
            "specie": 0,
            "value": "Bulldog Americano"
        }, {
            "id": 55,
            "specie": 0,
            "value": "Bulldog francés"
        }, {
            "id": 56,
            "specie": 0,
            "value": "Bulldog inglés"
        }, {
            "id": 57,
            "specie": 0,
            "value": "Bullmastiff"
        }, {
            "id": 58,
            "specie": 0,
            "value": "Cairn Terrier"
        }, {
            "id": 59,
            "specie": 0,
            "value": "Cane Corso"
        }, {
            "id": 60,
            "specie": 0,
            "value": "Caniche"
        }, {
            "id": 61,
            "specie": 0,
            "value": "Cavalier King Charles Spaniel"
        }, {
            "id": 62,
            "specie": 0,
            "value": "Cazador de alces noruego"
        }, {
            "id": 63,
            "specie": 0,
            "value": "Chihuahua"
        }, {
            "id": 64,
            "specie": 0,
            "value": "Chow Chow"
        }, {
            "id": 65,
            "specie": 0,
            "value": "Cirneco del Etna"
        }, {
            "id": 66,
            "specie": 0,
            "value": "Clumber Spaniel"
        }, {
            "id": 67,
            "specie": 0,
            "value": "Cobrador de pelo liso"
        }, {
            "id": 68,
            "specie": 0,
            "value": "Cobrador de pelo rizado"
        }, {
            "id": 69,
            "specie": 0,
            "value": "Cocker Spaniel americano"
        }, {
            "id": 70,
            "specie": 0,
            "value": "Cocker Spaniel inglés"
        }, {
            "id": 71,
            "specie": 0,
            "value": "Collie barbudo"
        }, {
            "id": 72,
            "specie": 0,
            "value": "Collie de pelo corto"
        }, {
            "id": 73,
            "specie": 0,
            "value": "Collie de pelo largo"
        }, {
            "id": 74,
            "specie": 0,
            "value": "Corgi galés de Pembroke"
        }, {
            "id": 75,
            "specie": 0,
            "value": "Cotón de Tulear"
        }, {
            "id": 76,
            "specie": 0,
            "value": "Crestado chino"
        }, {
            "id": 77,
            "specie": 0,
            "value": "Crestado rodesiano"
        }, {
            "id": 78,
            "specie": 0,
            "value": "Cursinu"
        }, {
            "id": 79,
            "specie": 0,
            "value": "Dálmata"
        }, {
            "id": 80,
            "specie": 0,
            "value": "Dandie Dinmont"
        }, {
            "id": 81,
            "specie": 0,
            "value": "Dóberman"
        }, {
            "id": 82,
            "specie": 0,
            "value": "Dogo argentino"
        }, {
            "id": 83,
            "specie": 0,
            "value": "Dogo de Burdeos"
        }, {
            "id": 84,
            "specie": 0,
            "value": "Dogo del Tíbet"
        }, {
            "id": 85,
            "specie": 0,
            "value": "Dogo mallorquín"
        }, {
            "id": 86,
            "specie": 0,
            "value": "Drever"
        }, {
            "id": 87,
            "specie": 0,
            "value": "Eurasier"
        }, {
            "id": 88,
            "specie": 0,
            "value": "Field Spaniel"
        }, {
            "id": 89,
            "specie": 0,
            "value": "Fila Brasileiro"
        }, {
            "id": 90,
            "specie": 0,
            "value": "Fila de San Miguel"
        }, {
            "id": 91,
            "specie": 0,
            "value": "Fox Terrier"
        }, {
            "id": 92,
            "specie": 0,
            "value": "Foxhound americano"
        }, {
            "id": 93,
            "specie": 0,
            "value": "Foxhound inglés"
        }, {
            "id": 94,
            "specie": 0,
            "value": "Galgo afgano"
        }, {
            "id": 95,
            "specie": 0,
            "value": "Galgo español"
        }, {
            "id": 96,
            "specie": 0,
            "value": "Galgo inglés"
        }, {
            "id": 97,
            "specie": 0,
            "value": "Galgo italiano"
        }, {
            "id": 98,
            "specie": 0,
            "value": "Galgo polaco"
        }, {
            "id": 99,
            "specie": 0,
            "value": "Gascon saintongeois"
        }, {
            "id": 100,
            "specie": 0,
            "value": "Golden Retriever"
        }, {
            "id": 101,
            "specie": 0,
            "value": "Gordon Setter"
        }, {
            "id": 102,
            "specie": 0,
            "value": "Gran basset grifón vendeano"
        }, {
            "id": 103,
            "specie": 0,
            "value": "Gran boyero suizo"
        }, {
            "id": 104,
            "specie": 0,
            "value": "Gran danés"
        }, {
            "id": 105,
            "specie": 0,
            "value": "Gran grifón vendeano"
        }, {
            "id": 106,
            "specie": 0,
            "value": "Gran Munsterlander"
        }, {
            "id": 107,
            "specie": 0,
            "value": "Gran sabueso anglo-francés blanco y naranja"
        }, {
            "id": 108,
            "specie": 0,
            "value": "Gran sabueso anglo-francés blanco y negro"
        }, {
            "id": 109,
            "specie": 0,
            "value": "Gran sabueso anglo-francés tricolor"
        }, {
            "id": 110,
            "specie": 0,
            "value": "Grifón de Bruselas"
        }, {
            "id": 111,
            "specie": 0,
            "value": "Grifón de muestra bohemio de pelo duro"
        }, {
            "id": 112,
            "specie": 0,
            "value": "Grifón de muestra de pelo duro"
        }, {
            "id": 113,
            "specie": 0,
            "value": "Grifón leonado de Bretaña"
        }, {
            "id": 114,
            "specie": 0,
            "value": "Grifón Nivernais"
        }, {
            "id": 115,
            "specie": 0,
            "value": "Harrier"
        }, {
            "id": 116,
            "specie": 0,
            "value": "Hokkaido"
        }, {
            "id": 117,
            "specie": 0,
            "value": "Hovawart"
        }, {
            "id": 118,
            "specie": 0,
            "value": "Husky siberiano"
        }, {
            "id": 119,
            "specie": 0,
            "value": "Jack Russell Terrier"
        }, {
            "id": 120,
            "specie": 0,
            "value": "Jämthund"
        }, {
            "id": 121,
            "specie": 0,
            "value": "Kai"
        }, {
            "id": 122,
            "specie": 0,
            "value": "Kelpie australiano"
        }, {
            "id": 123,
            "specie": 0,
            "value": "Kerry Blue Terrier"
        }, {
            "id": 124,
            "specie": 0,
            "value": "King Charles Spaniel"
        }, {
            "id": 125,
            "specie": 0,
            "value": "Kishu"
        }, {
            "id": 126,
            "specie": 0,
            "value": "Komondor"
        }, {
            "id": 127,
            "specie": 0,
            "value": "Kromfohrländer"
        }, {
            "id": 128,
            "specie": 0,
            "value": "Kuvasz"
        }, {
            "id": 129,
            "specie": 0,
            "value": "Labrador Retriever"
        }, {
            "id": 130,
            "specie": 0,
            "value": "Lagotto Romagnolo"
        }, {
            "id": 131,
            "specie": 0,
            "value": "Laika de Siberia occidental"
        }, {
            "id": 132,
            "specie": 0,
            "value": "Laika de Siberia oriental"
        }, {
            "id": 133,
            "specie": 0,
            "value": "Laika ruso europeo"
        }, {
            "id": 134,
            "specie": 0,
            "value": "Lakeland Terrier"
        }, {
            "id": 135,
            "specie": 0,
            "value": "Landseer"
        }, {
            "id": 136,
            "specie": 0,
            "value": "Lebrel escocés"
        }, {
            "id": 137,
            "specie": 0,
            "value": "Lebrel húngaro"
        }, {
            "id": 138,
            "specie": 0,
            "value": "Lebrel irlandés"
        }, {
            "id": 139,
            "specie": 0,
            "value": "Leonberger"
        }, {
            "id": 140,
            "specie": 0,
            "value": "Lhasa Apso"
        }, {
            "id": 141,
            "specie": 0,
            "value": "Lulú de Pomerania"
        }, {
            "id": 142,
            "specie": 0,
            "value": "Lundehund"
        }, {
            "id": 143,
            "specie": 0,
            "value": "Manchester Terrier"
        }, {
            "id": 144,
            "specie": 0,
            "value": "Mastín del Pirineo"
        }, {
            "id": 145,
            "specie": 0,
            "value": "Mastín español"
        }, {
            "id": 146,
            "specie": 0,
            "value": "Mastín inglés"
        }, {
            "id": 147,
            "specie": 0,
            "value": "Mastín napolitano"
        }, {
            "id": 148,
            "specie": 0,
            "value": "Mudi"
        }, {
            "id": 149,
            "specie": 0,
            "value": "Münsterländer pequeño"
        }, {
            "id": 150,
            "specie": 0,
            "value": "Otterhound"
        }, {
            "id": 151,
            "specie": 0,
            "value": "Papillón"
        }, {
            "id": 152,
            "specie": 0,
            "value": "Parson Russell Terrier"
        }, {
            "id": 153,
            "specie": 0,
            "value": "Pastor alemán"
        }, {
            "id": 154,
            "specie": 0,
            "value": "Pastor belga"
        }, {
            "id": 155,
            "specie": 0,
            "value": "Pastor Blanco Suizo"
        }, {
            "id": 156,
            "specie": 0,
            "value": "Pastor de Anatolia"
        }, {
            "id": 157,
            "specie": 0,
            "value": "Pastor de Bosnia-Herzegovina y Croacia"
        }, {
            "id": 158,
            "specie": 0,
            "value": "Pastor de Brie"
        }, {
            "id": 159,
            "specie": 0,
            "value": "Pastor de Karst"
        }, {
            "id": 160,
            "specie": 0,
            "value": "Pastor de las islas Shetland"
        }, {
            "id": 161,
            "specie": 0,
            "value": "Pastor de los Pirineos"
        }, {
            "id": 162,
            "specie": 0,
            "value": "Pastor de Maremma"
        }, {
            "id": 163,
            "specie": 0,
            "value": "Pastor de Picardía"
        }, {
            "id": 164,
            "specie": 0,
            "value": "Pastor de Tatra"
        }, {
            "id": 165,
            "specie": 0,
            "value": "Pastor del Cáucaso"
        }, {
            "id": 166,
            "specie": 0,
            "value": "Pastor eslovaco"
        }, {
            "id": 167,
            "specie": 0,
            "value": "Pastor finlandés de Laponia"
        }, {
            "id": 168,
            "specie": 0,
            "value": "Pastor ganadero australiano"
        }, {
            "id": 169,
            "specie": 0,
            "value": "Pastor holandés"
        }, {
            "id": 170,
            "specie": 0,
            "value": "Pastor islandés"
        }, {
            "id": 171,
            "specie": 0,
            "value": "Pastor lapón de Suecia"
        }, {
            "id": 172,
            "specie": 0,
            "value": "Pastor mallorquín"
        }, {
            "id": 173,
            "specie": 0,
            "value": "Pastor ovejero australiano"
        }, {
            "id": 174,
            "specie": 0,
            "value": "Pastor polaco de las llanuras"
        }, {
            "id": 175,
            "specie": 0,
            "value": "Pastor rumano de Mioritza"
        }, {
            "id": 176,
            "specie": 0,
            "value": "Pastor ucraniano"
        }, {
            "id": 177,
            "specie": 0,
            "value": "Pastor Yugoslavo"
        }, {
            "id": 178,
            "specie": 0,
            "value": "Pekinés"
        }, {
            "id": 179,
            "specie": 0,
            "value": "Pequeño Basset Grifón vendeano"
        }, {
            "id": 180,
            "specie": 0,
            "value": "Pequeño Brabantino"
        }, {
            "id": 181,
            "specie": 0,
            "value": "Pequeño perro león"
        }, {
            "id": 182,
            "specie": 0,
            "value": "Pequeño perro ruso"
        }, {
            "id": 183,
            "specie": 0,
            "value": "Pequeño sabueso de Suiza"
        }, {
            "id": 184,
            "specie": 0,
            "value": "Perdiguero alemán"
        }, {
            "id": 185,
            "specie": 0,
            "value": "Perdiguero de Burgos"
        }, {
            "id": 186,
            "specie": 0,
            "value": "Perdiguero de Drente"
        }, {
            "id": 187,
            "specie": 0,
            "value": "Perdiguero frisón"
        }, {
            "id": 188,
            "specie": 0,
            "value": "Perdiguero portugués"
        }, {
            "id": 189,
            "specie": 0,
            "value": "Perro de agua americano"
        }, {
            "id": 190,
            "specie": 0,
            "value": "Perro de agua español"
        }, {
            "id": 191,
            "specie": 0,
            "value": "Perro de agua francés"
        }, {
            "id": 192,
            "specie": 0,
            "value": "Perro de agua frisón"
        }, {
            "id": 193,
            "specie": 0,
            "value": "Perro de agua irlandés"
        }, {
            "id": 194,
            "specie": 0,
            "value": "Perro de agua portugués"
        }, {
            "id": 195,
            "specie": 0,
            "value": "Perro de Canaán"
        }, {
            "id": 196,
            "specie": 0,
            "value": "Perro de Castro Laboreiro"
        }, {
            "id": 197,
            "specie": 0,
            "value": "Perro de caza polaco"
        }, {
            "id": 198,
            "specie": 0,
            "value": "Perro de Chindo"
        }, {
            "id": 199,
            "specie": 0,
            "value": "Perro de Groenlandia"
        }, {
            "id": 200,
            "specie": 0,
            "value": "Perro de la Sierra de la Estrela"
        }, {
            "id": 201,
            "specie": 0,
            "value": "Perro de montaña de Formosa"
        }, {
            "id": 202,
            "specie": 0,
            "value": "Perro de montaña de los Pirineos"
        }, {
            "id": 203,
            "specie": 0,
            "value": "Perro de Montaña del Atlas"
        }, {
            "id": 204,
            "specie": 0,
            "value": "Perro de muestra alemán de pelo cerdoso"
        }, {
            "id": 205,
            "specie": 0,
            "value": "Perro de muestra alemán de pelo duro"
        }, {
            "id": 206,
            "specie": 0,
            "value": "Perro de osos de Carelia"
        }, {
            "id": 207,
            "specie": 0,
            "value": "Perro de San Huberto"
        }, {
            "id": 208,
            "specie": 0,
            "value": "Perro esquimal canadiense"
        }, {
            "id": 209,
            "specie": 0,
            "value": "Perro Finlandés de Laponia"
        }, {
            "id": 210,
            "specie": 0,
            "value": "Perro lobo checoslovaco"
        }, {
            "id": 211,
            "specie": 0,
            "value": "Perro lobo de Saarloos"
        }, {
            "id": 212,
            "specie": 0,
            "value": "Perro pastor catalán"
        }, {
            "id": 213,
            "specie": 0,
            "value": "Perro pastor croata"
        }, {
            "id": 214,
            "specie": 0,
            "value": "Perro pastor de Asia central"
        }, {
            "id": 215,
            "specie": 0,
            "value": "Perro pastor portugués"
        }, {
            "id": 216,
            "specie": 0,
            "value": "Perro sin pelo del Perú"
        }, {
            "id": 217,
            "specie": 0,
            "value": "Perro tejonero de Westfalia"
        }, {
            "id": 218,
            "specie": 0,
            "value": "Pharaoh Hound"
        }, {
            "id": 219,
            "specie": 0,
            "value": "Pinscher"
        }, {
            "id": 220,
            "specie": 0,
            "value": "Pinscher austríaco"
        }, {
            "id": 221,
            "specie": 0,
            "value": "Podenco canario"
        }, {
            "id": 222,
            "specie": 0,
            "value": "Podenco ibicenco"
        }, {
            "id": 223,
            "specie": 0,
            "value": "Podenco portugués"
        }, {
            "id": 224,
            "specie": 0,
            "value": "Pointer inglés"
        }, {
            "id": 225,
            "specie": 0,
            "value": "Poitevino"
        }, {
            "id": 226,
            "specie": 0,
            "value": "Porcelana"
        }, {
            "id": 227,
            "specie": 0,
            "value": "Presa Canario"
        }, {
            "id": 228,
            "specie": 0,
            "value": "Pudelpointer"
        }, {
            "id": 229,
            "specie": 0,
            "value": "Pug"
        }, {
            "id": 230,
            "specie": 0,
            "value": "Puli"
        }, {
            "id": 231,
            "specie": 0,
            "value": "Pumi"
        }, {
            "id": 232,
            "specie": 0,
            "value": "Rafeiro do Alentejo"
        }, {
            "id": 233,
            "specie": 0,
            "value": "Ratonero holandés"
        }, {
            "id": 234,
            "specie": 0,
            "value": "Retriever de Chesapeake"
        }, {
            "id": 235,
            "specie": 0,
            "value": "Retriever de Nueva Escocia"
        }, {
            "id": 236,
            "specie": 0,
            "value": "Ridgeback tailandés"
        }, {
            "id": 237,
            "specie": 0,
            "value": "Rottweiler"
        }, {
            "id": 238,
            "specie": 0,
            "value": "Sabueso anglo-francés de tamaño mediano"
        }, {
            "id": 239,
            "specie": 0,
            "value": "Sabueso artesiano"
        }, {
            "id": 240,
            "specie": 0,
            "value": "Sabueso bávaro de montaña"
        }, {
            "id": 241,
            "specie": 0,
            "value": "Sabueso de Bosnia de pelo cerdoso"
        }, {
            "id": 242,
            "specie": 0,
            "value": "Sabueso de Hamilton"
        }, {
            "id": 243,
            "specie": 0,
            "value": "Sabueso de Hannover"
        }, {
            "id": 244,
            "specie": 0,
            "value": "Sabueso de Hygen"
        }, {
            "id": 245,
            "specie": 0,
            "value": "Sabueso de Istria de pelo corto"
        }, {
            "id": 246,
            "specie": 0,
            "value": "Sabueso de Istria de pelo duro"
        }, {
            "id": 247,
            "specie": 0,
            "value": "Sabueso de montaña de Montenegro"
        }, {
            "id": 248,
            "specie": 0,
            "value": "Sabueso de Schiller"
        }, {
            "id": 249,
            "specie": 0,
            "value": "Sabueso de Småland"
        }, {
            "id": 250,
            "specie": 0,
            "value": "Sabueso del Ariège"
        }, {
            "id": 251,
            "specie": 0,
            "value": "Sabueso del Tirol"
        }, {
            "id": 252,
            "specie": 0,
            "value": "Sabueso del Valle de Save"
        }, {
            "id": 253,
            "specie": 0,
            "value": "Sabueso eslovaco"
        }, {
            "id": 254,
            "specie": 0,
            "value": "Sabueso español"
        }, {
            "id": 255,
            "specie": 0,
            "value": "Sabueso estirio de pelo áspero"
        }, {
            "id": 256,
            "specie": 0,
            "value": "Sabueso finlandés"
        }, {
            "id": 257,
            "specie": 0,
            "value": "Sabueso francés blanco y naranja"
        }, {
            "id": 258,
            "specie": 0,
            "value": "Sabueso francés blanco y negro"
        }, {
            "id": 259,
            "specie": 0,
            "value": "Sabueso francés tricolor"
        }, {
            "id": 260,
            "specie": 0,
            "value": "Sabueso Halden"
        }, {
            "id": 261,
            "specie": 0,
            "value": "Sabueso helénico"
        }, {
            "id": 262,
            "specie": 0,
            "value": "Sabueso italiano"
        }, {
            "id": 263,
            "specie": 0,
            "value": "Sabueso noruego"
        }, {
            "id": 264,
            "specie": 0,
            "value": "Sabueso polaco"
        }, {
            "id": 265,
            "specie": 0,
            "value": "Sabueso serbio"
        }, {
            "id": 266,
            "specie": 0,
            "value": "Sabueso suizo"
        }, {
            "id": 267,
            "specie": 0,
            "value": "Sabueso tricolor serbio"
        }, {
            "id": 268,
            "specie": 0,
            "value": "Saluki"
        }, {
            "id": 269,
            "specie": 0,
            "value": "Samoyedo"
        }, {
            "id": 270,
            "specie": 0,
            "value": "San Bernardo"
        }, {
            "id": 271,
            "specie": 0,
            "value": "Schapendoes neerlandés"
        }, {
            "id": 272,
            "specie": 0,
            "value": "Schipperke"
        }, {
            "id": 273,
            "specie": 0,
            "value": "Schnauzer"
        }, {
            "id": 274,
            "specie": 0,
            "value": "Sealyham terrier"
        }, {
            "id": 275,
            "specie": 0,
            "value": "Setter inglés"
        }, {
            "id": 276,
            "specie": 0,
            "value": "Setter irlandés"
        }, {
            "id": 277,
            "specie": 0,
            "value": "Setter irlandés rojo y blanco"
        }, {
            "id": 278,
            "specie": 0,
            "value": "Shar Pei"
        }, {
            "id": 279,
            "specie": 0,
            "value": "Shiba Inu"
        }, {
            "id": 280,
            "specie": 0,
            "value": "Shih Tzu"
        }, {
            "id": 281,
            "specie": 0,
            "value": "Shikoku Inu"
        }, {
            "id": 282,
            "specie": 0,
            "value": "Skye Terrier"
        }, {
            "id": 283,
            "specie": 0,
            "value": "Sloughi"
        }, {
            "id": 284,
            "specie": 0,
            "value": "Spaniel azul de Picardía"
        }, {
            "id": 285,
            "specie": 0,
            "value": "Spaniel bretón"
        }, {
            "id": 286,
            "specie": 0,
            "value": "Spaniel de Pont-Audemer"
        }, {
            "id": 287,
            "specie": 0,
            "value": "Spaniel francés"
        }, {
            "id": 288,
            "specie": 0,
            "value": "Spaniel holandés"
        }, {
            "id": 289,
            "specie": 0,
            "value": "Spaniel japonés"
        }, {
            "id": 290,
            "specie": 0,
            "value": "Spaniel picardo"
        }, {
            "id": 291,
            "specie": 0,
            "value": "Spaniel tibetano"
        }, {
            "id": 292,
            "specie": 0,
            "value": "Spinone italiano"
        }, {
            "id": 293,
            "specie": 0,
            "value": "Spitz de Norrbotten"
        }, {
            "id": 294,
            "specie": 0,
            "value": "Spitz finlandés"
        }, {
            "id": 295,
            "specie": 0,
            "value": "Spitz japonés"
        }, {
            "id": 296,
            "specie": 0,
            "value": "Springer spaniel galés"
        }, {
            "id": 297,
            "specie": 0,
            "value": "Springer Spaniel inglés"
        }, {
            "id": 298,
            "specie": 0,
            "value": "Staffordshire bull terrier"
        }, {
            "id": 299,
            "specie": 0,
            "value": "Sussex Spaniel"
        }, {
            "id": 300,
            "specie": 0,
            "value": "Teckel"
        }, {
            "id": 301,
            "specie": 0,
            "value": "Terranova"
        }, {
            "id": 302,
            "specie": 0,
            "value": "Terrier alemán"
        }, {
            "id": 303,
            "specie": 0,
            "value": "Terrier australiano"
        }, {
            "id": 304,
            "specie": 0,
            "value": "Terrier brasileño"
        }, {
            "id": 305,
            "specie": 0,
            "value": "Terrier checo"
        }, {
            "id": 306,
            "specie": 0,
            "value": "Terrier de Norfolk y Terrier de Norwich"
        }, {
            "id": 307,
            "specie": 0,
            "value": "Terrier escocés"
        }, {
            "id": 308,
            "specie": 0,
            "value": "Terrier galés"
        }, {
            "id": 309,
            "specie": 0,
            "value": "Terrier Glen de Imaal irlandés"
        }, {
            "id": 310,
            "specie": 0,
            "value": "Terrier inglés miniatura"
        }, {
            "id": 311,
            "specie": 0,
            "value": "Terrier irlandés"
        }, {
            "id": 312,
            "specie": 0,
            "value": "Terrier irlandés de pelo suave"
        }, {
            "id": 313,
            "specie": 0,
            "value": "Terrier japonés"
        }, {
            "id": 314,
            "specie": 0,
            "value": "Terrier ruso negro"
        }, {
            "id": 315,
            "specie": 0,
            "value": "Terrier tibetano"
        }, {
            "id": 316,
            "specie": 0,
            "value": "Tosa Inu"
        }, {
            "id": 317,
            "specie": 0,
            "value": "Vallhund sueco"
        }, {
            "id": 318,
            "specie": 0,
            "value": "Vizsla"
        }, {
            "id": 319,
            "specie": 0,
            "value": "Volpino italiano"
        }, {
            "id": 320,
            "specie": 0,
            "value": "Westie"
        }, {
            "id": 321,
            "specie": 0,
            "value": "Whippet"
        }, {
            "id": 322,
            "specie": 0,
            "value": "Xoloitzcuintle"
        }, {
            "id": 323,
            "specie": 0,
            "value": "Yorkshire Terrier"
        }, {
            "id": 324,
            "specie": 1,
            "value": "Abisinio"
        }, {
            "id": 325,
            "specie": 1,
            "value": "American Shorthair"
        }, {
            "id": 326,
            "specie": 1,
            "value": "American Wirehair"
        }, {
            "id": 327,
            "specie": 1,
            "value": "Angora turco"
        }, {
            "id": 328,
            "specie": 1,
            "value": "Azul ruso"
        }, {
            "id": 329,
            "specie": 1,
            "value": "Balinés"
        }, {
            "id": 330,
            "specie": 1,
            "value": "Bengala"
        }, {
            "id": 331,
            "specie": 1,
            "value": "Birmano"
        }, {
            "id": 332,
            "specie": 1,
            "value": "Bobtail Americano"
        }, {
            "id": 333,
            "specie": 1,
            "value": "Bobtail japonés"
        }, {
            "id": 334,
            "specie": 1,
            "value": "Bombay"
        }, {
            "id": 335,
            "specie": 1,
            "value": "Bosque de Noruega"
        }, {
            "id": 336,
            "specie": 1,
            "value": "British Longhair"
        }, {
            "id": 337,
            "specie": 1,
            "value": "British Shorthair"
        }, {
            "id": 338,
            "specie": 1,
            "value": "Burmilla"
        }, {
            "id": 339,
            "specie": 1,
            "value": "California Spangled"
        }, {
            "id": 340,
            "specie": 1,
            "value": "Californian Rex"
        }, {
            "id": 341,
            "specie": 1,
            "value": "Cartujo"
        }, {
            "id": 342,
            "specie": 1,
            "value": "Ceilán"
        }, {
            "id": 343,
            "specie": 1,
            "value": "Chausie"
        }, {
            "id": 344,
            "specie": 1,
            "value": "Cornish Rex"
        }, {
            "id": 345,
            "specie": 1,
            "value": "Curl americano"
        }, {
            "id": 346,
            "specie": 1,
            "value": "Cymric"
        }, {
            "id": 347,
            "specie": 1,
            "value": "Devon Rex"
        }, {
            "id": 348,
            "specie": 1,
            "value": "Don Sphynx"
        }, {
            "id": 349,
            "specie": 1,
            "value": "Exótico"
        }, {
            "id": 350,
            "specie": 1,
            "value": "Gato común"
        }, {
            "id": 351,
            "specie": 1,
            "value": "Gato común europeo"
        }, {
            "id": 352,
            "specie": 1,
            "value": "Gato esfinge"
        }, {
            "id": 353,
            "specie": 1,
            "value": "Gato Siberiano"
        }, {
            "id": 354,
            "specie": 1,
            "value": "Gato Van turco"
        }, {
            "id": 355,
            "specie": 1,
            "value": "German Rex"
        }, {
            "id": 356,
            "specie": 1,
            "value": "Habana Brown"
        }, {
            "id": 357,
            "specie": 1,
            "value": "Highland Fold y Highland Straight"
        }, {
            "id": 358,
            "specie": 1,
            "value": "Himalayo"
        }, {
            "id": 359,
            "specie": 1,
            "value": "Javanés"
        }, {
            "id": 360,
            "specie": 1,
            "value": "Khao Manee"
        }, {
            "id": 361,
            "specie": 1,
            "value": "Korat"
        }, {
            "id": 362,
            "specie": 1,
            "value": "LaPerm"
        }, {
            "id": 363,
            "specie": 1,
            "value": "Maine Coon"
        }, {
            "id": 364,
            "specie": 1,
            "value": "Manx"
        }, {
            "id": 365,
            "specie": 1,
            "value": "Mau egipcio"
        }, {
            "id": 366,
            "specie": 1,
            "value": "Munchkin"
        }, {
            "id": 367,
            "specie": 1,
            "value": "Nebelung"
        }, {
            "id": 368,
            "specie": 1,
            "value": "Ocicat"
        }, {
            "id": 369,
            "specie": 1,
            "value": "Oriental"
        }, {
            "id": 370,
            "specie": 1,
            "value": "Persa"
        }, {
            "id": 371,
            "specie": 1,
            "value": "Persa Chinchilla"
        }, {
            "id": 372,
            "specie": 1,
            "value": "Peterbald"
        }, {
            "id": 373,
            "specie": 1,
            "value": "Pixie Bob"
        }, {
            "id": 374,
            "specie": 1,
            "value": "Ragamuffin"
        }, {
            "id": 375,
            "specie": 1,
            "value": "Ragdoll"
        }, {
            "id": 376,
            "specie": 1,
            "value": "Safari"
        }, {
            "id": 377,
            "specie": 1,
            "value": "Sagrado de Birmania"
        }, {
            "id": 378,
            "specie": 1,
            "value": "Savannah"
        }, {
            "id": 379,
            "specie": 1,
            "value": "Scottish Fold"
        }, {
            "id": 380,
            "specie": 1,
            "value": "Selkirk Rex"
        }, {
            "id": 381,
            "specie": 1,
            "value": "Siamés"
        }, {
            "id": 382,
            "specie": 1,
            "value": "Siamés thai"
        }, {
            "id": 383,
            "specie": 1,
            "value": "Singapura"
        }, {
            "id": 384,
            "specie": 1,
            "value": "Snowshoe"
        }, {
            "id": 385,
            "specie": 1,
            "value": "Sokoke"
        }, {
            "id": 386,
            "specie": 1,
            "value": "Somalí"
        }, {
            "id": 387,
            "specie": 1,
            "value": "Tiffany"
        }, {
            "id": 388,
            "specie": 1,
            "value": "Tonkinés"
        }, {
            "id": 389,
            "specie": 1,
            "value": "Toyger"
        }, {
            "id": 390,
            "specie": 1,
            "value": "York Chocolate"
        }, {
            "id": 394,
            "specie": 2,
            "value": "Hamster"
        }, {
            "id": 395,
            "specie": 2,
            "value": "Chinchilla"
        }, {
            "id": 396,
            "specie": 2,
            "value": "Jerbo"
        }, {
            "id": 397,
            "specie": 2,
            "value": "Rata"
        }, {
            "id": 398,
            "specie": 2,
            "value": "Ratón"
        }, {
            "id": 399,
            "specie": 2,
            "value": "Ardilla"
        }, {
            "id": 400,
            "specie": 2,
            "value": "Cobaya"
        }, {
            "id": 401,
            "specie": 2,
            "value": "Degús"
        }, {
            "id": 402,
            "specie": 2,
            "value": "Lirón"
        }, {
            "id": 403,
            "specie": 3,
            "value": "Angora"
        }, {
            "id": 404,
            "specie": 3,
            "value": "Belier"
        }, {
            "id": 404,
            "specie": 3,
            "value": "Hotot"
        }, {
            "id": 405,
            "specie": 3,
            "value": "Holandes/toy"
        }, {
            "id": 404,
            "specie": 4,
            "value": "Hurón"
        }, {
            "id": 405,
            "specie": 5,
            "value": "Iguana"
        }, {
            "id": 406,
            "specie": 5,
            "value": "Camaleón"
        }, {
            "id": 407,
            "specie": 5,
            "value": "Geco"
        }, {
            "id": 408,
            "specie": 5,
            "value": "Tortuga"
        }, {
            "id": 409,
            "specie": 5,
            "value": "Serpiente"
        }, {
            "id": 410,
            "specie": 5,
            "value": "Rana"
        }, {
            "id": 411,
            "specie": 6,
            "value": "Agaporni Fisher"
        }, {
            "id": 412,
            "specie": 6,
            "value": "Agaporni Personata"
        }, {
            "id": 413,
            "specie": 6,
            "value": "Agaporni Roseicolli"
        }, {
            "id": 414,
            "specie": 6,
            "value": "Loro Yaco"
        }, {
            "id": 415,
            "specie": 6,
            "value": "Loro Guacamayo"
        }, {
            "id": 416,
            "specie": 6,
            "value": "Cacatua"
        }, {
            "id": 417,
            "specie": 6,
            "value": "Ninfa"
        }, {
            "id": 418,
            "specie": 6,
            "value": "Periquito"
        }, {
            "id": 419,
            "specie": 6,
            "value": "Diamante Mandarin"
        }, {
            "id": 420,
            "specie": 6,
            "value": "Canario"
        }, {
            "id": 421,
            "specie": 6,
            "value": "Gallina"
        }, {
            "id": 422,
            "specie": 7,
            "value": "Akhal-Teke"
        }, {
            "id": 423,
            "specie": 7,
            "value": "Apaloosa"
        }, {
            "id": 424,
            "specie": 7,
            "value": "AraApaloosa"
        }, {
            "id": 425,
            "specie": 7,
            "value": "Árabe"
        }, {
            "id": 426,
            "specie": 7,
            "value": "Árabe-portugués"
        }, {
            "id": 427,
            "specie": 7,
            "value": "Asturcón"
        }, {
            "id": 428,
            "specie": 7,
            "value": "Aveliñés"
        }, {
            "id": 429,
            "specie": 7,
            "value": "Azteca"
        }, {
            "id": 430,
            "specie": 7,
            "value": "Albino"
        }, {
            "id": 431,
            "specie": 7,
            "value": "Alter Real"
        }, {
            "id": 432,
            "specie": 7,
            "value": "AngloArgentino"
        }, {
            "id": 433,
            "specie": 7,
            "value": "Bardigiano"
        }, {
            "id": 434,
            "specie": 7,
            "value": "Bereber"
        }, {
            "id": 435,
            "specie": 7,
            "value": "Bretón"
        }, {
            "id": 436,
            "specie": 7,
            "value": "Buckskin"
        }, {
            "id": 437,
            "specie": 7,
            "value": "Budyonny"
        }, {
            "id": 438,
            "specie": 7,
            "value": "Basuto"
        }, {
            "id": 439,
            "specie": 7,
            "value": "Caballo Altái"
        }, {
            "id": 440,
            "specie": 7,
            "value": "Caballo andaluz"
        }, {
            "id": 441,
            "specie": 7,
            "value": "Caballo de las retuertas"
        }, {
            "id": 442,
            "specie": 7,
            "value": "Caballo de las Murgues"
        }, {
            "id": 443,
            "specie": 7,
            "value": "Caballo de Merens"
        }, {
            "id": 444,
            "specie": 7,
            "value": "Caballo de los Outer Banks"
        }, {
            "id": 445,
            "specie": 7,
            "value": "Caballo ibérico"
        }, {
            "id": 446,
            "specie": 7,
            "value": "Caballo de polo"
        }, {
            "id": 447,
            "specie": 7,
            "value": "Caballo de pura raza gallega"
        }, {
            "id": 448,
            "specie": 7,
            "value": "Caballo catalán"
        }, {
            "id": 449,
            "specie": 7,
            "value": "Caballo mallorquín"
        }, {
            "id": 450,
            "specie": 7,
            "value": "Caballo marismeño"
        }, {
            "id": 451,
            "specie": 7,
            "value": "Caballo Marwari"
        }, {
            "id": 452,
            "specie": 7,
            "value": "Caballo menorquín"
        }, {
            "id": 453,
            "specie": 7,
            "value": "Caballo morab"
        }, {
            "id": 454,
            "specie": 7,
            "value": "Chileno"
        }, {
            "id": 455,
            "specie": 7,
            "value": "Chilote"
        }, {
            "id": 456,
            "specie": 7,
            "value": "Criollo Colombiano"
        }, {
            "id": 457,
            "specie": 7,
            "value": "Caballo Costarricense de Paso"
        }, {
            "id": 458,
            "specie": 7,
            "value": "Caballo criollo"
        }, {
            "id": 459,
            "specie": 7,
            "value": "Camargués"
        }, {
            "id": 460,
            "specie": 7,
            "value": "Darashouri"
        }, {
            "id": 461,
            "specie": 7,
            "value": "Don"
        }, {
            "id": 462,
            "specie": 7,
            "value": "Dülmener Wildpferd"
        }, {
            "id": 463,
            "specie": 7,
            "value": "Falabella"
        }, {
            "id": 464,
            "specie": 7,
            "value": "Francés de silla"
        }, {
            "id": 465,
            "specie": 7,
            "value": "Freiberg"
        }, {
            "id": 466,
            "specie": 7,
            "value": "Frisón"
        }, {
            "id": 467,
            "specie": 7,
            "value": "Gelder"
        }, {
            "id": 468,
            "specie": 7,
            "value": "Gotland"
        }, {
            "id": 469,
            "specie": 7,
            "value": "Hackney"
        }, {
            "id": 470,
            "specie": 7,
            "value": "Haflinger"
        }, {
            "id": 471,
            "specie": 7,
            "value": "Hannoveriano"
        }, {
            "id": 472,
            "specie": 7,
            "value": "Holstein"
        }, {
            "id": 473,
            "specie": 7,
            "value": "Iberoamericano"
        }, {
            "id": 474,
            "specie": 7,
            "value": "Irish Cob"
        }, {
            "id": 475,
            "specie": 7,
            "value": "Irish Hunter"
        }, {
            "id": 476,
            "specie": 7,
            "value": "Islandés"
        }, {
            "id": 477,
            "specie": 7,
            "value": "Jaca navarra"
        }, {
            "id": 478,
            "specie": 7,
            "value": "Jomud"
        }, {
            "id": 479,
            "specie": 7,
            "value": "Karabakh"
        }, {
            "id": 480,
            "specie": 7,
            "value": "Kentucky mountain"
        }, {
            "id": 481,
            "specie": 7,
            "value": "Kustanair"
        }, {
            "id": 482,
            "specie": 7,
            "value": "Konik"
        }, {
            "id": 483,
            "specie": 7,
            "value": "Lipizzano"
        }, {
            "id": 484,
            "specie": 7,
            "value": "Lokai"
        }, {
            "id": 485,
            "specie": 7,
            "value": "Losino"
        }, {
            "id": 486,
            "specie": 7,
            "value": "Monchino"
        }, {
            "id": 487,
            "specie": 7,
            "value": "Mongol"
        }, {
            "id": 488,
            "specie": 7,
            "value": "Morab"
        }, {
            "id": 489,
            "specie": 7,
            "value": "Morgan Horse"
        }, {
            "id": 490,
            "specie": 7,
            "value": "Mustang"
        }, {
            "id": 491,
            "specie": 7,
            "value": "Nonius"
        }, {
            "id": 492,
            "specie": 7,
            "value": "Oldenburgues"
        }, {
            "id": 493,
            "specie": 7,
            "value": "Palomino"
        }, {
            "id": 494,
            "specie": 7,
            "value": "Pura Raza Paso Fino"
        }, {
            "id": 495,
            "specie": 7,
            "value": "Caballo Peruano de Paso (CPP)"
        }, {
            "id": 496,
            "specie": 7,
            "value": "Percherón"
        }, {
            "id": 497,
            "specie": 7,
            "value": "Piebald"
        }, {
            "id": 498,
            "specie": 7,
            "value": "Pinto"
        }, {
            "id": 499,
            "specie": 7,
            "value": "Pottoka"
        }, {
            "id": 500,
            "specie": 7,
            "value": "Petramo"
        }, {
            "id": 501,
            "specie": 7,
            "value": "Przewalski"
        }, {
            "id": 502,
            "specie": 7,
            "value": "Quarter Horse"
        }, {
            "id": 503,
            "specie": 7,
            "value": "Rocky Mountain Horse"
        }, {
            "id": 504,
            "specie": 7,
            "value": "Salernitano"
        }, {
            "id": 505,
            "specie": 7,
            "value": "San Fratelano"
        }, {
            "id": 506,
            "specie": 7,
            "value": "Poni de Shetland"
        }, {
            "id": 507,
            "specie": 7,
            "value": "Silla americano"
        }, {
            "id": 508,
            "specie": 7,
            "value": "Tennessee Walking"
        }, {
            "id": 509,
            "specie": 7,
            "value": "Tersk"
        }, {
            "id": 510,
            "specie": 7,
            "value": "Tinker"
        }, {
            "id": 511,
            "specie": 7,
            "value": "Torik"
        }, {
            "id": 512,
            "specie": 7,
            "value": "Trakehner"
        }, {
            "id": 513,
            "specie": 7,
            "value": "Ucraniano"
        }, {
            "id": 514,
            "specie": 7,
            "value": "Waler"
        },
        //Mestizos
        {
            "id": 515,
            "specie":0,
            "value":"Mestizo"
        },
        {
            "id": 515,
            "specie":1,
            "value":"Mestizo"
        },
        {
            "id": 515,
            "specie":2,
            "value":"Mestizo"
        },
        {
            "id": 515,
            "specie":3,
            "value":"Mestizo"
        },
        {
            "id": 515,
            "specie":4,
            "value":"Mestizo"
        },
        {
            "id": 515,
            "specie":5,
            "value":"Mestizo"
        },
        {
            "id": 515,
            "specie":6,
            "value":"Mestizo"
        },
        {
            "id": 515,
            "specie":7,
            "value":"Mestizo"
        },
    ];
    const result = racesList.filter((race)=>{
       return race.specie===id
    });

    callback(null,result);
}

export const getGenre = function (callback){
    // getLists ('genero',callback);
    callback(null,[
        {
            "id": "M",
            "value": "Macho"
        },{
            "id": "H",
            "value": "Hembra"
        }
    ]);
}

