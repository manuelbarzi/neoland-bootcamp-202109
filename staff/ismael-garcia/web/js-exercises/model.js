/* 
1- Elige un nombre para tu función que sea descriptivo de lo que hace la función y que comience preferiblemente por un verbo, como en este ejemplo "order". La carcasa básica de una función es:
function nombreDeLaFunción() {

}
*/
// Ejemplo:
function orderNumbers() {

}

/*
2- Escribe un comentario en el que describas en tus propias palabras lo que tiene que hacer tu función. Escribe el comentario tanto en el archivo .js donde escribirás tu función como en el archivo .test.js donde escribirás el test de tu función.
*/
// Ejemplo:
/*Mi función debe poder ordenar un array de números en orden ascendente (de menor a mayor) o descendente (de mayor a menor), dependiendo de lo que se le indique a la función.*/

/*
3- Toda función, por norma general, recibe unos datos, hace algo con ellos, los manipula de alguna manera, o los utiliza para hacer algún trabajo, y una vez que ha terminado de realizar su trabajo devuelve algo como "resultado". Analiza tu comentario e identifica qué datos deberá recibir tu función para poder empezar a funcionar, y escribe esos datos (que se conocen con el nombre de "parámetros") dentro del paréntesis que sigue al nombre de la función.
En este ejemplo, por nuestra descripción entendemos que la función deberá recibir dos parámetros, por un lado el array de números que la función tendrá que ordenar, y por otro lado el orden en que se quiere que la función ordene ese array, ascendente o descendente.
Elige nombres descriptivos para tus parámetros.
*/
// Ejemplo:
function orderNumbers(array, order) {

}
/*
Los nombres que les pongamos a los parámetros deben ser descriptivos para que los entendamos mejor nosotros o cualquier otro desarrollador que tenga que revisar o utilizar nuestro código en el futuro, pero ten en cuenta que a la máquina le da igual qué nombres les pongamos a los parámetros, porque en el momento de leer esos parámetros en la función general que nosotros escribimos, por así llamarla, la máquina no sabe aún lo que serán esos parámetros. El nombre del parámetro puede ser array, pero eso es sólo un nombre arbitrario que nosotros hemos elegido, y la máquina no sabe todavía si lo que contendrá ese parámetro será un array o si quizá contendrá un string, o un número. El nombre no determina lo que contendrá ese parámetro. Eso la máquina llega a saberlo después, por medio de lo que escribamos nosotros dentro de la función o por medio de los argumentos (los parámetros concretos que la función reciba en cada caso diferente). Por eso, podríamos haberles puesto otros nombres a los parámetros, los que nosotros quisiéramos, como por ejemplo numbers o arrDesordenada en vez de array, o direction o howToOrder en vez de order.
En este ejemplo, imagina que decidimos usar el nombre numbers en vez de array y el nombre o en vez de order para los parámetros. El parámetro numbers recibirá el array de números que se le introduzca en cada caso a la función, y el parámetro o recibirá el orden en que debe ser ordenado el array, ascendente o descendente. Nuestra función de momento quedaría así:*/
//Ejemplo:
function orderNumbers(numbers, o) {

}
/*
Una vez que la función esté terminada, la función se podrá usar por medio de escribir el nombre de la función y de aportar argumentos (parámetros concretos). Entonces será cuando la máquina sabrá lo que es cada parámetro, sea cuál sea su nombre en la función genérica, por así llamarla, que hemos escrito.
*/
/*
4- Analiza tu comentario de nuevo e identifica ahora qué deberá devolver como resultado final tu función una vez que haya hecho su trabajo, y escribe ese resultado dentro de la función de forma provisional. ¿Devolverá tu función un string, o un array, o un número, o un boolean (true o false)? En muchas ocasiones se suele definir al principio de la función una variable en la que se guardará el valor del resultado final. Algo así:
var nombreDeLaVariable = valorInicialDeLaVariable;
Como valor inicial se podría usar, por ejemplo, algo así:
var nombreDeLaVariable = []; (Si la función tiene que devolver un array)
var nombreDeLaVariable = ''; (Si la función tiene que devolver un string)
var nombreDeLaVariable = 0; (Si la función tiene que devolver un número)
var nombreDeLaVariable = false; (Si la función tiene que devolver un boolean)



Si ves apropiado usar en tu función una variable con este propósito, entonces quizá podrías escribir en este momento también la expresión final de tu función, que será en muchas ocasiones algo así:
return nombreDeLaVariable; 
*/
//Ejemplo:
function orderNumbers(numbers, o) {
    var result = [];

}


function orderNumbers(numbers, o) {
    var result = [];

    if (o === 'asc') {
        ordered = numbers.sort(function(a, b) {
            return a - b;
        });
        
    } else if (o === 'desc') {
        ordered = numbers.sort(function(a, b) {
            return b - a;
        });

    } else {
        console.log("Enter 'asc' or 'desc' as the order parameter")
        ordered = numbers;
    }

    return result;
}