function include(array, value) {

    var bool = false

    for (let i = 0; i < array.length && bool === false; i++) {
        if (value === array[i]) {
            bool = true

        }


    }
    return bool
}

// function include(array, value) {

//     var bool = false

//         for (var i = 0;(i < array.length && bool === false); i++){

//             if (value === array[i]) {
//                 bool = true;
//             }
//         }
//     return bool;
// }

// Crear una variable "bool" que se empiece con false y apartir de ahí:
// Se crea un for loop para comprobar lo que hay en el array,
// Comprobar con if si existe el value buscado
// Si existe este value seteamos la variable "bool" a true