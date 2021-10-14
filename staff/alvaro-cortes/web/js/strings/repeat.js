function repeat(string, num) {
    var stringFinal = string
    var stringL = string.length

    if(num > 2) {
        stringL = num * stringL - stringL
    }  if(num === 0) {
        return stringFinal = ""
    }  if (num === 1) {
        return stringFinal
    } 

    for(let i = 0; i < stringL; i++) {
        stringFinal += stringFinal[i]
    }
    return stringFinal
}