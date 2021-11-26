function find (array, callback){
    var sol = false
    var res; 

    for (var i = 0;(i < array.length && !sol); i++) {
        var element = array[i]
        sol = callback (element, i) 
        res = (sol) ? element : undefined;


    }
return res

}