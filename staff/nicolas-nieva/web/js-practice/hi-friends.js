// function hiFriends(friends) {
//     var hello = "Hello ";

//     for(var i = 0; i < friends.length; i++) {
//         hello += friends[i] + ", ";
//     }
//     return hello;
// }

// Declaro un esquema porque me encuentro la palabra function

// Este esquema lo llamo hiFriends porque me encuentro esete nombre entre function y ()

// Este esquema necesita de una cosa que luego tendré que buscar para realizar las acciones de mi esquema
// 	porque encuentro un parámentro dentro de ()

// Abro la caja donde están el resto de cosas que necesito hacer según el esquema porque me encuentro {

// Reservo un espacio en mi cabeza porque encuentro la palabra reservada var

// Este espacio lo llamo hello porque me encuentro este nombre estre var y =

// En mi espacio asignado hello guardo la información "Hello " porque me encuentro esto entre "=" y ";"

// Entro en un bucle porque veo la palabra for

// En este bucle entro con 3 herramientas, un contador a 0 porque "var i = 0", un stopper que es "i < friends.length" y un temporizador
// que aumenta 1 mi contador porque "i++"

// Por cada vuelta de bucle voy a hacer 3 tareas:
// En la primera vuelta será
// 	- 1 tarea (ver si sigo con el bucle): Comprobamos si "i < friends.length"
// 		. Recordamos el valor de i que es 0
// 		. Recoramos el valor de friends.length que en el ejemplo es 3
// 		. Comprobamos la condición que es 0 < 3 "i < friends.length" si es true seguimos si no nos salimos del bucle
// 	- 2 tarea (lo que está entre llaves): a hello le añado el valor "hello += friends[i] + ", "".
// 		. Recordamos el valor de hello que es "Hello "
// 		. Recordamos el valor de i que es 0
// 		. Analizo en valor de friends[i] que es "Ventu"
// 		. Reasigno el valor de hello con lo dado, el nuevo valor será "Hello Ventu, "
// 	- 3 tarea (sumar al contador 1 por el temporizador): se queda en 1
// En la segunda vuelta será
// 	- 1 tarea (ver si sigo con el bucle): Comprobamos si "i < friends.length"
// 		. Recordamos el valor de i que es 1
// 		. Recoramos el valor de friends.length que en el ejemplo es 3
// 		. Comprobamos la condición que es 1 < 3 "i < friends.length" si es true seguimos si no nos salimos del bucle
// 	- 2 tarea (lo que está entre llaves): a hello le añado el valor "hello += friends[i] + ", "".
// 		. Recordamos el valor de hello que es "Hello Ventu, "
// 		. Recordamos el valor de i que es 1
// 		. Analizo en valor de friends[i] que es "Manu"
// 		. Reasigno el valor de hello con lo dado, el nuevo valor será "Hello Ventu, Manu, "
// 	- 3 tarea (sumar al contador 1 por el temporizador): se queda en 2
// En la tercera vuelta será
// 	- 1 tarea (ver si sigo con el bucle): Comprobamos si "i < friends.length"
// 		. Recordamos el valor de i que es 2
// 		. Recoramos el valor de friends.length que en el ejemplo es 3
// 		. Comprobamos la condición que es 2 < 3 "i < friends.length" si es true seguimos si no nos salimos del bucle
// 	- 2 tarea (lo que está entre llaves): a hello le añado el valor "hello += friends[i] + ", "".
// 		. Recordamos el valor de hello que es "Hello Ventu, Manu, "
// 		. Recordamos el valor de i que es 2
// 		. Analizo en valor de friends[i] que es "Zoraida"
// 		. Reasigno el valor de hello con lo dado, el nuevo valor será "Hello Ventu, Manu, Zoraida, "
// 	- 3 tarea (sumar al contador 1 por el temporizador): se queda en 3
// En la cuarta vuelta será
// 	- 1 tarea (ver si sigo con el bucle): Comprobamos si "i < friends.length"
// 		. Recordamos el valor de i que es 3
// 		. Recoramos el valor de friends.length que en el ejemplo es 3
// 		. Comprobamos la condición que es 3 < 3 "i < friends.length" si es true seguimos si no nos salimos del bucle
// 	- 2 tarea Salir del bucle porque nos encontramos un false

// Devuelvo un valor porque me encuentro la palabra reservada return

// El valor que devuelvo es hello porque me lo encuentro entre "return" y ";". El valor devuelto será "Hello Ventu, Manu, Zoraida, "


// Hacer el seguimiento de forma escrita, como sifuésemos el compilador del navegador

function hiFriends(friends) {
    var hello = "Hello "; // Hello Ventu, // Hello Ventu, Manu, // Hello Ventu, Manu, Zoraida
// 3 pasos de un for, comprobar, hacer lo entre llaves y por 'ultimo i++ es i = i + 1
    for(var i = 0; i < friends.length; i++) {
        if(friends.length - 1 === i) {
            hello = hello + friends[i];
        } else {
            ;
        }
    }
    return hello;
}

