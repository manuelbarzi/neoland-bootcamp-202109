Biblio.prototype.filter = function(callback) {
    var result = new Biblio;

    for (let i = 0; i < this.length; i++) {
        var bool = callback(this[i], i);
        if (bool) {
            result[result.length] = this[i];
            result.length++;
        }
    }
    return result;
}


// Biblio.prototype.filter debe ser igual a Array.prototype.filter