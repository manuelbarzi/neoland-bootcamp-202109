function some (array, callback){
    var res = false

    for (var i = 0;(i < array.length && !res); i++) {
        var element = array[i];
        res = callback (element, i)
        
        
    }
    return res
}
