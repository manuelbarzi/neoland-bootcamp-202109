Biblio.prototype.filter = function(condition) {
    var result = new Biblio;

    for (let i = 0; i < this.length; i++) {
        var bool = condition(this[i], i);
        if (bool) {
            result[result.length] = this[i];
            result.length++;
        }
    }
    return result;
}




















































