function repeat(string, count) {
    // El método repeat() construye y devuelve una nueva cadena que contiene el número especificado de copias de la cadena en la cual fue llamada, concatenados. Si el parámetro count es un número decimal lo convertirá al integer justamente inferior.

    var res = '';

    count = Math.floor(count);

    while (count > 0 && count !== Infinity) {
        res += string;
        count--;
    }

    res = count === 0 ? res : 'rangeError'

    return res;
}