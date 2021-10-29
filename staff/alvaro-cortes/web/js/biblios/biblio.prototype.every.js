Biblio.prototype.every = function (callback) {
    var bool = true;

    for (let i = 0; (i < this.length && bool); i++) {
        var element = this[i]

        bool = (callback(element, i)) ? true : false
    }
    return bool
}