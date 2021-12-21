function filter (array, callback){
    var filtered = []
    var k = false

    for (var i = 0;(i < array.length); i++) {
        var element = array[i];
        k = callback (element, i)
        if (k === true)
        filtered.push = element 
        
    }
    return filtered
}

function filter (array, condition) {
    var filtered = []
    for (var i = 0; i < array.length); i++{
        var array = array[i]
        if (condition (element)){

        }
    }
    return filtered
}