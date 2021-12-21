// TODO implement the standalone version of Array.prototype.pop()
//la funcion .pop () extrae el ultimo elemento de la variable
/*function popThings(things) {
    var pop = things.pop()
    return pop
}*/

Biblio.prototype.pop = function () {
    var res = (this.length) ? this[this.length -1] : undefined;
    (this.length) ? this.length-- : null;
    return res;
}