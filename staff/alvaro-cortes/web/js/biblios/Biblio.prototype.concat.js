/*Biblio.prototype.concat = function () {
    var array = bibl1;
    var arg = arguments

        for (let i = 0; i < arg[0].length; i++) {
            var element = arg[0][i];

                array[array.length] = element;
                array.length++
        }

    return array;
}*/

Biblio.prototype.concat = function () {
    var result = new Biblio;

    for (let i = 0; i < this.length; i++) {
        result[result.length] = this[i];
        result.length++;
    }

        for (let i = 0; i < arguments.length; i++) {
            var biblio = arguments[i];

            for (let j = 0;j < biblio.length; j++) {
                var element = biblio[j];

                result[result.length] = element;
                result.length++
            }
                
        }

    return result;
}