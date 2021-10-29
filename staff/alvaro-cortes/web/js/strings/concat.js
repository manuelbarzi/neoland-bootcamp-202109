function concat(string, string2, ...arg) {
    var temp = ""
    if(string, string2, arg) {
        
        for(let i = 0; i < arg.length; i++){
            if(arg[i] !== ",") {
                temp += arg[i]
            }
        }
        arg = temp
        var stringFinal = string + string2 + arg
    }
    return stringFinal
}