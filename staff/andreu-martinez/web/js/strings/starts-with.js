function startsWith(texto, init, values) {
    var j = 0

    for (var i = values ? values : 0; i < texto.length && j < init.length; i++) {
        var chart = texto[i];
        if (chart !== init[j]) return false
        j++
    }
    return true
}