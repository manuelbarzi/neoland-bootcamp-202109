//clausulas:
//Una cláusula es una función que tiene acceso al ambito de su función padre, :
// - incluso después de que la función padre haya terminado de ejecutar.
// - ...una función que tiene acceso al ambito de su padre ( eso describe el ambito lexico)- El ámbito léxico describe cómo las funciones anidadas (también conocidas como "secundarias") tienen acceso a las variables definidas en los ámbitos de sus padres.


function miFuncion (){
    var miValor = 2;
    console.log(miValor);

    function funcionHija (){
         console.log(miValor += 1);
    }

    funcionHija();
}

miFuncion();

//
function miFuncion (){
    var miValor = 2;
    console.log(miValor);

    function funcionHija(){
         console.log(miValor += 1);
    }

    return funcionHija;
}

var resultado = miFuncion();
console.log(resultado);
resultado();//3
resultado();//4
resultado();//5

console.log('segundo ambito')
console.log(miFuncion())

resultado();//6 - en este caso continua con la funcion hija con el console.log de resultado que empieza por 2 y va sumando hasta este punto

console.log('seteamos de nuevo el valor de resultado')
var resultado2=miFuncion()// he reseteado todo para que empiece por //2
console.log(resultado2)
resultado2 ()//3
resultado2()//4

console.log('jugamos con ambos ambitos')
resultado()//7
resultado2()//5
resulatado()//8
resultado2()//6