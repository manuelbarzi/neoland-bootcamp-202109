function indexOf(string, element, fromIndex) {
    var j = 0;

    for(let i = fromIndex? fromIndex : 0; i < string.length; i++) {
        var character = string[i]

        if (character === element[j]) {
            j++ 

            if(j === element.length) {
                return i - j + 1
        }
        } else {
            j = 0
        }     
    }
    return -1
}