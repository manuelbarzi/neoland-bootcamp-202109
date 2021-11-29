Biblio.prototype.every = function(condition) {
    var res = true;

    for (let i = 0; i < this.length; i++) {
        var element = this[i];

        if (res !== condition(element, i)) {
            return false;
        }
           
    }

    return res;
}