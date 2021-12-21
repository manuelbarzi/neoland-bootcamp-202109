// TODO implement the standalone version of Array.prototype.indexOf()
//retorna el primer indice en el que se puede encontrar un elemento dado en el array
//o retorna -1 si el elemento no esta presente
/* indexOf principalmente sirve para que le pregunte en donde esta situado el elemento*/
// Parametros de array.idenxOf (searchElement [,fromIndex])
//searchElement es el elemento a encontrar en el array
//[fromIndex] el indice por el que comienza la busqueda, defecto es 0
  //si el indice es mayor o igual a la longitud de la array devuelve -1
  // si es negativo se toma restando posiciones desde el final del array

/*function index(array,element) {
    var idxOf = array.indexOf(element);
    return idxOf;
}*/

Biblio.prototype.indexOf = function (element, fromIndex){
    for (let i = fromIndex? fromIndex :0; i < this.length; i++) {
      var item = this[i];
        if (item === element) {
          return i
        }
    }
    return -1
  }