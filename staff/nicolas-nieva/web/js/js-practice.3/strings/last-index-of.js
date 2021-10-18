function lastIndexof(string, value, ini) {

    var res = -1
    var ini = ini ? ini : string.length;
    var j = value.length - 1

    for (i = ini; (i >= 0 && j >= 0); i--) {
         var char = string[i]
        if (char === value[j]) {
        j --
        res = i
    }else { j =value.length -1 
        res = -1}

    }
    return res
}
