

function invertText(txt) { // Este parámetro será tipo string
    var revert = ""; // Aquí estrará mi string inverso
    var copyTxt = txt;
    
    for(var i = 0; i < copyTxt.length; i++) {
        // var position = copyTxt.length - (1 + i); Esto es lo mismo que lo de abajo
        var position = copyTxt.length - 1 - i;
        revert += copyTxt[position];
    }

    // Esta solución también es valida pero mezcla lógica con la estructura del for
    // for(var i = copyTxt.length - 1 ; i >= 0; i--) {
    //     revert += copyTxt[i];
    // }

    return revert;
}
// function invertText(txt) {
//     var copyTxt = txt;
//     console.log(copyTxt.split("")); // primero convertimos en array
//     console.log(copyTxt.split("").reverse()); // revertir el array
//     console.log(copyTxt.split("").reverse().join()); // convertimos de array a string
//     return copyTxt.split("").reverse().join("");
// }