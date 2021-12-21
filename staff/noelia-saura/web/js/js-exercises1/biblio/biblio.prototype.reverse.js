// TODO implement the standalone version of Array.prototype.reverse()

Biblio.prototype.reverse =function () {
    // iterar array hasta la mitad
    // cambiar el valor de la posición de iteracion en el comienzo del array, con el mismo valor correspondiente desde el final de array (ej: cambiar valor posicion 0, por valor posicion longitud array - 1; ej: valor posicion 1 por valor posicion array length - 2; asi sucesivamente)
    // variable temporal para guardar uno de los dos valores en el proceso de swap (intercambio)
    // al terminar el for, retornar el array

    for (var i = 0; i < this.length / 2; i++) {
        var temp = this[i]

        this[i] = this[this.length - 1 - i]

        this[this.length - 1 - i] = temp
    }

    return this
}