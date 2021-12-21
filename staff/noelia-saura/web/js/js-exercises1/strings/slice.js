// TODO implement the standalone version of String.prototype.slice()
//extrae una seccion de un string y devuelve un string nuevo, 
//para ello se cuenta las letras que quieres quitar empezando por 1
//tambien se puede extraer el inicio y el final indicando ex(3, -2) sacando las tres primeras letras y las dos ultimas

//devuelve la frase nueva con la nueva modificación
/*function slice(string, ...strN) {
    var newstring =string.slice(...strN)
    return newstring
}*/

function slice(string, init, end) {
    var fullstring = ''
    var start =init<0 ? string.length+init :init
    var finish = end ? (end< 0 ? string.length +end : end) :string.length
    for (var i = start ; i < finish ; i++) {
        var newstring = string[i];
        fullstring+=newstring  

    }
  
    return fullstring
}
