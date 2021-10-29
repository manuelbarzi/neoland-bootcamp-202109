function hiFriends(friends) {
    var hello = "Hello ";

    for(var i = 0; i < friends.length; i++) {
        if(friends.length - 1 === i) {
            hello += friends[i];
        } else {
            hello += friends[i] + ", ";
        }
    }
    return hello;
}

/*
Se crea una funcion con nombre "hiFriends", dentro de sus parentisis se denomina un parametro que luego será cambiado por el usuario cuando haga uso de la función.
Se ingesa al contenido de dicha función que contiene de inmediato una variable la cual mediante su nombre declarado "hello" se puede obtener su contenido que es "Hello ".
A continuación se encuentra un FOR que es una iteración, dentro de sus parentesis encontramos 3 reglas para iterar sobre el parametro declarado en el parentesis de la función. Los cuales son, una variable llamada i con valor 0, una comparación entre i y la longitud del parametro, que servirá para salir del bucle FOR, y por último encontramos un acomulador de i++.
Se empieza a iterar por primera vez en el parametro pasado por el usuario. En primera instancia se compara mediante un IF si la longitud del parametro - 1 es igual a i, si esto fuera cierto, se ingresa al IF y a la variable hello se suma el primer valor pasado por parametro[i]. En caso contrario que no coincida la longitud del parametro - 1 con i, no se ingresa a dicho IF y se ingresa directamente en ELSE, sumamos a la variable hello el parametro[i] + ", ".
La primera iteración se cumplió, inmediatamente se suma un valor a i, mediante i++.
Empieza la segunda iteración, se vuelve a comparar el valor de i con la longitud del parametro, si todavía i es menor a la longitud del parametro, se ingresa al bucle nuevamente.
Comienza de nuevo el proceso de cada iteración, y se agregará a la variable hello uno de los dos valores dependiendo de si ingresa al IF o ELSE. 
Cuando no se cumpla más la regla de que i es menor a la longitud del parametro, automaticamente se sale del loop y se imprimirá mediante la palabra RETURN la variable hello.
*/
