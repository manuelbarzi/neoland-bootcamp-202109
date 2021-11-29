console.log('TEST orderNumbers') // Esto sirve para imprimir en la consola 'Test orderNumbers' y así identificar mejor estos tests en la consola, sobre todo en caso de que estos no sean los únicos tests que se estén imprimiendo en la consola.


// CASE 1

/*
Define una variable que contenga la función con parámetros concretos. Ponle el nombre que quieras. Esta variable (aquí llamada res) contendrá el resultado de aplicar tu función a esos parámetros concretos, es decir, el valor que devuelve tu función.
*/
var res = orderNumbers([1, 2, 3, 4], 'desc') // En este caso el parámetro descrito en nuestra función como "numbers" (el array de números) es [1, 2, 3, 4], y el parámetro que hemos llamado "o" (el orden en el que se quiere ordenar los números del array) es 'desc' (en la función hemos establecido que la función reconocerá la palabra 'desc' como el parámetro para el orden descendente y 'asc' como el parámetro para el orden ascendente, pero podríamos haber usado otras palabras cualquiera, como 'down' y 'up', o 'descendente' y 'ascendente', o cualesquiera otras)

// Ahora comprobamos el resultado de nuestra función, es decir, el valor que devuelve nuestra función con estos parámetros concretos y que ahora está guardado en la variable res, es el esperado. Comprobamos distintos aspectos de ese valor para ver si es el que esperamos que sea. Si no lo es, algo ha ido mal. En este caso, si la función está bien hecha deberá devolver el resultado de ordenar el array [1, 2, 3, 4] en orden descendente, es decir, será el array [4, 3, 2, 1]. Eso quiere decir que el valor que contiene ahora la variable res (el resultado de la función) deberá cumplir las siguientes condiciones:
if (res instanceof Array // Si es un array, es decir, una instancia del objeto Array
    && res.length === 4 // Si su longitud es 4, es decir, contiene 4 elementos
    && res[0] === 4 // Si el índice 0 del array resultante es el número 4
    && res[1] === 3 // Si el índice 1 del array resultante es el número 3
    && res[2] === 2 // Si el índice 2 del array es el número 2
    && res[3] === 1) // Si el índice 3 de este array es el número 1
    console.log('test ok') // Entonces imprimimos en la consola 'test ok', y así sabremos que la máquina ha llegado hasta esta línea porque se han cumplido todas las condiciones.
else
    console.log('test failed') // Si no se cumplen todas las condiciones del if anterior entonces la máquina no entrará a leer la línea 18 y saltará al else, y se imprimirá en consola 'test failed', lo que nos indicará que algo no está bien en la función, porque no se han cumplido todas las condiciones para que la máquina pudiera llegar a la línea 18 e imprimir 'test ok'.

// CASE 2

var res = orderNumbers([4, 3, 2, 1], 'asc')

if (res instanceof Array
    && res.length === 4
    && res[0] === 1
    && res[1] === 2
    && res[2] === 3
    && res[3] === 4)
    console.log('test ok')
else
    console.log('test failed')

// CASE 3

var res = orderNumbers([4, 2, 5, 1], 'asc')

if (res instanceof Array
    && res.length === 4
    && res[0] === 1
    && res[1] === 2
    && res[2] === 4
    && res[3] === 5)
    console.log('test ok')
else
    console.log('test failed')