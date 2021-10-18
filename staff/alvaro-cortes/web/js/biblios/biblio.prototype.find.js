Biblio.prototype.find = function (callback) {
    var result;

    for (let i = 0; (i < this.length && !result); i++) {
        var element = this[i]

        if (callback(element, i)) {
            result = element
        }
    }
    return result
}