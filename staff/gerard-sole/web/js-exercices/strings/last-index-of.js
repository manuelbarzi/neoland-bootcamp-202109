function lastIndexOf(str, search, index){
    var index = index ? index : str.length
    var res = -1 
    var j = search.length -1
    for (var i = index; (i >= 0 && j >= 0); i--){
        var char = str[i]
        if (char === search[j]){
            j--
            res = i
        } else {
            j = search.length -1 
            res = -1
        }

    }
    return res 
} 