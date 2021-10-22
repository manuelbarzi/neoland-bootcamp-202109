// function miFuncion() {
//     var miValor = 2;
//     console.log(miValor);

//     function funcionHija() {
//          console.log(miValor += 1);
//     }

//     funcionHija();
// }

// miFuncion();


function miFuncion() {
    var miValor = 2;
    console.log("mi valor", miValor);

    function funcionHija() {
        console.log("mi valor", miValor += 1);
    }

    return funcionHija;
}

var resultado = miFuncion(); // Resultado ahora será la función hija
console.log(resultado);
resultado();    // 3
resultado();    // 4
resultado();    // 5

console.log("Segundo ámbito, que no guardo en ningún lado");
console.log(miFuncion());

resultado();    // 6

console.log("Seteamos de nuevo el valor de resultado");
var resultado = miFuncion();
console.log(resultado);
resultado()     // 3
resultado()     // 4
resultado()     // 5
resultado()     // 6


console.log("Creamos un nuevo ambito");
var resultado2 = miFuncion();
console.log(resultado2);
resultado2()     // 3
resultado2()     // 4

console.log("Jugamos con ambos ámbitos");
resultado();    // 7
resultado2();   // 5
resultado();    // 8
resultado2();   // 6