function filter (array, callback){
    var res = []
    var k = false

    for (var i = 0;(i < array.length); i++) {
        var element = array[i];
        k = callback (element, i)
        if (k === true)
        res[res.length] = element 
        
    }
    return res
}