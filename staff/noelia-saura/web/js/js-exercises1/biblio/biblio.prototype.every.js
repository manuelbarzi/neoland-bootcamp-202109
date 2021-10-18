Biblio.prototype.every = function(callback) {
    var res = true;

    for (let i = 0;(i < this.length && res); i++) {
        var element = this[i]
        if(res !== callback(element, i)){
            return false
        };
        
    }

    return res;
}