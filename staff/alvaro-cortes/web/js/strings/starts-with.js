function startWith(string, value, index = 0) {
    var str = ""
    var bool = false

    for (var i = index; (i <string.length && (i <= (string.length - value.length) )&& !bool); i++)  {

        for (var j = 0; j < value.length; j++) {

            str += string[i + j]
        } 
        bool = (str === value) ? true:false;
        }


    return bool
}