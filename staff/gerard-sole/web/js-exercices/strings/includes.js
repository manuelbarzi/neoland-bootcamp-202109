function includes(str, character, position) {
var res = false 
var j = 0 

var position = position ? position : 0;

    for (var i = position; (i < str.length && j < character.length); i++) {
        var  char = str[i]
        if (char === character[j]) {
            res = true
        j++
        } else {
            res = false
            j = 0
        }
    
    }
    return res
}