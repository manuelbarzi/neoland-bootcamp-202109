function hiFriends(friends){

    var hello = "Hello "

    for (let i = 0; i < friends.length; i++) {
        if(friends.length - 1 === i){
            hello += friends[i];
        } else {
            hello += friends[i] + ", ";
        }
    }
    return hello;
}

/*
Declaro un esquema al encontrar la palabra function.

Al esquema lo llamaré "hiFriends" porque encuentro esa palabra después de funciont

El esquema necesita una variable porque la encuentro entre parentesis.

Abro llaves para las instrucciones que necesito hacer al encontrar el simbolo {

Guardo un espacio en mi memoria porque encuentro la palabra "var"

Etiqueto ese espacio como "hello" y le asigno el texto "Hello "

Encuentro un bucle for el cual recorreré de uno en uno tantas veces como larga sea la variable "friends"

Dentro del bucle encuentro un if.

Evaluo la condición del if y ejecuto sus instrucciones si el largo de la variable friends - 1 es igual a i.
    - i es igual a 0, friends length es igual a 3.

Si se cumple la condición, a la variable hello le añadiré el valor de la posición 1 de la variable friends.
    - hello será igual a Hello Ventu,



*/