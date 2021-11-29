/* 
1- Nombre de la función. 
Elige un nombre para tu función que sea descriptivo de lo que hace la función y que comience preferiblemente por un verbo, como en este ejemplo "order". La carcasa básica de una función es:
function nombreDeLaFunción() {

}
*/
// Ejemplo:
function orderNumbers() {

}



/*
2- Descripción detallada de la función.
Escribe un comentario en el que describas en tus propias palabras lo que tiene que hacer tu función. Escribe el comentario tanto en el archivo .js donde escribirás tu función como en el archivo .test.js donde escribirás el test de tu función.
*/
// Ejemplo:
/*Mi función debe poder ordenar un array de números en orden ascendente (de menor a mayor) o descendente (de mayor a menor), dependiendo de lo que se le indique a la función.*/



/*
3- Parámetros de la función.
Toda función, por norma general, recibe unos datos, hace algo con ellos (los manipula de alguna manera, o los utiliza para hacer algún trabajo) y una vez que ha terminado de realizar su trabajo, devuelve algo como "resultado". Analiza tu comentario e identifica qué datos deberá recibir tu función para poder empezar a funcionar, y escribe esos datos (que se conocen con el nombre de "parámetros") dentro del paréntesis que sigue al nombre de la función.
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
Una vez que la función esté terminada, la función se podrá usar por medio de escribir el nombre de la función y de aportar argumentos (parámetros concretos). Entonces será cuando la máquina sabrá lo que es cada parámetro, sea cual sea su nombre en la función genérica, por así llamarla, que hemos escrito.
*/



/*
4- Valor que devuelve la función.
Analiza tu comentario de nuevo e identifica ahora qué deberá devolver como resultado final tu función una vez que haya hecho su trabajo, y escribe ese resultado dentro de la función de forma provisional. ¿Devolverá tu función un string, o un array, o un número, o un boolean (true o false)? En muchas ocasiones se suele definir al principio de la función una variable en la que se guardará el valor del resultado final. Algo así:
var nombreDeLaVariable = valorInicialDeLaVariable;
Como valor inicial se podría usar, por ejemplo, algo así:
var nombreDeLaVariable = []; (Si la función va a devolver un array)
var nombreDeLaVariable = ''; (Si la función va a devolver un string)
var nombreDeLaVariable = 0; (Si la función va a devolver un número)
var nombreDeLaVariable = false; (Si la función va a devolver un boolean)
Durante la función ese valor inicial cambiará y al final se devolverá esa variable cuando ya contenga el resultado deseado de la función.

Si ves apropiado usar en tu función una variable con este propósito, entonces tal vez podrías escribir en este momento también la expresión final de tu función, que será en muchas ocasiones algo así:
return nombreDeLaVariable; 
*/
//Ejemplo:
function orderNumbers(numbers, o) {
    var result = [];

    // Aquí irá el cuerpo de la función

    return result
}



/*
5- Escribir el cuerpo de la función en pseudocódigo.
Divide el problema en pequeñas partes. Define la solución para cada parte. Ten en cuenta todos los pequeños pasos que un ordenador debe dar para llegar adonde quieres. Sé específico en tus preguntas. Integra las distintas partes. Usa datos de muestra si eso te ayuda a "ver" más claramente la manera en la que tienes que manipular esos datos para devolver el valor deseado. 
Usa pseudocódigo al principio si eso te ayuda. Recuerda que la máquina necesita que le indiquemos en detalle cada pequeño pasito que debe dar, así que así debes escribrilo en tu pseudocódigo. 
Ejemplo:*/
function orderNumbers(numbers, o) {
    var result = [];

    /* Si el orden en el que hay que ordenar los números (parámetro o) es 'ascendente', la función usará un método para ordenar números (seguramente JavaScript tenga uno ya "prefabricado"). Tendrá que aplicarse ese método al array numbers y asignarse el resultado de esa operación a la variable return.
    Si el parámetro o es 'descendente', la función hará lo mismo pero usando el método de ordenar números para ordenarlos de mayor a menor en este caso.
    Si no se aporta el parámetro o, entonces la función mandará a la consola un mensaje que diga que hay que aportar ese parámetro y que debe ser o ascendente o descendente. También devolverá el array numbers tal como lo ha recibido. */
    /* En pseudocódigo:
    si o es igual a 'ascendente'
        hacer result igual al resultado de aplicar a numbers el método para ordenar de menor a mayor
    si o es igual a 'descendente'
        hacer result igual al resultado de aplicar a numbers el método para ordenar de mayor a menor
    si o no es ni 'ascendente' ni 'descendente'
        imprimir en consola 'Enter 'asc' or 'desc' as the order parameter'
        hacer result igual al array numbers
*/
    return result
}

/*
6- Transformar el pseudocódigo en código.
Decide qué sintaxis del lenguaje de programación te permite escribir el pseudocódigo de una forma que entienda la máquina.
Por ejemplo, si en el pseudocódigo has escrito que hay diversos casos y qué se debe hacer en caso, como en el ejemplo modelo que estamos usando, seguramente haya que usar alguna declaración if/else. O si en tu pseudocódigo has escrito que hay que hacer una búsqueda en los elementos de un array, entonces seguramente tendrás que usar un for loop.
*/
// Ejemplo:
function orderNumbers(numbers, o) {
    var result = [];

    if (o === 'asc') {
        result = numbers.sort(function(a, b) {
            return a - b;
        });
        
    } else if (o === 'desc') {
        result = numbers.sort(function(a, b) {
            return b - a;
        });

    } else {
        console.log("Enter 'asc' or 'desc' as the order parameter")
        result = numbers;
    }

    return result;
}