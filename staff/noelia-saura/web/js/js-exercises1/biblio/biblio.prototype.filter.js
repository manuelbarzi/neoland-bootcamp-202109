Biblio.prototype.filter = function(condition) {
    var filtered = new Biblio

    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        if (condition(element)) {
            filtered[filtered.length] = element
            filtered.length++
        }

    }

    return filtered
}