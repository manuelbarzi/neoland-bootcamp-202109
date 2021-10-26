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
// primero vemos un esquema con el nombre 'hifriends' que necesita que le demos una informacion la cual especifica que tiene que ser friends 
// despues dentro del esquema vemos una variable llamada 'hello' la cual contiene 'hello '
// despues vemos el inicio de un bucle para que el bucle siga se tiene que cumplir que el indice 'i' sea menor que 'friends.length' i cada buelta que de el bucle se le va a sumar 1 al valor de 'i' que empieza siendo 0
// si 'i' es menor que 'friends.lenght-1' el tendra que poner 'hello' += el indice correspondiente a la informacion que le pasamos 
// si 'i' es mayor que 'friends.lenght-1' el tendra que poner 'hello' += el indice correspondiente a la informacion que le pasamos + ','
// una vez terminado el bucle tiene que retornar el valor total de hello que sera hello mas todos los valores que le hayamos dado 