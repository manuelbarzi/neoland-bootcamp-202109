
Biblio.prototype.pop = function () {
    if (this.length === 0)
        return

    var last = this[this.length - 1]

    this.length-- // array.length = array.length - 1

    return last
}