Biblio.prototype.concat = function() {
    var result = new Biblio

    for (i = 0; i < this.length; i++){
        result[result.length] = this[i]
        result.length ++
    }

    for (var i = 0; i < arguments.length; i++) {
        var array = arguments[i]

        for (var j = 0; j < array.length; j++) {
            var element = array[j]
            result[result.length] = element
            result.length++
        }
    }
   
    return result
}

function concat() {
    var result = []

    for (var i = 0; i < arguments.length; i++) {
        var array = arguments[i]

        for (var j = 0; j < array.length; j++) {
            var element = array[j]
            result.push(element)
        }
    }
   
    return result
}