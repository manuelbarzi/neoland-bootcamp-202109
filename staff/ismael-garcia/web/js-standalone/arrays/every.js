function every(array, callback){
    var res = true;
    
    for (let i = 0; i < array.length; i++) {
        var element = array[i];

        if (!callback(element, i)) res = false;
        
    }
    return res;
}