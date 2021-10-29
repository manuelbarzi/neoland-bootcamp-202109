Biblio.prototype.pop = function() {
    var last = this[this.length - 1];

    this.length--;

    if(this.length === 0) {
        this.arguments = undefined
    };

    return last;
}