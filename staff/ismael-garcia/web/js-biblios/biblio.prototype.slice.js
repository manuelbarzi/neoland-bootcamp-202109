Biblio.prototype.slice = function(start, end) {
    
    var sliced = new Biblio;

    start = start < 0 ? this.length + start : start;

    end = end ? (end < 0 ? this.length + end : end) : this.length;
    

    for (var i = start; i < end; i++) {
        sliced[sliced.length] = this[i];
        sliced.length++;
    }

    return sliced;
}
