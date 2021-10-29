Biblio.prototype.some =  function (callback) {
    var result = false
    for (let i = 0; (i < this.length && !result); i++) {
        var element = this[i]

        /*if (callback(element, i)) {
            result = true
        }*/
        result = (callback(element, i)) ? true : false;

    }
    return result
}