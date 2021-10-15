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

// function find(arr, callback) {
//     var result;
//     var bool = false;
//     for (let i = 0;(i < arr.length && !bool); i++) {
//         bool = callback(arr[i], i);
//         result = (bool) ? arr[i] : undefined;
//     }
//     return result;