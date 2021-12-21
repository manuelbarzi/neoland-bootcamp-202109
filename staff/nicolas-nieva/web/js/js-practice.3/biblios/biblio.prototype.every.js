Biblio.prototype.every = function(callback) {
    var res = true

    for (var i = 0;(i < this.length && res); i++) {
        var element = this[i];
        res = callback (element, i)
        
        
    }
    return res
}

