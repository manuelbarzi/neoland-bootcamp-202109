function getListas(nombreLista, callback, queryString){
    const xhr = new XMLHttpRequest;

    let url = '/lista/'+ nombreLista;
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

export const getEspecies = function (callback){
    // getListas('especies',callback);
    callback(null,[
        {
            "id": 0,
            "valor": "Canina"
        }, {
            "id": 1,
            "valor": "Felina"
        }, {
            "id": 2,
            "valor": "Roedor"
        },  {
            "id": 3,
            "valor": "Conejo"
        }, {
            "id":4,
            "valor": "Huron"
        },{
            "id": 5,
            "valor": "Reptil"
        }, {
            "id": 6,
            "valor": "Ave"
        }, {
            "id": 7,
            "valor": "Equina"
        }, {
           "id": 8,
           "valor": "Bovina" 
        }, {
            "id": 9,
            "valor": "Ovina"
        }, {
            "id": 10,
            "valor": "Porcina"
        }
    ]);
}

export const getRazaById = function (id, callback){
    // const queryString = '?especie='+id;
    // getListas ('razas', callback, queryString);
    const razas = [
        {
            "id": 0,
            "especie": 0,
            "valor": "Affenpinscher"
        }, {
            "id": 1,
            "especie": 0,
            "valor": "Airedale Terrier"
        }, {
            "id": 2,
            "especie": 0,
            "valor": "Akita Americano"
        }, {
            "id": 3,
            "especie": 0,
            "valor": "Akita Inu"
        }, {
            "id": 4,
            "especie": 0,
            "valor": "Alaskan Malamute"
        }, {
            "id": 5,
            "especie": 0,
            "valor": "American Staffordshire Terrier"
        }, {
            "id": 6,
            "especie": 0,
            "valor": "Antiguo perro de muestra danés"
        }, {
            "id": 7,
            "especie": 0,
            "valor": "Azawakh"
        }, {
            "id": 8,
            "especie": 0,
            "valor": "Azul de Gascuña"
        }, {
            "id": 9,
            "especie": 0,
            "valor": "Basenji"
        }, {
            "id": 10,
            "especie": 0,
            "valor": "Basset artesiano de Normandía"
        }, {
            "id": 11,
            "especie": 0,
            "valor": "Basset de los Alpes"
        }, {
            "id": 12,
            "especie": 0,
            "valor": "Basset Hound"
        }, {
            "id": 13,
            "especie": 0,
            "valor": "Basset leonado de Bretaña"
        }, {
            "id": 14,
            "especie": 0,
            "valor": "Beagle"
        }, {
            "id": 15,
            "especie": 0,
            "valor": "Beagle-Harrier"
        }, {
            "id": 16,
            "especie": 0,
            "valor": "Beauceron"
        }, {
            "id": 17,
            "especie": 0,
            "valor": "Bedlington Terrier"
        }, {
            "id": 18,
            "especie": 0,
            "valor": "Bergamasco"
        }, {
            "id": 19,
            "especie": 0,
            "valor": "Bichón boloñés"
        }, {
            "id": 20,
            "especie": 0,
            "valor": "Bichón frisé"
        }, {
            "id": 21,
            "especie": 0,
            "valor": "Bichón Habanero"
        }, {
            "id": 22,
            "especie": 0,
            "valor": "Bichón maltés"
        }, {
            "id": 23,
            "especie": 0,
            "valor": "Billy"
        }, {
            "id": 24,
            "especie": 0,
            "valor": "Black and Tan Coonhound"
        }, {
            "id": 25,
            "especie": 0,
            "valor": "Bobtail"
        }, {
            "id": 26,
            "especie": 0,
            "valor": "Boerboel"
        }, {
            "id": 27,
            "especie": 0,
            "valor": "Border collie"
        }, {
            "id": 28,
            "especie": 0,
            "valor": "Border Terrier"
        }, {
            "id": 29,
            "especie": 0,
            "valor": "Borzoi"
        }, {
            "id": 30,
            "especie": 0,
            "valor": "Boston terrier"
        }, {
            "id": 31,
            "especie": 0,
            "valor": "Bóxer"
        }, {
            "id": 32,
            "especie": 0,
            "valor": "Boyero de Appenzell"
        }, {
            "id": 33,
            "especie": 0,
            "valor": "Boyero de Berna"
        }, {
            "id": 34,
            "especie": 0,
            "valor": "Boyero de Entlebuch"
        }, {
            "id": 35,
            "especie": 0,
            "valor": "Boyero de Flandes"
        }, {
            "id": 36,
            "especie": 0,
            "valor": "Boyero de las Ardenas"
        }, {
            "id": 37,
            "especie": 0,
            "valor": "Braco alemán"
        }, {
            "id": 38,
            "especie": 0,
            "valor": "Braco alemán de pelo corto"
        }, {
            "id": 39,
            "especie": 0,
            "valor": "Braco Alemán de Pelo Duro"
        }, {
            "id": 40,
            "especie": 0,
            "valor": "Braco austriaco negro y fuego"
        }, {
            "id": 41,
            "especie": 0,
            "valor": "Braco de Ariège"
        }, {
            "id": 42,
            "especie": 0,
            "valor": "Braco de Auvernia"
        }, {
            "id": 43,
            "especie": 0,
            "valor": "Braco de Borbón"
        }, {
            "id": 44,
            "especie": 0,
            "valor": "Braco de Weimar"
        }, {
            "id": 45,
            "especie": 0,
            "valor": "Braco eslovaco de pelo duro"
        }, {
            "id": 46,
            "especie": 0,
            "valor": "Braco francés"
        }, {
            "id": 47,
            "especie": 0,
            "valor": "Braco húngaro"
        }, {
            "id": 48,
            "especie": 0,
            "valor": "Braco Italiano"
        }, {
            "id": 49,
            "especie": 0,
            "valor": "Braco Saint-Germain"
        }, {
            "id": 50,
            "especie": 0,
            "valor": "Briquet grifón vendeano"
        }, {
            "id": 51,
            "especie": 0,
            "valor": "Broholmer"
        }, {
            "id": 52,
            "especie": 0,
            "valor": "Buhund noruego"
        }, {
            "id": 53,
            "especie": 0,
            "valor": "Bull Terrier"
        }, {
            "id": 54,
            "especie": 0,
            "valor": "Bulldog Americano"
        }, {
            "id": 55,
            "especie": 0,
            "valor": "Bulldog francés"
        }, {
            "id": 56,
            "especie": 0,
            "valor": "Bulldog inglés"
        }, {
            "id": 57,
            "especie": 0,
            "valor": "Bullmastiff"
        }, {
            "id": 58,
            "especie": 0,
            "valor": "Cairn Terrier"
        }, {
            "id": 59,
            "especie": 0,
            "valor": "Cane Corso"
        }, {
            "id": 60,
            "especie": 0,
            "valor": "Caniche"
        }, {
            "id": 61,
            "especie": 0,
            "valor": "Cavalier King Charles Spaniel"
        }, {
            "id": 62,
            "especie": 0,
            "valor": "Cazador de alces noruego"
        }, {
            "id": 63,
            "especie": 0,
            "valor": "Chihuahua"
        }, {
            "id": 64,
            "especie": 0,
            "valor": "Chow Chow"
        }, {
            "id": 65,
            "especie": 0,
            "valor": "Cirneco del Etna"
        }, {
            "id": 66,
            "especie": 0,
            "valor": "Clumber Spaniel"
        }, {
            "id": 67,
            "especie": 0,
            "valor": "Cobrador de pelo liso"
        }, {
            "id": 68,
            "especie": 0,
            "valor": "Cobrador de pelo rizado"
        }, {
            "id": 69,
            "especie": 0,
            "valor": "Cocker Spaniel americano"
        }, {
            "id": 70,
            "especie": 0,
            "valor": "Cocker Spaniel inglés"
        }, {
            "id": 71,
            "especie": 0,
            "valor": "Collie barbudo"
        }, {
            "id": 72,
            "especie": 0,
            "valor": "Collie de pelo corto"
        }, {
            "id": 73,
            "especie": 0,
            "valor": "Collie de pelo largo"
        }, {
            "id": 74,
            "especie": 0,
            "valor": "Corgi galés de Pembroke"
        }, {
            "id": 75,
            "especie": 0,
            "valor": "Cotón de Tulear"
        }, {
            "id": 76,
            "especie": 0,
            "valor": "Crestado chino"
        }, {
            "id": 77,
            "especie": 0,
            "valor": "Crestado rodesiano"
        }, {
            "id": 78,
            "especie": 0,
            "valor": "Cursinu"
        }, {
            "id": 79,
            "especie": 0,
            "valor": "Dálmata"
        }, {
            "id": 80,
            "especie": 0,
            "valor": "Dandie Dinmont"
        }, {
            "id": 81,
            "especie": 0,
            "valor": "Dóberman"
        }, {
            "id": 82,
            "especie": 0,
            "valor": "Dogo argentino"
        }, {
            "id": 83,
            "especie": 0,
            "valor": "Dogo de Burdeos"
        }, {
            "id": 84,
            "especie": 0,
            "valor": "Dogo del Tíbet"
        }, {
            "id": 85,
            "especie": 0,
            "valor": "Dogo mallorquín"
        }, {
            "id": 86,
            "especie": 0,
            "valor": "Drever"
        }, {
            "id": 87,
            "especie": 0,
            "valor": "Eurasier"
        }, {
            "id": 88,
            "especie": 0,
            "valor": "Field Spaniel"
        }, {
            "id": 89,
            "especie": 0,
            "valor": "Fila Brasileiro"
        }, {
            "id": 90,
            "especie": 0,
            "valor": "Fila de San Miguel"
        }, {
            "id": 91,
            "especie": 0,
            "valor": "Fox Terrier"
        }, {
            "id": 92,
            "especie": 0,
            "valor": "Foxhound americano"
        }, {
            "id": 93,
            "especie": 0,
            "valor": "Foxhound inglés"
        }, {
            "id": 94,
            "especie": 0,
            "valor": "Galgo afgano"
        }, {
            "id": 95,
            "especie": 0,
            "valor": "Galgo español"
        }, {
            "id": 96,
            "especie": 0,
            "valor": "Galgo inglés"
        }, {
            "id": 97,
            "especie": 0,
            "valor": "Galgo italiano"
        }, {
            "id": 98,
            "especie": 0,
            "valor": "Galgo polaco"
        }, {
            "id": 99,
            "especie": 0,
            "valor": "Gascon saintongeois"
        }, {
            "id": 100,
            "especie": 0,
            "valor": "Golden Retriever"
        }, {
            "id": 101,
            "especie": 0,
            "valor": "Gordon Setter"
        }, {
            "id": 102,
            "especie": 0,
            "valor": "Gran basset grifón vendeano"
        }, {
            "id": 103,
            "especie": 0,
            "valor": "Gran boyero suizo"
        }, {
            "id": 104,
            "especie": 0,
            "valor": "Gran danés"
        }, {
            "id": 105,
            "especie": 0,
            "valor": "Gran grifón vendeano"
        }, {
            "id": 106,
            "especie": 0,
            "valor": "Gran Munsterlander"
        }, {
            "id": 107,
            "especie": 0,
            "valor": "Gran sabueso anglo-francés blanco y naranja"
        }, {
            "id": 108,
            "especie": 0,
            "valor": "Gran sabueso anglo-francés blanco y negro"
        }, {
            "id": 109,
            "especie": 0,
            "valor": "Gran sabueso anglo-francés tricolor"
        }, {
            "id": 110,
            "especie": 0,
            "valor": "Grifón de Bruselas"
        }, {
            "id": 111,
            "especie": 0,
            "valor": "Grifón de muestra bohemio de pelo duro"
        }, {
            "id": 112,
            "especie": 0,
            "valor": "Grifón de muestra de pelo duro"
        }, {
            "id": 113,
            "especie": 0,
            "valor": "Grifón leonado de Bretaña"
        }, {
            "id": 114,
            "especie": 0,
            "valor": "Grifón Nivernais"
        }, {
            "id": 115,
            "especie": 0,
            "valor": "Harrier"
        }, {
            "id": 116,
            "especie": 0,
            "valor": "Hokkaido"
        }, {
            "id": 117,
            "especie": 0,
            "valor": "Hovawart"
        }, {
            "id": 118,
            "especie": 0,
            "valor": "Husky siberiano"
        }, {
            "id": 119,
            "especie": 0,
            "valor": "Jack Russell Terrier"
        }, {
            "id": 120,
            "especie": 0,
            "valor": "Jämthund"
        }, {
            "id": 121,
            "especie": 0,
            "valor": "Kai"
        }, {
            "id": 122,
            "especie": 0,
            "valor": "Kelpie australiano"
        }, {
            "id": 123,
            "especie": 0,
            "valor": "Kerry Blue Terrier"
        }, {
            "id": 124,
            "especie": 0,
            "valor": "King Charles Spaniel"
        }, {
            "id": 125,
            "especie": 0,
            "valor": "Kishu"
        }, {
            "id": 126,
            "especie": 0,
            "valor": "Komondor"
        }, {
            "id": 127,
            "especie": 0,
            "valor": "Kromfohrländer"
        }, {
            "id": 128,
            "especie": 0,
            "valor": "Kuvasz"
        }, {
            "id": 129,
            "especie": 0,
            "valor": "Labrador Retriever"
        }, {
            "id": 130,
            "especie": 0,
            "valor": "Lagotto Romagnolo"
        }, {
            "id": 131,
            "especie": 0,
            "valor": "Laika de Siberia occidental"
        }, {
            "id": 132,
            "especie": 0,
            "valor": "Laika de Siberia oriental"
        }, {
            "id": 133,
            "especie": 0,
            "valor": "Laika ruso europeo"
        }, {
            "id": 134,
            "especie": 0,
            "valor": "Lakeland Terrier"
        }, {
            "id": 135,
            "especie": 0,
            "valor": "Landseer"
        }, {
            "id": 136,
            "especie": 0,
            "valor": "Lebrel escocés"
        }, {
            "id": 137,
            "especie": 0,
            "valor": "Lebrel húngaro"
        }, {
            "id": 138,
            "especie": 0,
            "valor": "Lebrel irlandés"
        }, {
            "id": 139,
            "especie": 0,
            "valor": "Leonberger"
        }, {
            "id": 140,
            "especie": 0,
            "valor": "Lhasa Apso"
        }, {
            "id": 141,
            "especie": 0,
            "valor": "Lulú de Pomerania"
        }, {
            "id": 142,
            "especie": 0,
            "valor": "Lundehund"
        }, {
            "id": 143,
            "especie": 0,
            "valor": "Manchester Terrier"
        }, {
            "id": 144,
            "especie": 0,
            "valor": "Mastín del Pirineo"
        }, {
            "id": 145,
            "especie": 0,
            "valor": "Mastín español"
        }, {
            "id": 146,
            "especie": 0,
            "valor": "Mastín inglés"
        }, {
            "id": 147,
            "especie": 0,
            "valor": "Mastín napolitano"
        }, {
            "id": 148,
            "especie": 0,
            "valor": "Mudi"
        }, {
            "id": 149,
            "especie": 0,
            "valor": "Münsterländer pequeño"
        }, {
            "id": 150,
            "especie": 0,
            "valor": "Otterhound"
        }, {
            "id": 151,
            "especie": 0,
            "valor": "Papillón"
        }, {
            "id": 152,
            "especie": 0,
            "valor": "Parson Russell Terrier"
        }, {
            "id": 153,
            "especie": 0,
            "valor": "Pastor alemán"
        }, {
            "id": 154,
            "especie": 0,
            "valor": "Pastor belga"
        }, {
            "id": 155,
            "especie": 0,
            "valor": "Pastor Blanco Suizo"
        }, {
            "id": 156,
            "especie": 0,
            "valor": "Pastor de Anatolia"
        }, {
            "id": 157,
            "especie": 0,
            "valor": "Pastor de Bosnia-Herzegovina y Croacia"
        }, {
            "id": 158,
            "especie": 0,
            "valor": "Pastor de Brie"
        }, {
            "id": 159,
            "especie": 0,
            "valor": "Pastor de Karst"
        }, {
            "id": 160,
            "especie": 0,
            "valor": "Pastor de las islas Shetland"
        }, {
            "id": 161,
            "especie": 0,
            "valor": "Pastor de los Pirineos"
        }, {
            "id": 162,
            "especie": 0,
            "valor": "Pastor de Maremma"
        }, {
            "id": 163,
            "especie": 0,
            "valor": "Pastor de Picardía"
        }, {
            "id": 164,
            "especie": 0,
            "valor": "Pastor de Tatra"
        }, {
            "id": 165,
            "especie": 0,
            "valor": "Pastor del Cáucaso"
        }, {
            "id": 166,
            "especie": 0,
            "valor": "Pastor eslovaco"
        }, {
            "id": 167,
            "especie": 0,
            "valor": "Pastor finlandés de Laponia"
        }, {
            "id": 168,
            "especie": 0,
            "valor": "Pastor ganadero australiano"
        }, {
            "id": 169,
            "especie": 0,
            "valor": "Pastor holandés"
        }, {
            "id": 170,
            "especie": 0,
            "valor": "Pastor islandés"
        }, {
            "id": 171,
            "especie": 0,
            "valor": "Pastor lapón de Suecia"
        }, {
            "id": 172,
            "especie": 0,
            "valor": "Pastor mallorquín"
        }, {
            "id": 173,
            "especie": 0,
            "valor": "Pastor ovejero australiano"
        }, {
            "id": 174,
            "especie": 0,
            "valor": "Pastor polaco de las llanuras"
        }, {
            "id": 175,
            "especie": 0,
            "valor": "Pastor rumano de Mioritza"
        }, {
            "id": 176,
            "especie": 0,
            "valor": "Pastor ucraniano"
        }, {
            "id": 177,
            "especie": 0,
            "valor": "Pastor Yugoslavo"
        }, {
            "id": 178,
            "especie": 0,
            "valor": "Pekinés"
        }, {
            "id": 179,
            "especie": 0,
            "valor": "Pequeño Basset Grifón vendeano"
        }, {
            "id": 180,
            "especie": 0,
            "valor": "Pequeño Brabantino"
        }, {
            "id": 181,
            "especie": 0,
            "valor": "Pequeño perro león"
        }, {
            "id": 182,
            "especie": 0,
            "valor": "Pequeño perro ruso"
        }, {
            "id": 183,
            "especie": 0,
            "valor": "Pequeño sabueso de Suiza"
        }, {
            "id": 184,
            "especie": 0,
            "valor": "Perdiguero alemán"
        }, {
            "id": 185,
            "especie": 0,
            "valor": "Perdiguero de Burgos"
        }, {
            "id": 186,
            "especie": 0,
            "valor": "Perdiguero de Drente"
        }, {
            "id": 187,
            "especie": 0,
            "valor": "Perdiguero frisón"
        }, {
            "id": 188,
            "especie": 0,
            "valor": "Perdiguero portugués"
        }, {
            "id": 189,
            "especie": 0,
            "valor": "Perro de agua americano"
        }, {
            "id": 190,
            "especie": 0,
            "valor": "Perro de agua español"
        }, {
            "id": 191,
            "especie": 0,
            "valor": "Perro de agua francés"
        }, {
            "id": 192,
            "especie": 0,
            "valor": "Perro de agua frisón"
        }, {
            "id": 193,
            "especie": 0,
            "valor": "Perro de agua irlandés"
        }, {
            "id": 194,
            "especie": 0,
            "valor": "Perro de agua portugués"
        }, {
            "id": 195,
            "especie": 0,
            "valor": "Perro de Canaán"
        }, {
            "id": 196,
            "especie": 0,
            "valor": "Perro de Castro Laboreiro"
        }, {
            "id": 197,
            "especie": 0,
            "valor": "Perro de caza polaco"
        }, {
            "id": 198,
            "especie": 0,
            "valor": "Perro de Chindo"
        }, {
            "id": 199,
            "especie": 0,
            "valor": "Perro de Groenlandia"
        }, {
            "id": 200,
            "especie": 0,
            "valor": "Perro de la Sierra de la Estrela"
        }, {
            "id": 201,
            "especie": 0,
            "valor": "Perro de montaña de Formosa"
        }, {
            "id": 202,
            "especie": 0,
            "valor": "Perro de montaña de los Pirineos"
        }, {
            "id": 203,
            "especie": 0,
            "valor": "Perro de Montaña del Atlas"
        }, {
            "id": 204,
            "especie": 0,
            "valor": "Perro de muestra alemán de pelo cerdoso"
        }, {
            "id": 205,
            "especie": 0,
            "valor": "Perro de muestra alemán de pelo duro"
        }, {
            "id": 206,
            "especie": 0,
            "valor": "Perro de osos de Carelia"
        }, {
            "id": 207,
            "especie": 0,
            "valor": "Perro de San Huberto"
        }, {
            "id": 208,
            "especie": 0,
            "valor": "Perro esquimal canadiense"
        }, {
            "id": 209,
            "especie": 0,
            "valor": "Perro Finlandés de Laponia"
        }, {
            "id": 210,
            "especie": 0,
            "valor": "Perro lobo checoslovaco"
        }, {
            "id": 211,
            "especie": 0,
            "valor": "Perro lobo de Saarloos"
        }, {
            "id": 212,
            "especie": 0,
            "valor": "Perro pastor catalán"
        }, {
            "id": 213,
            "especie": 0,
            "valor": "Perro pastor croata"
        }, {
            "id": 214,
            "especie": 0,
            "valor": "Perro pastor de Asia central"
        }, {
            "id": 215,
            "especie": 0,
            "valor": "Perro pastor portugués"
        }, {
            "id": 216,
            "especie": 0,
            "valor": "Perro sin pelo del Perú"
        }, {
            "id": 217,
            "especie": 0,
            "valor": "Perro tejonero de Westfalia"
        }, {
            "id": 218,
            "especie": 0,
            "valor": "Pharaoh Hound"
        }, {
            "id": 219,
            "especie": 0,
            "valor": "Pinscher"
        }, {
            "id": 220,
            "especie": 0,
            "valor": "Pinscher austríaco"
        }, {
            "id": 221,
            "especie": 0,
            "valor": "Podenco canario"
        }, {
            "id": 222,
            "especie": 0,
            "valor": "Podenco ibicenco"
        }, {
            "id": 223,
            "especie": 0,
            "valor": "Podenco portugués"
        }, {
            "id": 224,
            "especie": 0,
            "valor": "Pointer inglés"
        }, {
            "id": 225,
            "especie": 0,
            "valor": "Poitevino"
        }, {
            "id": 226,
            "especie": 0,
            "valor": "Porcelana"
        }, {
            "id": 227,
            "especie": 0,
            "valor": "Presa Canario"
        }, {
            "id": 228,
            "especie": 0,
            "valor": "Pudelpointer"
        }, {
            "id": 229,
            "especie": 0,
            "valor": "Pug"
        }, {
            "id": 230,
            "especie": 0,
            "valor": "Puli"
        }, {
            "id": 231,
            "especie": 0,
            "valor": "Pumi"
        }, {
            "id": 232,
            "especie": 0,
            "valor": "Rafeiro do Alentejo"
        }, {
            "id": 233,
            "especie": 0,
            "valor": "Ratonero holandés"
        }, {
            "id": 234,
            "especie": 0,
            "valor": "Retriever de Chesapeake"
        }, {
            "id": 235,
            "especie": 0,
            "valor": "Retriever de Nueva Escocia"
        }, {
            "id": 236,
            "especie": 0,
            "valor": "Ridgeback tailandés"
        }, {
            "id": 237,
            "especie": 0,
            "valor": "Rottweiler"
        }, {
            "id": 238,
            "especie": 0,
            "valor": "Sabueso anglo-francés de tamaño mediano"
        }, {
            "id": 239,
            "especie": 0,
            "valor": "Sabueso artesiano"
        }, {
            "id": 240,
            "especie": 0,
            "valor": "Sabueso bávaro de montaña"
        }, {
            "id": 241,
            "especie": 0,
            "valor": "Sabueso de Bosnia de pelo cerdoso"
        }, {
            "id": 242,
            "especie": 0,
            "valor": "Sabueso de Hamilton"
        }, {
            "id": 243,
            "especie": 0,
            "valor": "Sabueso de Hannover"
        }, {
            "id": 244,
            "especie": 0,
            "valor": "Sabueso de Hygen"
        }, {
            "id": 245,
            "especie": 0,
            "valor": "Sabueso de Istria de pelo corto"
        }, {
            "id": 246,
            "especie": 0,
            "valor": "Sabueso de Istria de pelo duro"
        }, {
            "id": 247,
            "especie": 0,
            "valor": "Sabueso de montaña de Montenegro"
        }, {
            "id": 248,
            "especie": 0,
            "valor": "Sabueso de Schiller"
        }, {
            "id": 249,
            "especie": 0,
            "valor": "Sabueso de Småland"
        }, {
            "id": 250,
            "especie": 0,
            "valor": "Sabueso del Ariège"
        }, {
            "id": 251,
            "especie": 0,
            "valor": "Sabueso del Tirol"
        }, {
            "id": 252,
            "especie": 0,
            "valor": "Sabueso del Valle de Save"
        }, {
            "id": 253,
            "especie": 0,
            "valor": "Sabueso eslovaco"
        }, {
            "id": 254,
            "especie": 0,
            "valor": "Sabueso español"
        }, {
            "id": 255,
            "especie": 0,
            "valor": "Sabueso estirio de pelo áspero"
        }, {
            "id": 256,
            "especie": 0,
            "valor": "Sabueso finlandés"
        }, {
            "id": 257,
            "especie": 0,
            "valor": "Sabueso francés blanco y naranja"
        }, {
            "id": 258,
            "especie": 0,
            "valor": "Sabueso francés blanco y negro"
        }, {
            "id": 259,
            "especie": 0,
            "valor": "Sabueso francés tricolor"
        }, {
            "id": 260,
            "especie": 0,
            "valor": "Sabueso Halden"
        }, {
            "id": 261,
            "especie": 0,
            "valor": "Sabueso helénico"
        }, {
            "id": 262,
            "especie": 0,
            "valor": "Sabueso italiano"
        }, {
            "id": 263,
            "especie": 0,
            "valor": "Sabueso noruego"
        }, {
            "id": 264,
            "especie": 0,
            "valor": "Sabueso polaco"
        }, {
            "id": 265,
            "especie": 0,
            "valor": "Sabueso serbio"
        }, {
            "id": 266,
            "especie": 0,
            "valor": "Sabueso suizo"
        }, {
            "id": 267,
            "especie": 0,
            "valor": "Sabueso tricolor serbio"
        }, {
            "id": 268,
            "especie": 0,
            "valor": "Saluki"
        }, {
            "id": 269,
            "especie": 0,
            "valor": "Samoyedo"
        }, {
            "id": 270,
            "especie": 0,
            "valor": "San Bernardo"
        }, {
            "id": 271,
            "especie": 0,
            "valor": "Schapendoes neerlandés"
        }, {
            "id": 272,
            "especie": 0,
            "valor": "Schipperke"
        }, {
            "id": 273,
            "especie": 0,
            "valor": "Schnauzer"
        }, {
            "id": 274,
            "especie": 0,
            "valor": "Sealyham terrier"
        }, {
            "id": 275,
            "especie": 0,
            "valor": "Setter inglés"
        }, {
            "id": 276,
            "especie": 0,
            "valor": "Setter irlandés"
        }, {
            "id": 277,
            "especie": 0,
            "valor": "Setter irlandés rojo y blanco"
        }, {
            "id": 278,
            "especie": 0,
            "valor": "Shar Pei"
        }, {
            "id": 279,
            "especie": 0,
            "valor": "Shiba Inu"
        }, {
            "id": 280,
            "especie": 0,
            "valor": "Shih Tzu"
        }, {
            "id": 281,
            "especie": 0,
            "valor": "Shikoku Inu"
        }, {
            "id": 282,
            "especie": 0,
            "valor": "Skye Terrier"
        }, {
            "id": 283,
            "especie": 0,
            "valor": "Sloughi"
        }, {
            "id": 284,
            "especie": 0,
            "valor": "Spaniel azul de Picardía"
        }, {
            "id": 285,
            "especie": 0,
            "valor": "Spaniel bretón"
        }, {
            "id": 286,
            "especie": 0,
            "valor": "Spaniel de Pont-Audemer"
        }, {
            "id": 287,
            "especie": 0,
            "valor": "Spaniel francés"
        }, {
            "id": 288,
            "especie": 0,
            "valor": "Spaniel holandés"
        }, {
            "id": 289,
            "especie": 0,
            "valor": "Spaniel japonés"
        }, {
            "id": 290,
            "especie": 0,
            "valor": "Spaniel picardo"
        }, {
            "id": 291,
            "especie": 0,
            "valor": "Spaniel tibetano"
        }, {
            "id": 292,
            "especie": 0,
            "valor": "Spinone italiano"
        }, {
            "id": 293,
            "especie": 0,
            "valor": "Spitz de Norrbotten"
        }, {
            "id": 294,
            "especie": 0,
            "valor": "Spitz finlandés"
        }, {
            "id": 295,
            "especie": 0,
            "valor": "Spitz japonés"
        }, {
            "id": 296,
            "especie": 0,
            "valor": "Springer spaniel galés"
        }, {
            "id": 297,
            "especie": 0,
            "valor": "Springer Spaniel inglés"
        }, {
            "id": 298,
            "especie": 0,
            "valor": "Staffordshire bull terrier"
        }, {
            "id": 299,
            "especie": 0,
            "valor": "Sussex Spaniel"
        }, {
            "id": 300,
            "especie": 0,
            "valor": "Teckel"
        }, {
            "id": 301,
            "especie": 0,
            "valor": "Terranova"
        }, {
            "id": 302,
            "especie": 0,
            "valor": "Terrier alemán"
        }, {
            "id": 303,
            "especie": 0,
            "valor": "Terrier australiano"
        }, {
            "id": 304,
            "especie": 0,
            "valor": "Terrier brasileño"
        }, {
            "id": 305,
            "especie": 0,
            "valor": "Terrier checo"
        }, {
            "id": 306,
            "especie": 0,
            "valor": "Terrier de Norfolk y Terrier de Norwich"
        }, {
            "id": 307,
            "especie": 0,
            "valor": "Terrier escocés"
        }, {
            "id": 308,
            "especie": 0,
            "valor": "Terrier galés"
        }, {
            "id": 309,
            "especie": 0,
            "valor": "Terrier Glen de Imaal irlandés"
        }, {
            "id": 310,
            "especie": 0,
            "valor": "Terrier inglés miniatura"
        }, {
            "id": 311,
            "especie": 0,
            "valor": "Terrier irlandés"
        }, {
            "id": 312,
            "especie": 0,
            "valor": "Terrier irlandés de pelo suave"
        }, {
            "id": 313,
            "especie": 0,
            "valor": "Terrier japonés"
        }, {
            "id": 314,
            "especie": 0,
            "valor": "Terrier ruso negro"
        }, {
            "id": 315,
            "especie": 0,
            "valor": "Terrier tibetano"
        }, {
            "id": 316,
            "especie": 0,
            "valor": "Tosa Inu"
        }, {
            "id": 317,
            "especie": 0,
            "valor": "Vallhund sueco"
        }, {
            "id": 318,
            "especie": 0,
            "valor": "Vizsla"
        }, {
            "id": 319,
            "especie": 0,
            "valor": "Volpino italiano"
        }, {
            "id": 320,
            "especie": 0,
            "valor": "Westie"
        }, {
            "id": 321,
            "especie": 0,
            "valor": "Whippet"
        }, {
            "id": 322,
            "especie": 0,
            "valor": "Xoloitzcuintle"
        }, {
            "id": 323,
            "especie": 0,
            "valor": "Yorkshire Terrier"
        }, {
            "id": 324,
            "especie": 1,
            "valor": "Abisinio"
        }, {
            "id": 325,
            "especie": 1,
            "valor": "American Shorthair"
        }, {
            "id": 326,
            "especie": 1,
            "valor": "American Wirehair"
        }, {
            "id": 327,
            "especie": 1,
            "valor": "Angora turco"
        }, {
            "id": 328,
            "especie": 1,
            "valor": "Azul ruso"
        }, {
            "id": 329,
            "especie": 1,
            "valor": "Balinés"
        }, {
            "id": 330,
            "especie": 1,
            "valor": "Bengala"
        }, {
            "id": 331,
            "especie": 1,
            "valor": "Birmano"
        }, {
            "id": 332,
            "especie": 1,
            "valor": "Bobtail Americano"
        }, {
            "id": 333,
            "especie": 1,
            "valor": "Bobtail japonés"
        }, {
            "id": 334,
            "especie": 1,
            "valor": "Bombay"
        }, {
            "id": 335,
            "especie": 1,
            "valor": "Bosque de Noruega"
        }, {
            "id": 336,
            "especie": 1,
            "valor": "British Longhair"
        }, {
            "id": 337,
            "especie": 1,
            "valor": "British Shorthair"
        }, {
            "id": 338,
            "especie": 1,
            "valor": "Burmilla"
        }, {
            "id": 339,
            "especie": 1,
            "valor": "California Spangled"
        }, {
            "id": 340,
            "especie": 1,
            "valor": "Californian Rex"
        }, {
            "id": 341,
            "especie": 1,
            "valor": "Cartujo"
        }, {
            "id": 342,
            "especie": 1,
            "valor": "Ceilán"
        }, {
            "id": 343,
            "especie": 1,
            "valor": "Chausie"
        }, {
            "id": 344,
            "especie": 1,
            "valor": "Cornish Rex"
        }, {
            "id": 345,
            "especie": 1,
            "valor": "Curl americano"
        }, {
            "id": 346,
            "especie": 1,
            "valor": "Cymric"
        }, {
            "id": 347,
            "especie": 1,
            "valor": "Devon Rex"
        }, {
            "id": 348,
            "especie": 1,
            "valor": "Don Sphynx"
        }, {
            "id": 349,
            "especie": 1,
            "valor": "Exótico"
        }, {
            "id": 350,
            "especie": 1,
            "valor": "Gato común"
        }, {
            "id": 351,
            "especie": 1,
            "valor": "Gato común europeo"
        }, {
            "id": 352,
            "especie": 1,
            "valor": "Gato esfinge"
        }, {
            "id": 353,
            "especie": 1,
            "valor": "Gato Siberiano"
        }, {
            "id": 354,
            "especie": 1,
            "valor": "Gato Van turco"
        }, {
            "id": 355,
            "especie": 1,
            "valor": "German Rex"
        }, {
            "id": 356,
            "especie": 1,
            "valor": "Habana Brown"
        }, {
            "id": 357,
            "especie": 1,
            "valor": "Highland Fold y Highland Straight"
        }, {
            "id": 358,
            "especie": 1,
            "valor": "Himalayo"
        }, {
            "id": 359,
            "especie": 1,
            "valor": "Javanés"
        }, {
            "id": 360,
            "especie": 1,
            "valor": "Khao Manee"
        }, {
            "id": 361,
            "especie": 1,
            "valor": "Korat"
        }, {
            "id": 362,
            "especie": 1,
            "valor": "LaPerm"
        }, {
            "id": 363,
            "especie": 1,
            "valor": "Maine Coon"
        }, {
            "id": 364,
            "especie": 1,
            "valor": "Manx"
        }, {
            "id": 365,
            "especie": 1,
            "valor": "Mau egipcio"
        }, {
            "id": 366,
            "especie": 1,
            "valor": "Munchkin"
        }, {
            "id": 367,
            "especie": 1,
            "valor": "Nebelung"
        }, {
            "id": 368,
            "especie": 1,
            "valor": "Ocicat"
        }, {
            "id": 369,
            "especie": 1,
            "valor": "Oriental"
        }, {
            "id": 370,
            "especie": 1,
            "valor": "Persa"
        }, {
            "id": 371,
            "especie": 1,
            "valor": "Persa Chinchilla"
        }, {
            "id": 372,
            "especie": 1,
            "valor": "Peterbald"
        }, {
            "id": 373,
            "especie": 1,
            "valor": "Pixie Bob"
        }, {
            "id": 374,
            "especie": 1,
            "valor": "Ragamuffin"
        }, {
            "id": 375,
            "especie": 1,
            "valor": "Ragdoll"
        }, {
            "id": 376,
            "especie": 1,
            "valor": "Safari"
        }, {
            "id": 377,
            "especie": 1,
            "valor": "Sagrado de Birmania"
        }, {
            "id": 378,
            "especie": 1,
            "valor": "Savannah"
        }, {
            "id": 379,
            "especie": 1,
            "valor": "Scottish Fold"
        }, {
            "id": 380,
            "especie": 1,
            "valor": "Selkirk Rex"
        }, {
            "id": 381,
            "especie": 1,
            "valor": "Siamés"
        }, {
            "id": 382,
            "especie": 1,
            "valor": "Siamés thai"
        }, {
            "id": 383,
            "especie": 1,
            "valor": "Singapura"
        }, {
            "id": 384,
            "especie": 1,
            "valor": "Snowshoe"
        }, {
            "id": 385,
            "especie": 1,
            "valor": "Sokoke"
        }, {
            "id": 386,
            "especie": 1,
            "valor": "Somalí"
        }, {
            "id": 387,
            "especie": 1,
            "valor": "Tiffany"
        }, {
            "id": 388,
            "especie": 1,
            "valor": "Tonkinés"
        }, {
            "id": 389,
            "especie": 1,
            "valor": "Toyger"
        }, {
            "id": 390,
            "especie": 1,
            "valor": "York Chocolate"
        }, {
            "id": 394,
            "especie": 2,
            "valor": "Hamster"
        }, {
            "id": 395,
            "especie": 2,
            "valor": "Chinchilla"
        }, {
            "id": 396,
            "especie": 2,
            "valor": "Jerbo"
        }, {
            "id": 397,
            "especie": 2,
            "valor": "Rata"
        }, {
            "id": 398,
            "especie": 2,
            "valor": "Ratón"
        }, {
            "id": 399,
            "especie": 2,
            "valor": "Ardilla"
        }, {
            "id": 400,
            "especie": 2,
            "valor": "Cobaya"
        }, {
            "id": 401,
            "especie": 2,
            "valor": "Degús"
        }, {
            "id": 402,
            "especie": 2,
            "valor": "Lirón"
        }, {
            "id": 403,
            "especie": 3,
            "valor": "Angora"
        }, {
            "id": 404,
            "especie": 3,
            "valor": "Belier"
        }, {
            "id": 404,
            "especie": 3,
            "valor": "Hotot"
        }, {
            "id": 405,
            "especie": 3,
            "valor": "Holandes/toy"
        }, {
            "id": 404,
            "especie": 4,
            "valor": "Hurón"
        }, {
            "id": 405,
            "especie": 5,
            "valor": "Iguana"
        }, {
            "id": 406,
            "especie": 5,
            "valor": "Camaleón"
        }, {
            "id": 407,
            "especie": 5,
            "valor": "Geco"
        }, {
            "id": 408,
            "especie": 5,
            "valor": "Tortuga"
        }, {
            "id": 409,
            "especie": 5,
            "valor": "Serpiente"
        }, {
            "id": 410,
            "especie": 5,
            "valor": "Rana"
        }, {
            "id": 411,
            "especie": 6,
            "valor": "Agaporni Fisher"
        }, {
            "id": 412,
            "especie": 6,
            "valor": "Agaporni Personata"
        }, {
            "id": 413,
            "especie": 6,
            "valor": "Agaporni Roseicolli"
        }, {
            "id": 414,
            "especie": 6,
            "valor": "Loro Yaco"
        }, {
            "id": 415,
            "especie": 6,
            "valor": "Loro Guacamayo"
        }, {
            "id": 416,
            "especie": 6,
            "valor": "Cacatua"
        }, {
            "id": 417,
            "especie": 6,
            "valor": "Ninfa"
        }, {
            "id": 418,
            "especie": 6,
            "valor": "Periquito"
        }, {
            "id": 419,
            "especie": 6,
            "valor": "Diamante Mandarin"
        }, {
            "id": 420,
            "especie": 6,
            "valor": "Canario"
        }, {
            "id": 421,
            "especie": 6,
            "valor": "Gallina"
        }, {
            "id": 422,
            "especie": 7,
            "valor": "Akhal-Teke"
        }, {
            "id": 423,
            "especie": 7,
            "valor": "Apaloosa"
        }, {
            "id": 424,
            "especie": 7,
            "valor": "AraApaloosa"
        }, {
            "id": 425,
            "especie": 7,
            "valor": "Árabe"
        }, {
            "id": 426,
            "especie": 7,
            "valor": "Árabe-portugués"
        }, {
            "id": 427,
            "especie": 7,
            "valor": "Asturcón"
        }, {
            "id": 428,
            "especie": 7,
            "valor": "Aveliñés"
        }, {
            "id": 429,
            "especie": 7,
            "valor": "Azteca"
        }, {
            "id": 430,
            "especie": 7,
            "valor": "Albino"
        }, {
            "id": 431,
            "especie": 7,
            "valor": "Alter Real"
        }, {
            "id": 432,
            "especie": 7,
            "valor": "AngloArgentino"
        }, {
            "id": 433,
            "especie": 7,
            "valor": "Bardigiano"
        }, {
            "id": 434,
            "especie": 7,
            "valor": "Bereber"
        }, {
            "id": 435,
            "especie": 7,
            "valor": "Bretón"
        }, {
            "id": 436,
            "especie": 7,
            "valor": "Buckskin"
        }, {
            "id": 437,
            "especie": 7,
            "valor": "Budyonny"
        }, {
            "id": 438,
            "especie": 7,
            "valor": "Basuto"
        }, {
            "id": 439,
            "especie": 7,
            "valor": "Caballo Altái"
        }, {
            "id": 440,
            "especie": 7,
            "valor": "Caballo andaluz"
        }, {
            "id": 441,
            "especie": 7,
            "valor": "Caballo de las retuertas"
        }, {
            "id": 442,
            "especie": 7,
            "valor": "Caballo de las Murgues"
        }, {
            "id": 443,
            "especie": 7,
            "valor": "Caballo de Merens"
        }, {
            "id": 444,
            "especie": 7,
            "valor": "Caballo de los Outer Banks"
        }, {
            "id": 445,
            "especie": 7,
            "valor": "Caballo ibérico"
        }, {
            "id": 446,
            "especie": 7,
            "valor": "Caballo de polo"
        }, {
            "id": 447,
            "especie": 7,
            "valor": "Caballo de pura raza gallega"
        }, {
            "id": 448,
            "especie": 7,
            "valor": "Caballo catalán"
        }, {
            "id": 449,
            "especie": 7,
            "valor": "Caballo mallorquín"
        }, {
            "id": 450,
            "especie": 7,
            "valor": "Caballo marismeño"
        }, {
            "id": 451,
            "especie": 7,
            "valor": "Caballo Marwari"
        }, {
            "id": 452,
            "especie": 7,
            "valor": "Caballo menorquín"
        }, {
            "id": 453,
            "especie": 7,
            "valor": "Caballo morab"
        }, {
            "id": 454,
            "especie": 7,
            "valor": "Chileno"
        }, {
            "id": 455,
            "especie": 7,
            "valor": "Chilote"
        }, {
            "id": 456,
            "especie": 7,
            "valor": "Criollo Colombiano"
        }, {
            "id": 457,
            "especie": 7,
            "valor": "Caballo Costarricense de Paso"
        }, {
            "id": 458,
            "especie": 7,
            "valor": "Caballo criollo"
        }, {
            "id": 459,
            "especie": 7,
            "valor": "Camargués"
        }, {
            "id": 460,
            "especie": 7,
            "valor": "Darashouri"
        }, {
            "id": 461,
            "especie": 7,
            "valor": "Don"
        }, {
            "id": 462,
            "especie": 7,
            "valor": "Dülmener Wildpferd"
        }, {
            "id": 463,
            "especie": 7,
            "valor": "Falabella"
        }, {
            "id": 464,
            "especie": 7,
            "valor": "Francés de silla"
        }, {
            "id": 465,
            "especie": 7,
            "valor": "Freiberg"
        }, {
            "id": 466,
            "especie": 7,
            "valor": "Frisón"
        }, {
            "id": 467,
            "especie": 7,
            "valor": "Gelder"
        }, {
            "id": 468,
            "especie": 7,
            "valor": "Gotland"
        }, {
            "id": 469,
            "especie": 7,
            "valor": "Hackney"
        }, {
            "id": 470,
            "especie": 7,
            "valor": "Haflinger"
        }, {
            "id": 471,
            "especie": 7,
            "valor": "Hannoveriano"
        }, {
            "id": 472,
            "especie": 7,
            "valor": "Holstein"
        }, {
            "id": 473,
            "especie": 7,
            "valor": "Iberoamericano"
        }, {
            "id": 474,
            "especie": 7,
            "valor": "Irish Cob"
        }, {
            "id": 475,
            "especie": 7,
            "valor": "Irish Hunter"
        }, {
            "id": 476,
            "especie": 7,
            "valor": "Islandés"
        }, {
            "id": 477,
            "especie": 7,
            "valor": "Jaca navarra"
        }, {
            "id": 478,
            "especie": 7,
            "valor": "Jomud"
        }, {
            "id": 479,
            "especie": 7,
            "valor": "Karabakh"
        }, {
            "id": 480,
            "especie": 7,
            "valor": "Kentucky mountain"
        }, {
            "id": 481,
            "especie": 7,
            "valor": "Kustanair"
        }, {
            "id": 482,
            "especie": 7,
            "valor": "Konik"
        }, {
            "id": 483,
            "especie": 7,
            "valor": "Lipizzano"
        }, {
            "id": 484,
            "especie": 7,
            "valor": "Lokai"
        }, {
            "id": 485,
            "especie": 7,
            "valor": "Losino"
        }, {
            "id": 486,
            "especie": 7,
            "valor": "Monchino"
        }, {
            "id": 487,
            "especie": 7,
            "valor": "Mongol"
        }, {
            "id": 488,
            "especie": 7,
            "valor": "Morab"
        }, {
            "id": 489,
            "especie": 7,
            "valor": "Morgan Horse"
        }, {
            "id": 490,
            "especie": 7,
            "valor": "Mustang"
        }, {
            "id": 491,
            "especie": 7,
            "valor": "Nonius"
        }, {
            "id": 492,
            "especie": 7,
            "valor": "Oldenburgues"
        }, {
            "id": 493,
            "especie": 7,
            "valor": "Palomino"
        }, {
            "id": 494,
            "especie": 7,
            "valor": "Pura Raza Paso Fino"
        }, {
            "id": 495,
            "especie": 7,
            "valor": "Caballo Peruano de Paso (CPP)"
        }, {
            "id": 496,
            "especie": 7,
            "valor": "Percherón"
        }, {
            "id": 497,
            "especie": 7,
            "valor": "Piebald"
        }, {
            "id": 498,
            "especie": 7,
            "valor": "Pinto"
        }, {
            "id": 499,
            "especie": 7,
            "valor": "Pottoka"
        }, {
            "id": 500,
            "especie": 7,
            "valor": "Petramo"
        }, {
            "id": 501,
            "especie": 7,
            "valor": "Przewalski"
        }, {
            "id": 502,
            "especie": 7,
            "valor": "Quarter Horse"
        }, {
            "id": 503,
            "especie": 7,
            "valor": "Rocky Mountain Horse"
        }, {
            "id": 504,
            "especie": 7,
            "valor": "Salernitano"
        }, {
            "id": 505,
            "especie": 7,
            "valor": "San Fratelano"
        }, {
            "id": 506,
            "especie": 7,
            "valor": "Poni de Shetland"
        }, {
            "id": 507,
            "especie": 7,
            "valor": "Silla americano"
        }, {
            "id": 508,
            "especie": 7,
            "valor": "Tennessee Walking"
        }, {
            "id": 509,
            "especie": 7,
            "valor": "Tersk"
        }, {
            "id": 510,
            "especie": 7,
            "valor": "Tinker"
        }, {
            "id": 511,
            "especie": 7,
            "valor": "Torik"
        }, {
            "id": 512,
            "especie": 7,
            "valor": "Trakehner"
        }, {
            "id": 513,
            "especie": 7,
            "valor": "Ucraniano"
        }, {
            "id": 514,
            "especie": 7,
            "valor": "Waler"
        },
        //Mestizos
        {
            "id": 515,
            "especie":0,
            "valor":"Mestizo"
        },
        {
            "id": 515,
            "especie":1,
            "valor":"Mestizo"
        },
        {
            "id": 515,
            "especie":2,
            "valor":"Mestizo"
        },
        {
            "id": 515,
            "especie":3,
            "valor":"Mestizo"
        },
        {
            "id": 515,
            "especie":4,
            "valor":"Mestizo"
        },
        {
            "id": 515,
            "especie":5,
            "valor":"Mestizo"
        },
        {
            "id": 515,
            "especie":6,
            "valor":"Mestizo"
        },
        {
            "id": 515,
            "especie":7,
            "valor":"Mestizo"
        },
    ];
    const raza = razas.filter((raza)=>{
       return raza.especie===id
    });

    callback(null,raza);
}

export const getGenero = function (callback){
    // getListas ('genero',callback);
    callback(null,[
        {
            "id": "M",
            "valor": "Macho"
        },{
            "id": "H",
            "valor": "Hembra"
        }
    ]);
}

