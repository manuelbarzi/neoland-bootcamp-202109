Biblio.prototype.concat = function () {
    var arrays = new Biblio;

    for (let i = 0; i < this.length; i++) {
        var element = this[i];
        if (arrays[0] === undefined)
            arrays[0] = element;
        else
            arrays[0] += " " + element;
    }

    return arrays;
}