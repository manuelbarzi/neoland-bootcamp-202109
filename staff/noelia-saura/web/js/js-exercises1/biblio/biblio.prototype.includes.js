
Biblio.prototype.includes=function (value) {
    var bool = false
    for (let i = 0; (i < this.length&& bool ===false); i++) {
        if (value === this[i]){
            bool = true
        }
        }
        return bool;
    }
    